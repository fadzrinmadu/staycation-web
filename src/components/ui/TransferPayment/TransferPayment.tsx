"use client"

import React from "react";
import clsx from "clsx";

interface BankInfo {
  logo: React.ReactNode;
  bankName: string;
  accountNumber: string;
  accountHolder: string;
}

interface TransferPaymentProps {
  tax: number;
  subTotal: number;
  banks: BankInfo[];
  className?: string;
}

const TransferPayment: React.FC<TransferPaymentProps> = ({
  tax,
  subTotal,
  banks,
  className,
}) => {
  const taxAmount = (subTotal * tax) / 100;
  const total = subTotal + taxAmount;

  const formatUSD = (amount: number) =>
    `$${amount.toLocaleString("en-US")} USD`;

  return (
    <div className={clsx("flex flex-col gap-y-4", className)}>
      {/* Title */}
      <h3 className="text-[16px] font-normal text-[#152C5B]">
        Transfer Pembayaran:
      </h3>

      {/* Summary */}
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-[60px]">
          <span className="text-[16px] font-normal text-[#152C5B] w-[80px]">Tax:</span>
          <span className="text-[16px] font-medium text-[#152C5B]">{tax}%</span>
        </div>
        <div className="flex items-center gap-x-[60px]">
          <span className="text-[16px] font-normal text-[#152C5B] w-[80px]">Sub total:</span>
          <span className="text-[16px] font-medium text-[#152C5B]">{formatUSD(subTotal)}</span>
        </div>
        <div className="flex items-center gap-x-[60px]">
          <span className="text-[16px] font-normal text-[#152C5B] w-[80px]">Total:</span>
          <span className="text-[16px] font-medium text-[#152C5B]">{formatUSD(total)}</span>
        </div>
      </div>

      {/* Bank List */}
      <div className="flex flex-col gap-y-4 mt-2">
        {banks.map((bank, index) => (
          <div key={index} className="flex items-center gap-x-4">
            {/* Logo */}
            <div className="w-[60px] h-[40px] rounded-[4px] overflow-hidden flex-shrink-0 flex items-center justify-center">
              {bank.logo}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-y-[2px]">
              <span className="text-[14px] font-normal text-[#152C5B]">
                {bank.bankName}
              </span>
              <span className="text-[14px] font-normal text-[#152C5B]">
                {bank.accountNumber}
              </span>
              <span className="text-[14px] font-normal text-[#152C5B]">
                {bank.accountHolder}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export type { TransferPaymentProps, BankInfo };
export { TransferPayment };
