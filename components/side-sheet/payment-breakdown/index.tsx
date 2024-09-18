import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowFatLineRight,
  Bank,
  Money,
  MoneyWavy,
} from "@phosphor-icons/react/dist/ssr";
import Invoice from "./invoice";
import MiniCard from "../mini-card";
import { TData } from "@/types/data";
import { extractFirstName } from "@/lib/utils";

const PaymentBreakdown = ({ data }: { data: TData }) => {
  return (
    <div className="px-8 py-6 text-sm">
      <Accordion
        defaultValue={["item-1", "item-2"]}
        type="multiple"
        className="space-y-6 "
      >
        <AccordionItem value="item-1" className="px-4">
          <AccordionTrigger>For Employee</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 text-[#4B4B4B]">
              <MiniCard
                title="Monthly instalment amount"
                value="₹13,416"
                icon={Money}
                iconCn="text-[#62E29F]"
                className="mt-4"
              />
              <div className="mt-2">
                <p className="font-semibold text-sm">
                  Payments are split into monthly payment for 6 months
                </p>
                <p className="font-medium mt-1 text-xs">
                  It is deducted directly out of the employee&apos;s salary as
                  part of a tax-free device allowance.
                </p>
              </div>
            </div>
            <div className="relative flex py-5 items-center ">
              <div className="flex-grow border-t border-dashed	 border-[#FFB5F2]"></div>
              <span className="flex-shrink border border-[#FFB5F2] py-1.5 px-4 rounded-full bg-[#FFF1FC] text-[#924790] font-semibold text-xs">
                Salary deductions
              </span>
              <div className="flex-grow border-t border-dashed	 border-[#FFB5F2]"></div>
            </div>
            <Invoice />
            <div className="mt-4 p-4 rounded-xl bg-secondary text-xs font-medium">
              If you approve this request today, you&apos;ll have to{" "}
              <strong> deduct ₹13,416</strong> from{" "}
              {extractFirstName(data.employee.name)}&apos;s salary from the next
              payroll cycle starting <strong>May 2024 till October 2024</strong>
            </div>
            <div className="relative flex py-5 items-center ">
              <div className="flex-grow border-t border-dashed	 border-[#BBACFF]"></div>
              <span className="flex-shrink border border-[#BBACFF] py-1.5 px-4 rounded-full bg-[#F1F2FF] text-[#775DB3] font-semibold text-xs">
                Payments by employee
              </span>
              <div className="flex-grow border-t border-dashed	 border-[#BBACFF]"></div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="flex gap-2 items-center text-sm text-secondary-foreground">
                <ArrowFatLineRight
                  size={24}
                  weight="fill"
                  className="text-[#2AC393]"
                />
                <p className=" font-medium ">Advance paid</p>
              </div>
              <p className="font-semibold ">₹1,000</p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="px-4">
          <AccordionTrigger>For ABB</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 text-[#4B4B4B]">
              <div className="flex gap-4 justify-between">
                <MiniCard
                  title="GST input Credit"
                  value="18% over 6 months"
                  icon={Bank}
                  iconCn="text-[#FF91EE]"
                  className="mt-4"
                />

                <MiniCard
                  title="Sponsored amount"
                  value="₹20,000"
                  icon={MoneyWavy}
                  iconCn="text-[#FF91EE]"
                  className="mt-4"
                />
              </div>
              <div className="mt-2">
                <p className="text-sm font-semibold">
                  ₹ 28,000 contributed to this purchase
                </p>
                <p className="text-xs font-medium mt-1">
                  Your organisation has passed 18% GST input credit and
                  additional sponsorship of ₹ 20,000 for this purchase
                </p>
              </div>
            </div>
            <div className="relative flex py-5 items-center ">
              <div className="flex-grow border-t border-dashed	 border-[#83EDA8]"></div>
              <span className="flex-shrink border border-[#83EDA8] py-1.5 px-4 rounded-full bg-[#E6FFE6] text-[#167E62] font-semibold text-xs">
                Payments to connect
              </span>
              <div className="flex-grow border-t border-dashed	 border-[#83EDA8]"></div>
            </div>
            <Invoice />
            <div className="mt-4 p-4 rounded-xl bg-secondary text-xs">
              Monthly payments are subject to change based on the agreed payment
              cycle with Connect, without altering the final payable amount
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PaymentBreakdown;
