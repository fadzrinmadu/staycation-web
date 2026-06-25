import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./Stepper";

const steps = [
  { id: "step-1" },
  { id: "step-2" },
  { id: "step-3" },
];

const meta: Meta<typeof Stepper> = {
  title: "Components/UI/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  args: {
    steps,
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  args: {
    currentStep: 0,
  },
};

export const FirstCompleted: Story = {
  args: {
    currentStep: 1,
  },
};

export const AllCompleted: Story = {
  args: {
    currentStep: 3,
  },
};
