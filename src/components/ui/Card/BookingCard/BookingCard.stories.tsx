import { BookingCard } from "./BookingCard";

export default {
  title: "Components/UI/BookingCard",
  component: BookingCard,
};

export const Default = () => (
  <div className="px-10">
    <BookingCard
      pricePerNight={280}
      defaultNights={2}
      defaultStartDate={new Date("2025-01-20")}
      defaultEndDate={new Date("2025-01-22")}
      onBook={(nights, start, end) => {
        console.log("Booking:", { nights, start, end });
      }}
    />
  </div>
);
