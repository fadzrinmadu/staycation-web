import { useState } from "react";
import { formatDate } from "@/utils/date";
import { CalendarIcon } from "@/assets/images/icons";

interface DateRangePickerProps {
  title?: string;
  defaultStartDate?: Date;
  defaultEndDate?: Date;
  onChange?: (startDate: Date | null, endDate: Date | null) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = (props: DateRangePickerProps) => {
  const { 
    title = "Pick a date", 
    defaultStartDate = new Date(),
    defaultEndDate,
    onChange 
  } = props;
  
  const [startDate, setStartDate] = useState<Date | null>(defaultStartDate);
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate ?? null);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [selectingEnd, setSelectingEnd] = useState<Boolean>(false);
  
  const today = new Date();
  const [viewMonth, setViewMonth] = useState<number>(today.getMonth());
  const [viewYear, setViewYear] = useState<number>(today.getFullYear());
  
  const displayText = startDate && endDate
    ? `${formatDate(startDate)} – ${formatDate(endDate)}`
    : startDate
      ? `${formatDate(startDate)} – ...`
      : "... – ...";
  
  const getDaysInMonth = (month: number, year: number) => 
    new Date(year, month + 1, 0).getDate();
  
  const getFirstDayOfMonth = (month: number, year: number) =>
    new Date(year, month, 1).getDay();
  
  const handleDayClick = (day: number) => {
    const clicked = new Date(viewYear, viewMonth, day);
    
    if (!startDate || selectingEnd === false) {
      setStartDate(clicked);
      setEndDate(null);
      setSelectingEnd(true);
    } else {
      if (clicked < startDate) {
        setStartDate(clicked);
        setEndDate(null);
        setSelectingEnd(true);
      } else {
        setEndDate(clicked);
        setSelectingEnd(false);
        setIsOpen(false);
        onChange?.(startDate, clicked);
      }
    }
  };
  
  const isInRange = (day: number) => {
    if (!startDate || !endDate) return false;
    const d = new Date(viewYear, viewMonth, day);
    return d > startDate && d < endDate;
  };
  
  const isStart = (day: number) => 
    startDate?.toDateString() === new Date(viewYear, viewMonth, day).toDateString();
  
  const isEnd = (day: number) =>
    endDate?.toDateString() === new Date(viewYear, viewMonth, day).toDateString();

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((viewYear) => viewYear - 1);
    } else {
      setViewMonth((viewMonth) => viewMonth - 1);
    }
  };
  
  const nextMonth = () => {
    if (viewMonth === 11) { 
      setViewMonth(0); 
      setViewYear(viewYear => viewYear + 1); 
    }
    else setViewMonth(viewMonth => viewMonth + 1);
  };
  
  const monthName = new Date(viewYear, viewMonth).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  
  const daysInMonth = getDaysInMonth(viewMonth, viewYear);
  const firstDay = getFirstDayOfMonth(viewMonth, viewYear);
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  
  return (
    <div className="flex flex-col gap-2 relative">
      {title && (
        <h3 className="text-[16px] font-normal text-[#152C5B]">{title}</h3>
      )}

      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-[#F5F6F8] rounded-sm w-full text-left"
      >
        <div className="w-[45px] h-[45px] bg-[#152C5B] rounded-sm flex items-center justify-center flex-shrink-0">
          <CalendarIcon />
        </div>
        <span className="text-[#152C5B] font-normal text-base flex-1 text-center">
          {displayText}
        </span>
      </button>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-xl p-4 z-50 border border-gray-100">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded-lg transition-colors text-[#152C5B]">
              ‹
            </button>
            <span className="text-[#152C5B] font-semibold text-sm">{monthName}</span>
            <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded-lg transition-colors text-[#152C5B]">
              ›
            </button>
          </div>

          {/* Day labels */}
          <div className="grid grid-cols-7 mb-2">
            {days.map((d) => (
              <div key={d} className="text-center text-xs text-gray-400 font-medium py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const inRange = isInRange(day);
              const isStartDay = isStart(day);
              const isEndDay = isEnd(day);
              const isSelected = isStartDay || isEndDay;

              return (
                <button
                  key={day}
                  onClick={() => handleDayClick(day)}
                  className={`
                    text-sm py-2 text-center transition-colors relative
                    ${isSelected ? "bg-[#152C5B] text-white rounded-lg font-semibold" : ""}
                    ${inRange ? "bg-[#152C5B]/10 text-[#152C5B]" : ""}
                    ${!isSelected && !inRange ? "text-gray-600 hover:bg-gray-100 rounded-lg" : ""}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Reset */}
          {(startDate || endDate) && (
            <button
              onClick={() => { setStartDate(defaultStartDate ?? null); setEndDate(defaultEndDate ?? null); setSelectingEnd(false); }}
              className="mt-3 w-full text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              Reset
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export { DateRangePicker };
