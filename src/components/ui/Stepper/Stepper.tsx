import clsx from "clsx";
import React, { FC, Fragment } from "react";

export type StepStatus = "completed" | "active" | "upcoming";

export interface Step {
  id: string | number;
  label?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

const Stepper: FC<StepperProps> = (props: StepperProps) => {
  const { steps, currentStep, className } = props;
  
  const getStatus = (index: number): StepStatus => {
    if (index < currentStep) return "completed";
    if (index === currentStep) return "active";
    return "upcoming";
  };
  
  return (
    <div className={clsx("flex items-center", className)}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <StepCircle
            number={index + 1}
            status={getStatus(index)}
          />

          {index < steps.length - 1 && (
            <div className="flex-1 h-px bg-[#E5E5E5] mx-1" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

interface StepCircleProps {
  number: number;
  status: StepStatus;
}

const StepCircle: React.FC<StepCircleProps> = ({ number, status }) => {
  const isCompleted = status === "completed";
  const isActive = status === "active";

  return (
    <div
      className={clsx(
        "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300",
        isCompleted && "bg-[#5BBFAA]",
        isActive && "bg-[#E5E5E5] ring-1 ring-offset-4 ring-[#E5E5E5]",  // ← active style
        !isCompleted && !isActive && "bg-[#E5E5E5]"
      )}
    >
      {isCompleted ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 10L8.5 14.5L16 6"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <span 
          className={clsx(
            "text-[#898989] text-[18px] font-light select-none",
            isActive && "font-medium",
          )}
        >
          {number}
        </span>
      )}
    </div>
  );
};

export { Stepper };
