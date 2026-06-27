import clsx from "clsx";

import { Navbar } from "@/components/layout";
import { Button, FieldInput, PageTitle, Stepper, TransferPayment } from "@/components/ui";
import { FeaturedItem } from "@/components/ui/FeaturedItem";
import { FeaturedExample1 } from "@/assets/images/examples";
import { BcaIcon, MandiriIcon } from "@/assets/images/icons";
import { BookingCompleted } from "@/assets/images/illustrations";
import Image from "next/image";

const Booking = () => {
  return (
    <>
      <header
        id="header"
        className={clsx("border-b border-b-[#E5E5E5] px-4 md:px-6 mb-[40px] md:mb-[80px]")}
      >
        <nav
          id="navbar"
          className={clsx("w-[1110px] max-w-full m-auto")}
        >
          <Navbar variant="centered" />
        </nav>
      </header>

      <main className={clsx("w-[1110px] max-w-full mx-auto px-4 md:px-6 lg:px-[60px]")}>
        
        {/* BOOKING STEP 1 */}
        <section id="bookingStep1" className="mb-[50px] hidden">

          {/* Stepper */}
          <div className={clsx("w-[200px] md:w-[275px] mx-auto mb-[30px] md:mb-[50px]")}>
            <Stepper
              steps={[
                { id: "step-1" },
                { id: "step-2" },
                { id: "step-3" },
              ]}
              currentStep={0}
            />
          </div>

          {/* Page Title */}
          <div className={clsx("mb-[40px] md:mb-[60px]")}>
            <PageTitle
              title="Booking Information"
              description="Please fill up the blank fields"
              showBreadCrumb={false}
            />
          </div>

          {/* Content */}
          <div className={clsx(
            "flex flex-col md:flex-row",
            "items-stretch",
            "gap-y-[40px] md:gap-x-[60px]",
            "mb-[50px]"
          )}>

            <div className="w-full md:flex-1 md:basis-0 md:min-w-0">
              <FeaturedItem
                id="featured-item-3"
                imagePath={FeaturedExample1}
                title="Blue Origin Fams"
                description="Jakarta, Indonesia"
                type="booking"
                price="$480 USD"
                duration="2 night"
                className="w-full"
              />
            </div>

            {/* Pembatas */}
            <div className="block md:hidden h-px w-full bg-[#E5E5E5]" />
            <div className="hidden md:block w-px self-stretch bg-[#E5E5E5]" />

            <form className="w-full md:flex-1 md:basis-0 md:min-w-0">
              <div className="flex flex-col gap-y-4">
                <FieldInput label="First name" placeholder="Ann" type="text" />
                <FieldInput label="Last name" placeholder="Joe" type="text" />
                <FieldInput label="Email address" placeholder="ann.joe@email.com" type="email" />
                <FieldInput label="Phone number" placeholder="081342008811" type="phone" />
              </div>
            </form>
          </div>

          {/* Buttons */}
          <div className={clsx("flex flex-col gap-y-[20px] items-center")}>
            <Button
              text="Continue to Book"
              variant="primary"
              className="w-full md:w-[300px]"
            />
            <Button
              text="Continue"
              variant="secondary"
              className="w-full md:w-[300px]"
            />
          </div>

        </section>
        
        {/* BOOKING STEP 2 */}
        <section id="bookingStep2" className="mb-[50px] hidden">

          {/* Stepper */}
          <div className={clsx("w-[200px] md:w-[275px] mx-auto mb-[30px] md:mb-[50px]")}>
            <Stepper
              steps={[
                { id: "step-1" },
                { id: "step-2" },
                { id: "step-3" },
              ]}
              currentStep={1}
            />
          </div>

          {/* Page Title */}
          <div className={clsx("mb-[40px] md:mb-[60px]")}>
            <PageTitle
              title="Payment"
              description="Kindly follow the instructions below"
              showBreadCrumb={false}
            />
          </div>

          {/* Content */}
          <div className={clsx(
            "flex flex-col md:flex-row",
            "items-stretch",
            "gap-y-[40px] md:gap-x-[60px]",
            "mb-[50px]"
          )}>

            <div className="w-full md:flex-1 md:basis-0 md:min-w-0">
              <TransferPayment
                tax={10}
                subTotal={480}
                banks={[
                  {
                    logo: <BcaIcon />,
                    bankName: "Bank Central Asia",
                    accountNumber: "2208 1996",
                    accountHolder: "Buildwith Angga",
                  },
                  {
                    logo: <MandiriIcon />,
                    bankName: "Bank Mandiri",
                    accountNumber: "2208 1996",
                    accountHolder: "Buildwith Angga",
                  },
                ]}
              />
            </div>

            {/* Pembatas */}
            <div className="block md:hidden h-px w-full bg-[#E5E5E5]" />
            <div className="hidden md:block w-px self-stretch bg-[#E5E5E5]" />

            <form className="w-full md:flex-1 md:basis-0 md:min-w-0">
              <div className="flex flex-col gap-y-4">
                <FieldInput label="Upload bukti transfer" placeholder="Browse a file ..." type="file" />
                <FieldInput label="Asal bank" placeholder="Please type here ..." type="text" />
                <FieldInput label="Nama pengirim" placeholder="Please type here ..." type="text" />
              </div>
            </form>
          </div>

          {/* Buttons */}
          <div className={clsx("flex flex-col gap-y-[20px] items-center")}>
            <Button
              text="Continue to Book"
              variant="primary"
              className="w-full md:w-[300px]"
            />
            <Button
              text="Continue"
              variant="secondary"
              className="w-full md:w-[300px]"
            />
          </div>

        </section>
        
        {/* BOOKING STEP 3 */}
        <section id="bookingStep3" className="mb-[50px]">

          {/* Stepper */}
          <div className={clsx("w-[200px] md:w-[275px] mx-auto mb-[30px] md:mb-[50px]")}>
            <Stepper
              steps={[
                { id: "step-1" },
                { id: "step-2" },
                { id: "step-3" },
              ]}
              currentStep={3}
            />
          </div>

          {/* Page Title */}
          <div className={clsx("mb-[20px] md:mb-[60px]")}>
            <PageTitle
              title="Yay! Completed"
              showBreadCrumb={false}
            />
          </div>

          {/* Content */}
          <div className={clsx("flex flex-col items-center gap-y-6 mx-auto mb-[50px]")}>
            <Image
              src={BookingCompleted}
              alt="Transaction success"
              width={500}
              height={500}
              className="object-contain"
            />
            <p className="text-[18px] font-light text-[#969696] text-center leading-relaxed">
              We will inform you via email later <br />
              once the transaction has been accepted
            </p>
          </div>

          {/* Buttons */}
          <div className={clsx("flex flex-col gap-y-[20px] items-center")}>
            <Button
              text="Back to Home"
              variant="primary"
              className="w-full md:w-[300px]"
            />
          </div>

        </section>
      </main>
    </>
  );
};

export default Booking;
