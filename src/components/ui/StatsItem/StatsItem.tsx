import React, { ReactNode } from "react";

interface StatsItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  value: string;
  label: string;
}

export type { StatsItemProps };

const StatsItem: React.FC<StatsItemProps> = (props: StatsItemProps) => {
  const { id, icon, value, label, className, ...rest } = props;
  return (
    <div>
      <div className="mb-[10px]">
        {icon}
      </div>
      <div className="text-base">
        <span className="font-medium text-[#152C5B]">{value}</span>{" "}
        <span className="font-light text-[#969696]">{label}</span>
      </div>
    </div>
  )
};

export { StatsItem };
