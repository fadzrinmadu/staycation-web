"use client";

import clsx from "clsx";

import { Navbar } from "@/components/layout";
import { Button, FieldInput, PageTitle, Stepper, TransferPayment } from "@/components/ui";
import { FeaturedItem } from "@/components/ui/FeaturedItem";
import { BcaIcon, MandiriIcon } from "@/assets/images/icons";
import { BookingCompleted } from "@/assets/images/illustrations";
import Image from "next/image";
import { useBooking } from "./hook";

const Booking = () => {
  const {
    currentStep,
    featuredItemData,
    transferPaymentData,
    goHome,
    goNext,
    setCurrentStep,
    step1,
    step1Errors,
    handleStep1Change,
    step2,
    step2Errors,
    handleStep2Change,
    isSubmitting,
    submitError,
  } = useBooking();
  
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
        {currentStep === 1 && (
          <section id="bookingStep1" className="mb-[50px]">

            <div className={clsx("w-[200px] md:w-[275px] mx-auto mb-[30px] md:mb-[50px]")}>
              <Stepper
                steps={[{ id: "step-1" }, { id: "step-2" }, { id: "step-3" }]}
                currentStep={0}
              />
            </div>

            <div className={clsx("mb-[40px] md:mb-[60px]")}>
              <PageTitle
                title="Booking Information"
                description="Please fill up the blank fields"
                showBreadCrumb={false}
              />
            </div>

            <div className={clsx(
              "flex flex-col md:flex-row items-stretch",
              "gap-y-[40px] md:gap-x-[60px] mb-[50px]"
            )}>
              <div className="w-full md:flex-1 md:basis-0 md:min-w-0">
                <FeaturedItem
                  {...featuredItemData}
                  className="w-full"
                />
              </div>

              <div className="block md:hidden h-px w-full bg-[#E5E5E5]" />
              <div className="hidden md:block w-px self-stretch bg-[#E5E5E5]" />

              <form className="w-full md:flex-1 md:basis-0 md:min-w-0">
                <div className="flex flex-col gap-y-4">
                  <FieldInput
                    label="First name"
                    placeholder="Ann"
                    type="text"
                    required
                    value={step1.firstName}
                    onChange={handleStep1Change("firstName")}
                    error={step1Errors.firstName}
                  />
                  <FieldInput
                    label="Last name"
                    placeholder="Joe"
                    type="text"
                    required
                    value={step1.lastName}
                    onChange={handleStep1Change("lastName")}
                    error={step1Errors.lastName}
                  />
                  <FieldInput
                    label="Email address"
                    placeholder="ann.joe@email.com"
                    type="email"
                    required
                    value={step1.email}
                    onChange={handleStep1Change("email")}
                    error={step1Errors.email}
                  />
                  <FieldInput
                    label="Phone number"
                    placeholder="081342008811"
                    type="phone"
                    required
                    value={step1.phoneNumber}
                    onChange={handleStep1Change("phoneNumber")}
                    error={step1Errors.phoneNumber}
                  />
                </div>
              </form>
            </div>

            <div className={clsx("flex flex-col gap-y-[20px] items-center")}>
              <Button
                text="Continue to Book"
                variant="primary"
                className="w-full md:w-[300px]"
                onClick={goNext}
              />
              <Button
                text="Cancel"
                variant="secondary"
                className="w-full md:w-[300px]"
                onClick={goHome}
              />
            </div>

          </section>
        )}

        {/* BOOKING STEP 2 */}
        {currentStep === 2 && (
          <section id="bookingStep2" className="mb-[50px]">

            <div className={clsx("w-[200px] md:w-[275px] mx-auto mb-[30px] md:mb-[50px]")}>
              <Stepper
                steps={[{ id: "step-1" }, { id: "step-2" }, { id: "step-3" }]}
                currentStep={1}
              />
            </div>

            <div className={clsx("mb-[40px] md:mb-[60px]")}>
              <PageTitle
                title="Payment"
                description="Kindly follow the instructions below"
                showBreadCrumb={false}
              />
            </div>

            <div className={clsx(
              "flex flex-col md:flex-row items-stretch",
              "gap-y-[40px] md:gap-x-[60px] mb-[50px]"
            )}>
              <div className="w-full md:flex-1 md:basis-0 md:min-w-0">
                <TransferPayment
                  {...transferPaymentData}
                />
              </div>

              <div className="block md:hidden h-px w-full bg-[#E5E5E5]" />
              <div className="hidden md:block w-px self-stretch bg-[#E5E5E5]" />

              <form className="w-full md:flex-1 md:basis-0 md:min-w-0">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-4">
                    <FieldInput
                      label="Upload bukti transfer"
                      placeholder="Browse a file ..."
                      type="file"
                      required
                      onChange={handleStep2Change("image")}
                      error={step2Errors.image}
                    />
                    <FieldInput
                      label="Asal bank"
                      placeholder="Please type here ..."
                      type="text"
                      required
                      value={step2.bankFrom}
                      onChange={handleStep2Change("bankFrom")}
                      error={step2Errors.bankFrom}
                    />
                    <FieldInput
                      label="Nama pengirim"
                      placeholder="Please type here ..."
                      type="text"
                      required
                      value={step2.accountHolder}
                      onChange={handleStep2Change("accountHolder")}
                      error={step2Errors.accountHolder}
                    />
                  </div>
                </div>
              </form>
            </div>
            
            {submitError && (
              <p className="text-[14px] text-red-400 text-center mb-4">
                {submitError}
              </p>
            )}

            <div className={clsx("flex flex-col gap-y-[20px] items-center")}>
              <Button
                text={isSubmitting ? "Submitting..." : "Continue to Book"}
                variant="primary"
                className="w-full md:w-[300px]"
                onClick={goNext}
                disabled={isSubmitting}
              />
              <Button
                text="Back"
                variant="secondary"
                className="w-full md:w-[300px]"
                onClick={() => setCurrentStep(1)}
                disabled={isSubmitting}
              />
            </div>

          </section>
        )}

        {/* BOOKING STEP 3 */}
        {currentStep === 3 && (
          <section id="bookingStep3" className="mb-[50px]">

            <div className={clsx("w-[200px] md:w-[275px] mx-auto mb-[30px] md:mb-[50px]")}>
              <Stepper
                steps={[{ id: "step-1" }, { id: "step-2" }, { id: "step-3" }]}
                currentStep={3}
              />
            </div>

            <PageTitle
              title="Yay! Completed"
              showBreadCrumb={false}
            />

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

            <div className={clsx("flex flex-col gap-y-[20px] items-center")}>
              <Button
                text="Back to Home"
                variant="primary"
                className="w-full md:w-[300px]"
                onClick={goHome}
              />
            </div>

          </section>
        )}

      </main>
    </>
  );
};

export default Booking;
