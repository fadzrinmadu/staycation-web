import clsx from "clsx";
import { FC, useState } from "react";

interface StepperInputProps {
  title?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const StepperInput: FC<StepperInputProps> = (props: StepperInputProps) => {
  const { title, min = 0, max = 30, defaultValue = 0, onChange } = props;
  
    const [count, setCount] = useState(defaultValue);

  const handleDecrement = () => {
    if (count <= min) return;
    const newValue = count - 1;
    setCount(newValue);
    onChange?.(newValue);
  };

  const handleIncrement = () => {
    if (count >= max) return;
    const newValue = count + 1;
    setCount(newValue);
    onChange?.(newValue);
  };
  
  return (
    <div
      className={clsx("flex flex-col gap-2")}
    >
      {title && (
        <h3
          className={clsx("text-[16px] font-normal text-[#152C5B]")}
        >
          {title}
        </h3>
      )}
      
      <div
        className={clsx("flex items-center rounded-sm bg-[#F5F6F8]")}
      >
        <button
          onClick={handleDecrement}
          disabled={count <= min}
          className={clsx("w-[45px] h-[45px] rounded-sm bg-[#E74C3C] hover:bg-[#C0392B] disabled:opacity-40 disabled:cursor-not-allowed text-[24px] font-bold text-white transition-colors flex items-center justify-center flex-shrink-0")}
        >
          -
        </button>
        
        <div
          className={clsx("flex-1 h-[45px] rounded-sm flex items-center justify-center")}
        >
          <span
            className={clsx("text-[16px] font-normal text-[#152C5B] mx-2")}
          >
            {count} {count === 1 ? "night" : "nights"}
          </span>
        </div>
        
        <button
          onClick={handleIncrement}
          disabled={count >= max}
          className={clsx("w-[45px] h-[45px] rounded-sm bg-[#1ABC9C] hover:bg-[#17A589] disabled:opacity-40 disabled:cursor-not-allowed text-[24px] font-bold text-white transition-colors flex items-center justify-center flex-shrink-0")}
        >
          +
        </button>
      </div>
    </div>
  );
};

export { StepperInput };
