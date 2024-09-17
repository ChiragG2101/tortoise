import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const DataCard = ({
  title,
  value,
  isActive,
  icon: Icon,
  href,
}: {
  title: string;
  value: string;
  isActive: boolean;
  icon: React.ElementType;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "p-4 flex justify-between gap-4  rounded-lg",
        isActive
          ? "bg-primary border-2  border-[#167E62] text-white"
          : "bg-secondary-foreground/5 text-foreground"
      )}
    >
      <div className="space-y-2">
        <Icon weight="duotone" size={28} />
        <h5 className="font-semibold">{title}</h5>
      </div>
      <p className="text-2xl">{value}</p>
    </Link>
  );
};

export default DataCard;
