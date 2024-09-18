import {
  CheckCircle,
  SealWarning,
  UserCircleCheck,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
import { TData } from "@/types/data";
import { extractFirstName, extractNumericalValue } from "@/lib/utils";
import EligibilityLimit from "./eligibility-limit";

const approvals = [
  {
    stage: "First approval",
    name: "Jules Bianchi",
    you: true,
    image: "/jules.png",
  },
  {
    stage: "Final approval",
    name: "Surya Harsha",
    you: false,
    image: "/surya.png",
  },
];
const ApproveClaim = ({ data }: { data: TData }) => {
  return (
    <div className="mb-4 px-8 flex flex-col gap-4 ">
      <div className="flex gap-3">
        <UserCircleCheck
          size={25}
          weight="fill"
          className="text-primary mt-1 shrink-0"
        />
        <div className="space-y-1">
          <p className="font-semibold">Approve Claim</p>
          {extractNumericalValue(data.amountPayable.value) < 15000 ? (
            <p className="text-xs text-[#1F1F1F] font-medium">
              You&apos;re organisation has set up a multi-level claim approval
              process
            </p>
          ) : (
            <div className="mt-2 p-4 rounded-xl flex items-center gap-3 bg-[#FFFDE9] ">
              <SealWarning
                size={20}
                weight="fill"
                className="self-start  text-[#C78B2E] shrink-0"
              />
              <p className="text-xs text-[#4B4B4B]">
                {extractFirstName(data.employee.name)} has requested for a
                device higher than their eligibility limit. You can either
                approve their request by increasing their device eligibility
                limit or without it
              </p>
            </div>
          )}
        </div>
      </div>
      {extractNumericalValue(data.amountPayable.value) < 15000 ? (
        approvals.map((approval, index) => (
          <div key={index} className="flex space-x-4 ml-8">
            <div className="flex flex-col items-center gap-3">
              <div className="border-2 border-[#AFAFAF] rounded-full py-1 p-2.5 text-sm font-semibold text-[#AFAFAF]">
                {index + 1}
              </div>
              {index < approvals.length - 1 && (
                <div className="h-10 border-l-2 border-[#AFAFAF]"></div>
              )}
            </div>
            <div className="mt-2 flex flex-col justify-start gap-4">
              <span className="text-xs text-secondary-foreground">
                {approval.stage}
              </span>
              <div className="border border-[#E1E1E1] px-4 py-2 rounded-lg flex items-center space-x-2 bg-secondary-background">
                <Image
                  src={approval.image}
                  alt={approval.name}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <div className=" flex flex-col">
                  <span className="text-sm font-semibold">
                    {approval.name} {approval.you && "(You)"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <EligibilityLimit data={data} />
      )}
      <hr className="mt-4 mb-1" />
      <div className="flex gap-2">
        <Button variant={"secondary"} className="flex-1 border">
          <XCircle size={15} weight="fill" className="text-[#D57046] mr-2" />{" "}
          Reject
        </Button>
        <Button className="flex-1 border border-[#167E62] ">
          <CheckCircle size={15} weight="fill" className="text-white mr-2" />{" "}
          Approve
        </Button>
      </div>
    </div>
  );
};

export default ApproveClaim;
