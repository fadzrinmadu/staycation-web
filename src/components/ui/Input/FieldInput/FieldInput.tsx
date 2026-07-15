"use client"

import React, { useState, useRef } from "react";
import clsx from "clsx";

type InputType = "text" | "email" | "phone" | "password" | "number" | "file";

interface FieldInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  type?: InputType;
  error?: string;
  accept?: string;
  maxSizeMB?: number;
}

const FieldInput: React.FC<FieldInputProps> = ({
  label,
  type = "text",
  error,
  required,
  className,
  onBlur,
  onChange,
  accept = "image/*",
  maxSizeMB = 5,
  ...rest
}) => {
  const [internalError, setInternalError] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (type === "file") return;

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setInternalError("");
    setFileName(null);
    setPreview(null);

    if (!file) return;

    if (file.size > maxSizeMB * 1024 * 1024) {
      setInternalError(`File too large. Max size is ${maxSizeMB}MB`);
      return;
    }

    if (accept.includes("image") && !file.type.startsWith("image/")) {
      setInternalError("Only image files are allowed");
      return;
    }

    setFileName(file.name);

    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => setPreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    }

    onChange?.(e);
  };

  const handleRemoveFile = () => {
    setFileName(null);
    setPreview(null);
    setInternalError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const displayError = error || internalError;

  if (type === "file") {
    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="text-[16px] font-normal text-[#152C5B]">
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}

        <div
          onClick={() => fileInputRef.current?.click()}
          className={clsx(
            "w-full rounded-[4px] bg-[#F5F6F8] border border-dashed border-[#D3D6DC]",
            "cursor-pointer transition-colors duration-200",
            "hover:border-[#3252DF] hover:bg-[#F0F3FF]",
            displayError && "border-red-400",
          )}
        >
          {preview ? (
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="w-full max-h-[200px] object-cover rounded-[4px]"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFile();
                }}
                className={clsx(
                  "absolute top-2 right-2",
                  "bg-white rounded-full w-6 h-6",
                  "flex items-center justify-center",
                  "text-[#152C5B] text-sm font-bold",
                  "shadow hover:bg-red-50 hover:text-red-400",
                  "transition-colors duration-200"
                )}
              >
                ✕
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 py-8 px-4">
              <div className="text-[#D3D6DC] text-3xl">📁</div>
              <p className="text-[14px] text-[#152C5B] font-medium">
                Click to upload image
              </p>
              <p className="text-[12px] text-[#D3D6DC]">
                {accept === "image/*" ? "PNG, JPG, WEBP" : accept} · Max {maxSizeMB}MB
              </p>
            </div>
          )}
        </div>

        {fileName && !preview && (
          <div className="flex items-center justify-between px-2">
            <p className="text-[12px] text-[#152C5B] truncate">{fileName}</p>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="text-[12px] text-red-400 hover:text-red-600 ml-2 flex-shrink-0"
            >
              Remove
            </button>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          required={required}
          onChange={handleFileChange}
          className="hidden"
          {...rest}
        />

        {displayError && (
          <p className="text-[12px] text-red-400">{displayError}</p>
        )}
      </div>
    );
  }

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
        onChange={onChange}
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
