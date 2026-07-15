"use client"

import { FC, useState } from "react";
import clsx from "clsx";

import Button from "@/components/ui/Button";
import DateRangePicker from "@/components/ui/Input/DateRangePicker";
import StepperInput from "@/components/ui/Input/StepperInput";

interface BookingCardProps {
  pricePerNight: number;
  defaultNights?: number;
  defaultStartDate?: Date;
  defaultEndDate?: Date;
  onBook?: (nights: number, startDate: Date | null, endDate: Date | null) => void;
}

export type { BookingCardProps };

const BookingCard: FC<BookingCardProps> = (props: BookingCardProps) => {
  const {
    pricePerNight,
    defaultNights = 2,
    defaultStartDate = new Date(),
    defaultEndDate,
    onBook,
  } = props;
  
  const [nights, setNights] = useState<number>(defaultNights);
  const [startDate, setStartDate] = useState<Date | null>(defaultStartDate);
  const [endDate, setEndDate] = useState<Date | null>(defaultEndDate ?? null);

  const totalPrice = pricePerNight * nights;

  const calculateNights = (start: Date | null, end: Date | null): number | null => {
    if (!start || !end) return null;

    const msPerDay = 1000 * 60 * 60 * 24;
    const diff = Math.round((end.getTime() - start.getTime()) / msPerDay);

    return diff > 0 ? diff : null;
  };

  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);

    const newNights = calculateNights(start, end);
    if (newNights !== null) {
      setNights(newNights);
    }
  };
  
  return (
    <div 
      className={clsx("bg-white rounded-2xl border border-[#E5E5E5] p-15 flex flex-col gap-[14px] w-[445px] max-w-full")}
    >
      {/* Header */}
      <div>
        <p className={clsx("text-[#152C5B] font-medium text-[20px]")}>
          Start booking
        </p>
        <div className={clsx("flex items-baseline gap-2 mt-[14px]")}>
          <span className={clsx("text-[#1ABC9C] font-medium text-[36px] tabular-nums")}>
            ${pricePerNight}
          </span>
          <span className={clsx("text-[#969696] font-light text-[36px]")}>
            per night
          </span>
        </div>
      </div>

      {/* Stepper */}
      <StepperInput
        title="How long you will stay?"
        min={defaultNights}
        defaultValue={defaultNights}
        onChange={setNights}
      />

      {/* Date Picker */}
      <DateRangePicker
        title="Pick a date"
        defaultStartDate={defaultStartDate}
        defaultEndDate={defaultEndDate}
        onChange={handleDateChange}
      />

      {/* Summary */}
      <p className={clsx("text-[#969696] text-[16px]")}>
        You will pay{" "}
        <span className={clsx("text-[#152C5B] font-medium tabular-nums")}>
          ${totalPrice} USD
        </span>{" "}
        per{" "}
        <span className={clsx("text-[#152C5B] font-medium tabular-nums")}>
          {nights} night{nights > 1 ? "s" : ""}
        </span>
      </p>

      {/* CTA */}
      <div className={clsx("flex flex-col pt-[26px]")}>
        <Button
          text="Continue to Book"
          variant="primary"
          onClick={() => onBook?.(nights, startDate, endDate)}
        />
      </div>
    </div>
  );
};

export { BookingCard };
