import { TData } from "@/types/data";
import React from "react";
import { SectionCard, SectionTitle } from "../lib";
import MiniCard from "../mini-card";
import {
  CalendarDots,
  Money,
  SealWarning,
} from "@phosphor-icons/react/dist/ssr";
import { extractFirstName, extractNumericalValue } from "@/lib/utils";
import Image from "next/image";

const NormalSection = ({ data }: { data: TData }) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <div>
        <SectionTitle title="Payment Terms" />
        <SectionCard className="flex justify-start gap-24 mt-3">
          <MiniCard
            icon={Money}
            iconCn="text-[#FF91EE]"
            title="Deductible amount"
            value={data.amountPayable.value}
          />
          <MiniCard
            icon={CalendarDots}
            iconCn="text-[#B59CF7]"
            title="Tenure"
            value={data.amountPayable.description}
          />
        </SectionCard>

        <div className="mt-2 p-4 rounded-xl flex items-center gap-3 bg-secondary/50 ">
          <SealWarning
            size={20}
            weight="fill"
            className="self-start  text-[#CBCBCB] shrink-0"
          />
          <p className="text-xs text-[#4B4B4B]">
            <strong>
              ₹ {extractNumericalValue(data.amountPayable.value)} to be deducted
            </strong>{" "}
            from {extractFirstName(data.employee.name)}’s monthly salary under
            the non-taxable device allowance section{" "}
            <strong>over a period of {data.amountPayable.description}</strong>
          </p>
        </div>
      </div>

      <div className=" space-y-2">
        <SectionTitle title="Claimed Items" />
        <SectionCard className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div>
              <Image
                src={data.device.image}
                alt="device"
                width={35}
                height={35}
              />
            </div>
            <div>
              <p className="font-semibold text-sm">{data.device.name}</p>
              <p className="text-xs font-medium text-[#4B4B4B]/60">
                128 GB • Black
              </p>
            </div>
          </div>
          <p className="font-medium text-sm">₹ 79,999</p>
        </SectionCard>
      </div>
    </div>
  );
};

export default NormalSection;
