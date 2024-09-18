import { extractNumericalValue, timeAgo } from "@/lib/utils";
import { TData } from "@/types/data";
import Image from "next/image";
import React from "react";
import NormalSection from "./normal-section";
import IncreaseLimitSection from "./increase-limit-section";
import { SectionCard, SectionTitle } from "../lib";

const ClaimDetails = ({ data }: { data: TData }) => {
  return (
    <div className="px-8 py-6">
      <div className=" space-y-2">
        <SectionTitle title="Request details" />
        <SectionCard className="flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <Image
                src={data.employee.image}
                alt="profile"
                width={35}
                height={35}
              />
            </div>
            <div className="">
              <p className="font-semibold text-sm">{data.employee.name}</p>
              <p className="text-xs font-medium text-[#4B4B4B]/60">
                {data.employee.designation}
              </p>
            </div>
          </div>
          <div>
            <p className="font-medium text-sm">{timeAgo(data.requestedOn)}</p>
            <p className="text-xs text-[#4B4B4B]/60 font-medium">
              {data.requestedOn.getDate()}th{" "}
              {data.requestedOn.toLocaleString("default", { month: "long" })}{" "}
              {data.requestedOn.getFullYear()}
            </p>
          </div>
        </SectionCard>
      </div>
      {extractNumericalValue(data.amountPayable.value) < 15000 ? (
        <NormalSection data={data} />
      ) : (
        <IncreaseLimitSection data={data} />
      )}
    </div>
  );
};

export default ClaimDetails;
