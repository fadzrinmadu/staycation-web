import { FeaturedItemProps } from "@/components/ui/FeaturedItem";
import { TransferPaymentProps } from "@/components/ui/TransferPayment/TransferPayment";
import { IMAGE_PATH } from "@/constants";
import { submitBooking, updateBookingRequestField } from "@/lib/redux/features/member/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { BookingRequest } from "@/services/member/memberService.types";
import { formatToMMDDYYYY } from "@/utils/date";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Step1Fields {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface Step2Fields {
  image: File | null;
  bankFrom: string;
  accountHolder: string;
}

type Step1Errors = Partial<Record<keyof Step1Fields, string>>;
type Step2Errors = Partial<Record<keyof Step2Fields, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s\-]{8,15}$/;

export function useBooking() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1); // 1 | 2 | 3

  const { request, form, status, error } = useAppSelector((state) => state.booking);
  const isSubmitting = status === 'loading';

  // ---- Step 1: data diri ----
  const [step1, setStep1] = useState<Step1Fields>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [step1Errors, setStep1Errors] = useState<Step1Errors>({});

  const handleStep1Change =
    (field: keyof Step1Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setStep1((prev) => ({ ...prev, [field]: value }));
      setStep1Errors((prev) => ({ ...prev, [field]: undefined }));
    };

  function validateStep1(): boolean {
    const errors: Step1Errors = {};

    if (!step1.firstName.trim()) errors.firstName = "First name is required";
    if (!step1.lastName.trim()) errors.lastName = "Last name is required";

    if (!step1.email.trim()) {
      errors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(step1.email)) {
      errors.email = "Invalid email format";
    }

    if (!step1.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!PHONE_REGEX.test(step1.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }

    setStep1Errors(errors);
    return Object.keys(errors).length === 0;
  }

  // ---- Step 2: pembayaran ----
  const [step2, setStep2] = useState<Step2Fields>({
    image: null,
    bankFrom: "",
    accountHolder: "",
  });
  const [step2Errors, setStep2Errors] = useState<Step2Errors>({});

  const handleStep2Change =
    (field: keyof Step2Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (field === "image") {
        const file = e.target.files?.[0] || null;
        setStep2((prev) => ({ ...prev, image: file }));
      } else {
        const value = e.target.value;
        setStep2((prev) => ({ ...prev, [field]: value }));
      }
      setStep2Errors((prev) => ({ ...prev, [field]: undefined }));
    };

  function validateStep2(): boolean {
    const errors: Step2Errors = {};

    if (!step2.image) errors.image = "Proof of payment is required";
    if (!step2.bankFrom.trim()) errors.bankFrom = "Bank name is required";
    if (!step2.accountHolder.trim())
      errors.accountHolder = "Account holder name is required";

    setStep2Errors(errors);
    return Object.keys(errors).length === 0;
  }

  // ---- Navigasi ----
  const goNext = async () => {
    if (currentStep === 1) {
      if (!validateStep1()) return;

      dispatch(
        updateBookingRequestField({
          firstName: step1.firstName,
          lastName: step1.lastName,
          email: step1.email,
          phoneNumber: step1.phoneNumber,
          itemId: form?.item?._id || "",
          duration: Number(form?.nights || 0),
          bookingStartDate: formatToMMDDYYYY(form?.bookingStartDate || ""),
          bookingEndDate: formatToMMDDYYYY(form?.bookingEndDate || ""),
        })
      );

      setCurrentStep((prev) => Math.min(prev + 1, 3));
      return;
    }

    if (currentStep === 2) {
      if (!validateStep2()) return;

      const finalPayload: BookingRequest = {
        firstName: request?.firstName || "",
        lastName: request?.lastName || "",
        email: request?.email || "",
        phoneNumber: request?.phoneNumber || "",
        itemId: request?.itemId || "",
        duration: request?.duration || 0,
        bookingStartDate: request?.bookingStartDate || "",
        bookingEndDate: request?.bookingEndDate || "",
        accountHolder: step2.accountHolder,
        bankFrom: step2.bankFrom,
        bankId: "", // TODO: isi sesuai bank yang dipilih
        image: step2.image as File,
      };

      dispatch(updateBookingRequestField(finalPayload));

      const result = await dispatch(submitBooking(finalPayload));

      if (submitBooking.fulfilled.match(result)) {
        setCurrentStep((prev) => Math.min(prev + 1, 3));
      }
      return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const goHome = () => router.push("/");

  function getFeaturedItemData(): FeaturedItemProps {
    const formItem = form?.item;
    const formNights = form?.nights || 0;
    return {
      id: formItem?._id || "",
      imagePath: `${IMAGE_PATH}${formItem?.imageId?.[0].imageUrl || ""}`,
      title: formItem?.title || "",
      description: `${formItem?.city || ""}, ${formItem?.country || ""}`,
      type: "booking",
      price: `$${(formItem?.price || 0) * Number(formNights)} USD`,
      duration: `${formNights} night`,
    };
  }
  
  function getTransferPaymentData(): TransferPaymentProps {
    const formItem = form?.item;
    const formNights = form?.nights || 0;
    
    return {
      tax: 10,
      subTotal: (formItem?.price || 0) * Number(formNights),
      banks: formItem?.bank.map((item) => ({
        logo: `${IMAGE_PATH}${item.imageUrl || ""}`,
        bankName: item.nameBank || "",
        accountNumber: item.nomorRekening || "",
        accountHolder: item.name || "",
      })) || [],
    }
  }

  const featuredItemData = getFeaturedItemData();
  const transferPaymentData = getTransferPaymentData()

  return {
    currentStep,
    featuredItemData,
    transferPaymentData,
    goNext,
    goHome,
    setCurrentStep,
    step1,
    step1Errors,
    handleStep1Change,
    step2,
    step2Errors,
    handleStep2Change,
    isSubmitting,
    submitError: error,
  };
}
