import React, { useState } from "react";
import clsx from "clsx";

type InputType = "text" | "email" | "phone" | "password" | "number";

interface FieldInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  type?: InputType;
  error?: string;
}

const FieldInput: React.FC<FieldInputProps> = ({
  label,
  type = "text",
  error,
  required,
  className,
  onBlur,
  ...rest
}) => {
  const [internalError, setInternalError] = useState("");

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (required && !value) {
      setInternalError("This field is required");
    } else if (type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setInternalError("Invalid email format");
    } else if (type === "phone" && value && !/^[+]?[\d\s\-]{8,15}$/.test(value)) {
      setInternalError("Invalid phone number");
    } else {
      setInternalError("");
    }

    onBlur?.(e);
  };

  const displayError = error || internalError;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-[16px] font-normal text-[#152C5B]">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        required={required}
        onBlur={handleBlur}
        className={clsx(
          "w-full px-4 py-3 rounded-[4px] bg-[#F5F6F8]",
          "text-[16px] font-normal text-[#152C5B]",
          "border border-transparent",
          "placeholder:text-[#D3D6DC]",
          "outline-none focus:border-[#3252DF]",
          "transition-colors duration-200",
          displayError && "border-red-400 focus:border-red-400",
          className,
        )}
        {...rest}
      />
      {displayError && (
        <p className="text-[12px] text-red-400">{displayError}</p>
      )}
    </div>
  );
};

export type { FieldInputProps };
export { FieldInput };
