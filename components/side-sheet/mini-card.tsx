import { cn } from "@/lib/utils";
import React from "react";

const MiniCard = ({
  icon: Icon,
  iconCn,
  title,
  value,
  className,
}: {
  icon: React.ElementType;
  iconCn?: string;
  title: string;
  value: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <Icon size={24} weight="fill" className={cn("shrink-0", iconCn)} />
      <p className="text-xs opacity-60 font-medium mt-[3px]">{title}</p>
      <p className=" text-[16px] font-semibold">{value}</p>
    </div>
  );
};

export default MiniCard;
