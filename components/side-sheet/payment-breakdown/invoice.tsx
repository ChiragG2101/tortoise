import { CalendarBlank, Money, Receipt } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Invoice = () => {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2 items-center text-sm text-secondary-foreground">
          <CalendarBlank size={24} weight="fill" className="text-[#FF91EE]" />
          <p className=" font-medium ">Monthly installment amount</p>
        </div>
        <p className="font-semibold ">₹13,416</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2 items-center text-sm text-secondary-foreground">
          <Money size={24} weight="fill" className="text-[#FF91EE]" />
          <p className=" font-medium ">No. of installments to be deducted</p>
        </div>
        <p className="font-semibold ">6</p>
      </div>
      <div className="border border-dashed border-[#E1E1E1] my-3"></div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-2 items-center text-sm text-secondary-foreground">
          <Receipt size={24} weight="fill" className="text-[#E1E1E1]" />
          <p className=" font-medium ">Total amount to be paid</p>
        </div>
        <p className="font-semibold">₹80,498</p>
      </div>
    </div>
  );
};

export default Invoice;
