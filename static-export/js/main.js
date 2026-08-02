/* ==========================================================================
   main.js — every client-side interaction from the original React components,
   rewritten in vanilla JS. No dependencies, no build step.

   Ported from:
     layout/Navbar               -> mobile menu toggle + active link
     ui/Input/StepperInput       -> "- N nights +" counter
     ui/Input/DateRangePicker    -> custom calendar range picker
     ui/Card/BookingCard         -> price summary + "Continue to Book"
     ui/Input/FieldInput         -> on-blur validation, file upload + preview
     app/booking/page + hook     -> 3-step wizard and its validation gates
     layout/Loading              -> rotating status messages
   ========================================================================== */

(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  /* ======================================================================
     Navbar — layout/Navbar.tsx
     ====================================================================== */

  function initNavbar() {
    var toggle = $("[data-menu-toggle]");
    var list = $("[data-menu-list]");

    if (toggle && list) {
      // Class sets copied from the clsx() branches in Navbar.tsx
      var CLOSED = ["min-h-0", "opacity-0", "md:opacity-100"];
      var OPEN = ["min-h-[260px]", "opacity-100"];
      var open = false;

      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        open = !open;
        toggle.setAttribute("aria-expanded", String(open));
        if (open) {
          CLOSED.forEach(function (cls) { list.classList.remove(cls); });
          OPEN.forEach(function (cls) { list.classList.add(cls); });
        } else {
          OPEN.forEach(function (cls) { list.classList.remove(cls); });
          CLOSED.forEach(function (cls) { list.classList.add(cls); });
        }
      });
    }

    // Active link: the source preventDefaults and only recolours the item.
    var items = $$("[data-menu-item]");
    items.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        items.forEach(function (other) {
          other.classList.remove("text-[#2749DE]");
          other.classList.add("text-[#152C5B]");
        });
        item.classList.remove("text-[#152C5B]");
        item.classList.add("text-[#2749DE]");
      });
    });
  }

  /* ======================================================================
     StepperInput + BookingCard — nights counter drives the price summary
     ====================================================================== */

  function initStepperInputs() {
    $$("[data-stepper-input]").forEach(function (root) {
      var min = Number(root.getAttribute("data-min")) || 0;
      var max = Number(root.getAttribute("data-max")) || 30;
      var count = Number(root.getAttribute("data-value")) || 0;

      var dec = $("[data-stepper-dec]", root);
      var inc = $("[data-stepper-inc]", root);
      var label = $("[data-stepper-value]", root);
      var card = root.closest("[data-booking-card]");

      function render() {
        root.setAttribute("data-value", String(count));
        label.textContent = count + " " + (count === 1 ? "night" : "nights");
        dec.disabled = count <= min;
        inc.disabled = count >= max;
        if (card) updateBookingSummary(card, count);
      }

      dec.addEventListener("click", function () {
        if (count <= min) return;
        count -= 1;
        render();
      });

      inc.addEventListener("click", function () {
        if (count >= max) return;
        count += 1;
        render();
      });

      render();
    });
  }

  function updateBookingSummary(card, nights) {
    var price = Number(card.getAttribute("data-price")) || 0;
    var total = $("[data-booking-total]", card);
    var nightsEl = $("[data-booking-nights]", card);
    if (total) total.textContent = "$" + price * nights + " USD";
    if (nightsEl) {
      nightsEl.textContent = nights + " night" + (nights > 1 ? "s" : "");
    }
  }

  function initBookingCta() {
    $$("[data-book-cta]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var href = btn.getAttribute("data-href");
        if (href) window.location.href = href;
      });
    });
  }

  /* ======================================================================
     DateRangePicker — ui/Input/DateRangePicker.tsx
     ====================================================================== */

  var DAY_MS = 1000 * 60 * 60 * 24;

  // utils/date.ts -> formatDate()
  function formatDate(date) {
    return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  }

  function sameDay(a, b) {
    return !!a && !!b && a.toDateString() === b.toDateString();
  }

  function initDateRangePickers() {
    $$("[data-daterange]").forEach(function (root) {
      var nights = Number(root.getAttribute("data-nights")) || 2;

      var trigger = $("[data-daterange-trigger]", root);
      var panel = $("[data-daterange-panel]", root);
      var display = $("[data-daterange-display]", root);
      var monthLabel = $("[data-daterange-month]", root);
      var grid = $("[data-daterange-days]", root);
      var prev = $("[data-daterange-prev]", root);
      var next = $("[data-daterange-next]", root);
      var reset = $("[data-daterange-reset]", root);

      // Defaults mirror the stay hook: today .. today + sumBooking
      var today = new Date();
      var defaultStart = new Date(today);
      var defaultEnd = new Date(new Date(today).setDate(today.getDate() + nights));

      var startDate = defaultStart;
      var endDate = defaultEnd;
      var selectingEnd = false;
      var isOpen = false;
      var viewMonth = today.getMonth();
      var viewYear = today.getFullYear();

      function renderDisplay() {
        if (startDate && endDate) {
          display.textContent = formatDate(startDate) + " – " + formatDate(endDate);
        } else if (startDate) {
          display.textContent = formatDate(startDate) + " – ...";
        } else {
          display.textContent = "... – ...";
        }
      }

      function inRange(day) {
        if (!startDate || !endDate) return false;
        var d = new Date(viewYear, viewMonth, day);
        return d > startDate && d < endDate;
      }

      function renderGrid() {
        monthLabel.textContent = new Date(viewYear, viewMonth)
          .toLocaleDateString("en-US", { month: "long", year: "numeric" });

        var daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
        var firstDay = new Date(viewYear, viewMonth, 1).getDay();

        grid.textContent = "";

        for (var i = 0; i < firstDay; i++) {
          grid.appendChild(document.createElement("div"));
        }

        for (var day = 1; day <= daysInMonth; day++) {
          var cellDate = new Date(viewYear, viewMonth, day);
          var isSelected = sameDay(startDate, cellDate) || sameDay(endDate, cellDate);
          var isBetween = inRange(day);

          // Class list copied from the template literal in DateRangePicker.tsx
          var cls = "text-sm py-2 text-center transition-colors relative";
          if (isSelected) cls += " bg-[#152C5B] text-white rounded-lg font-semibold";
          if (isBetween) cls += " bg-[#152C5B]/10 text-[#152C5B]";
          if (!isSelected && !isBetween) {
            cls += " text-gray-600 hover:bg-gray-100 rounded-lg";
          }

          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = cls;
          btn.textContent = String(day);
          btn.setAttribute("data-day", String(day));
          grid.appendChild(btn);
        }

        reset.hidden = !(startDate || endDate);
      }

      function setOpen(value) {
        isOpen = value;
        panel.hidden = !isOpen;
        trigger.setAttribute("aria-expanded", String(isOpen));
        if (isOpen) renderGrid();
      }

      grid.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-day]");
        if (!btn) return;

        var clicked = new Date(viewYear, viewMonth, Number(btn.getAttribute("data-day")));

        if (!startDate || selectingEnd === false) {
          startDate = clicked;
          endDate = null;
          selectingEnd = true;
        } else if (clicked < startDate) {
          startDate = clicked;
          endDate = null;
          selectingEnd = true;
        } else {
          endDate = clicked;
          selectingEnd = false;
          renderDisplay();
          setOpen(false);
          return;
        }

        renderDisplay();
        renderGrid();
      });

      trigger.addEventListener("click", function () { setOpen(!isOpen); });
      prev.addEventListener("click", function () {
        if (viewMonth === 0) { viewMonth = 11; viewYear -= 1; } else { viewMonth -= 1; }
        renderGrid();
      });
      next.addEventListener("click", function () {
        if (viewMonth === 11) { viewMonth = 0; viewYear += 1; } else { viewMonth += 1; }
        renderGrid();
      });
      reset.addEventListener("click", function () {
        startDate = defaultStart;
        endDate = defaultEnd;
        selectingEnd = false;
        renderDisplay();
        renderGrid();
      });

      // Close when clicking outside the picker. This listens on mousedown, not
      // click: picking a day re-renders the grid, so by click time the button
      // that was pressed is already detached and would look "outside".
      document.addEventListener("mousedown", function (e) {
        if (isOpen && !root.contains(e.target)) setOpen(false);
      });

      renderDisplay();
    });
  }

  /* ======================================================================
     FieldInput validation — ui/Input/FieldInput.tsx
     ====================================================================== */

  var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_REGEX = /^[+]?[\d\s\-]{8,15}$/;

  var ERROR_CLASSES = ["border-red-400", "focus:border-red-400"];

  function setFieldError(input, message) {
    var wrapper = input.closest("div");
    var errorEl = wrapper ? $("[data-error]", wrapper) : null;

    if (message) {
      ERROR_CLASSES.forEach(function (cls) { input.classList.add(cls); });
      if (errorEl) { errorEl.textContent = message; errorEl.hidden = false; }
    } else {
      ERROR_CLASSES.forEach(function (cls) { input.classList.remove(cls); });
      if (errorEl) { errorEl.textContent = ""; errorEl.hidden = true; }
    }
  }

  // The component's own on-blur messages
  function validateOnBlur(input) {
    var value = input.value;
    var kind = input.getAttribute("data-validate");

    if (input.required && !value) return "This field is required";
    if (kind === "email" && value && !EMAIL_REGEX.test(value)) {
      return "Invalid email format";
    }
    if (kind === "phone" && value && !PHONE_REGEX.test(value)) {
      return "Invalid phone number";
    }
    return "";
  }

  function initFieldValidation() {
    $$("input[data-validate]").forEach(function (input) {
      input.addEventListener("blur", function () {
        setFieldError(input, validateOnBlur(input));
      });
      input.addEventListener("input", function () {
        setFieldError(input, "");
      });
    });
  }

  /* ======================================================================
     File upload + preview — the type="file" branch of FieldInput
     ====================================================================== */

  function initUploads() {
    $$("[data-upload]").forEach(function (root) {
      var maxMB = Number(root.getAttribute("data-max-mb")) || 5;
      var dropzone = $("[data-upload-dropzone]", root);
      var input = $("[data-upload-input]", root);
      var empty = $("[data-upload-empty]", root);
      var preview = $("[data-upload-preview]", root);
      var previewImg = $("[data-upload-preview-img]", root);
      var nameRow = $("[data-upload-filename-row]", root);
      var nameEl = $("[data-upload-filename]", root);
      var errorEl = $("[data-error]", root);

      function setError(message) {
        if (message) {
          dropzone.classList.add("border-red-400");
          errorEl.textContent = message;
          errorEl.hidden = false;
        } else {
          dropzone.classList.remove("border-red-400");
          errorEl.textContent = "";
          errorEl.hidden = true;
        }
      }

      function clearFile() {
        input.value = "";
        previewImg.removeAttribute("src");
        preview.hidden = true;
        nameRow.hidden = true;
        empty.hidden = false;
        setError("");
      }

      dropzone.addEventListener("click", function () { input.click(); });

      input.addEventListener("change", function () {
        var file = input.files && input.files[0];
        setError("");
        preview.hidden = true;
        nameRow.hidden = true;
        empty.hidden = false;

        if (!file) return;

        if (file.size > maxMB * 1024 * 1024) {
          setError("File too large. Max size is " + maxMB + "MB");
          input.value = "";
          return;
        }
        if (file.type.indexOf("image/") !== 0) {
          setError("Only image files are allowed");
          input.value = "";
          return;
        }

        nameEl.textContent = file.name;

        var reader = new FileReader();
        reader.onload = function (ev) {
          previewImg.src = ev.target.result;
          preview.hidden = false;
          empty.hidden = true;
          nameRow.hidden = true;
        };
        reader.readAsDataURL(file);
      });

      $$("[data-upload-remove]", root).forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          clearFile();
        });
      });
    });
  }

  /* ======================================================================
     Booking wizard — app/booking/page.tsx + hook.tsx
     ====================================================================== */

  // Submit-time messages from useBooking(); these differ from the on-blur ones.
  var STEP1_RULES = [
    { id: "firstName", required: "First name is required" },
    { id: "lastName", required: "Last name is required" },
    { id: "email", required: "Email is required", regex: EMAIL_REGEX,
      invalid: "Invalid email format" },
    { id: "phoneNumber", required: "Phone number is required", regex: PHONE_REGEX,
      invalid: "Invalid phone number" },
  ];

  var STEP2_RULES = [
    { id: "bankFrom", required: "Bank name is required" },
    { id: "accountHolder", required: "Account holder name is required" },
  ];

  function validateRules(rules) {
    var valid = true;
    rules.forEach(function (rule) {
      var input = document.getElementById(rule.id);
      if (!input) return;
      var value = input.value.trim();
      var message = "";
      if (!value) {
        message = rule.required;
      } else if (rule.regex && !rule.regex.test(value)) {
        message = rule.invalid;
      }
      setFieldError(input, message);
      if (message) valid = false;
    });
    return valid;
  }

  function validateStep1() {
    return validateRules(STEP1_RULES);
  }

  function validateStep2() {
    var valid = validateRules(STEP2_RULES);

    var upload = $("[data-upload]");
    if (upload) {
      var input = $("[data-upload-input]", upload);
      var errorEl = $("[data-error]", upload);
      var dropzone = $("[data-upload-dropzone]", upload);
      var hasFile = input.files && input.files.length > 0;

      if (!hasFile) {
        dropzone.classList.add("border-red-400");
        errorEl.textContent = "Proof of payment is required";
        errorEl.hidden = false;
        valid = false;
      }
    }
    return valid;
  }

  function initBookingWizard() {
    var steps = $$("[data-booking-step]");
    if (!steps.length) return;

    function showStep(target) {
      steps.forEach(function (section) {
        section.hidden = section.getAttribute("data-booking-step") !== String(target);
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    $$("[data-goto-step]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = Number(btn.getAttribute("data-goto-step"));
        var current = Number(
          btn.closest("[data-booking-step]").getAttribute("data-booking-step")
        );

        // Going backwards never validates, matching setCurrentStep(1) in the source.
        if (target > current) {
          if (current === 1 && !validateStep1()) return;
          if (current === 2 && !validateStep2()) return;
        }
        showStep(target);
      });
    });

    $$("[data-go-home]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        window.location.href = "index.html";
      });
    });
  }

  /* ======================================================================
     Loading — layout/Loading.tsx
     ====================================================================== */

  var LOADING_MESSAGES = [
    "Finding the best places for you...",
    "Curating your top picks...",
    "Checking room availability...",
    "Almost there...",
  ];

  function initLoading() {
    var el = $("[data-loading-message]");
    if (!el) return;

    var index = 0;
    setInterval(function () {
      index = (index + 1) % LOADING_MESSAGES.length;
      el.textContent = LOADING_MESSAGES[index];
      // React remounted the node via key={messageIndex}; restart the animation
      // by hand so the fade replays on every message.
      el.style.animation = "none";
      void el.offsetWidth;
      el.style.animation = "";
    }, 1800);
  }

  /* ====================================================================== */

  function init() {
    initNavbar();
    initStepperInputs();
    initBookingCta();
    initDateRangePickers();
    initFieldValidation();
    initUploads();
    initBookingWizard();
    initLoading();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
