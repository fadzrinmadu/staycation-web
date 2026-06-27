// TransferPayment.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { TransferPayment } from "./TransferPayment";

const BcaLogo = () => (
  <div className="w-full h-full bg-[#005BAB] rounded-[4px] flex items-center justify-center">
    <span className="text-white text-[10px] font-bold tracking-wide">BCA</span>
  </div>
);

const MandiriLogo = () => (
  <div className="w-full h-full bg-[#003D80] rounded-[4px] flex items-center justify-center">
    <span className="text-yellow-400 text-[8px] font-bold tracking-wide">mandiri</span>
  </div>
);

const BniLogo = () => (
  <div className="w-full h-full bg-[#F77F00] rounded-[4px] flex items-center justify-center">
    <span className="text-white text-[10px] font-bold tracking-wide">BNI</span>
  </div>
);

const meta: Meta<typeof TransferPayment> = {
  title: "Components/UI/TransferPayment",
  component: TransferPayment,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Komponen untuk menampilkan ringkasan pembayaran transfer beserta daftar rekening bank tujuan. Total dihitung otomatis dari subTotal dan tax.",
      },
    },
  },
  argTypes: {
    tax: {
      control: { type: "number", min: 0, max: 100, step: 1 },
      description: "Persentase pajak (contoh: 10 untuk 10%)",
    },
    subTotal: {
      control: { type: "number", min: 0, step: 10 },
      description: "Harga sebelum pajak dalam USD",
    },
    banks: {
      control: false,
      description: "Daftar bank (logo, nama, nomor rekening, pemilik)",
    },
    className: {
      control: "text",
      description: "Class tambahan untuk styling",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TransferPayment>;

// ─── Stories ──────────────────────────────────────────────

export const Default: Story = {
  name: "Default (BCA & Mandiri)",
  args: {
    tax: 10,
    subTotal: 480,
    banks: [
      {
        logo: <BcaLogo />,
        bankName: "Bank Central Asia",
        accountNumber: "2208 1996",
        accountHolder: "Buildwith Angga",
      },
      {
        logo: <MandiriLogo />,
        bankName: "Bank Mandiri",
        accountNumber: "2208 1996",
        accountHolder: "Buildwith Angga",
      },
    ],
  },
};

export const SingleBank: Story = {
  name: "Single Bank",
  args: {
    tax: 10,
    subTotal: 480,
    banks: [
      {
        logo: <BcaLogo />,
        bankName: "Bank Central Asia",
        accountNumber: "2208 1996",
        accountHolder: "Buildwith Angga",
      },
    ],
  },
};

export const MultipleBanks: Story = {
  name: "Multiple Banks (3 bank)",
  args: {
    tax: 10,
    subTotal: 480,
    banks: [
      {
        logo: <BcaLogo />,
        bankName: "Bank Central Asia",
        accountNumber: "2208 1996",
        accountHolder: "Buildwith Angga",
      },
      {
        logo: <MandiriLogo />,
        bankName: "Bank Mandiri",
        accountNumber: "3310 2024",
        accountHolder: "Buildwith Angga",
      },
      {
        logo: <BniLogo />,
        bankName: "Bank BNI",
        accountNumber: "1122 3344",
        accountHolder: "Buildwith Angga",
      },
    ],
  },
};

export const HighTax: Story = {
  name: "High Tax (20%)",
  args: {
    tax: 20,
    subTotal: 480,
    banks: [
      {
        logo: <BcaLogo />,
        bankName: "Bank Central Asia",
        accountNumber: "2208 1996",
        accountHolder: "Buildwith Angga",
      },
    ],
  },
};

export const ZeroTax: Story = {
  name: "No Tax (0%)",
  args: {
    tax: 0,
    subTotal: 480,
    banks: [
      {
        logo: <MandiriLogo />,
        bankName: "Bank Mandiri",
        accountNumber: "2208 1996",
        accountHolder: "Buildwith Angga",
      },
    ],
  },
};

export const LargeAmount: Story = {
  name: "Large Amount",
  args: {
    tax: 10,
    subTotal: 10000,
    banks: [
      {
        logo: <BcaLogo />,
        bankName: "Bank Central Asia",
        accountNumber: "2208 1996",
        accountHolder: "Buildwith Angga",
      },
      {
        logo: <MandiriLogo />,
        bankName: "Bank Mandiri",
        accountNumber: "2208 1996",
        accountHolder: "Buildwith Angga",
      },
    ],
  },
};

export const WithCustomClass: Story = {
  name: "With Custom Class (border & padding)",
  args: {
    tax: 10,
    subTotal: 480,
    className: "border border-[#E5E5E5] rounded-[8px] p-6 max-w-[400px]",
    banks: [
      {
        logo: <BcaLogo />,
        bankName: "Bank Central Asia",
        accountNumber: "2208 1996",
        accountHolder: "Buildwith Angga",
      },
      {
        logo: <MandiriLogo />,
        bankName: "Bank Mandiri",
        accountNumber: "2208 1996",
        accountHolder: "Buildwith Angga",
      },
    ],
  },
};
