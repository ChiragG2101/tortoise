import { TData } from "@/types/data";
import React from "react";
import { SectionCard, SectionTitle } from "../lib";
import Image from "next/image";
import {
  ArrowCircleRight,
  DeviceMobile,
  Money,
  SealWarning,
} from "@phosphor-icons/react/dist/ssr";
import MiniCard from "../mini-card";
import { extractFirstName, extractNumericalValue } from "@/lib/utils";

const IncreaseLimitSection = ({ data }: { data: TData }) => {
  return (
    <div className="mt-6 flex flex-col gap-6">
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
              <p className="text-[12px] font-medium text-[#4B4B4B]/60">
                128 GB • Black
              </p>
            </div>
          </div>
          <p className="font-medium text-sm">₹ 79,999</p>
        </SectionCard>
      </div>
      <div className=" space-y-2">
        <div className="flex justify-between text-primary">
          <SectionTitle title="Employee's payment terms" />
          <button className="flex gap-1 text-sm">
            View payment breakdown <ArrowCircleRight weight="fill" size={20} />
          </button>
        </div>
        <SectionCard className="flex justify-start gap-24 mt-3">
          <MiniCard
            icon={DeviceMobile}
            title="Total claim value"
            value="₹ 79,999"
            iconCn="text-[#62E29F]"
          />
          <MiniCard
            icon={Money}
            title="Monthly deductions"
            value="₹13,416 / month"
            iconCn="text-[#FF91EE]"
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
        <div className="flex justify-between text-primary">
          <SectionTitle title="ABB’s payment terms" />
        </div>
        <SectionCard className="flex justify-start gap-24 mt-3">
          <MiniCard
            icon={Money}
            title="To be paid to lessor"
            value="₹1,08,498"
            iconCn="text-[#62E29F]"
          />
        </SectionCard>
        <div className="mt-2 p-4 rounded-xl flex items-center gap-3 bg-secondary/50 ">
          <SealWarning
            size={20}
            weight="fill"
            className="self-start  text-[#CBCBCB] shrink-0"
          />
          <p className="text-xs text-[#4B4B4B]">
            <strong>₹ 1,08,498 to be paid</strong> to Connect for 6 months as
            you’ve passed 18% GST input credit for this purchase along with a
            sponsored amount of ₹ 20,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncreaseLimitSection;
