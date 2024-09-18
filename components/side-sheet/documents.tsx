import { extractFirstName } from "@/lib/utils";
import { TData } from "@/types/data";
import { Signature } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Card = ({
  title,
  description,
  signatureStatus,
  buttonText,
}: {
  title: string;
  description: string;
  signatureStatus: string;
  buttonText: string;
}) => {
  return (
    <div className="p-4 border border-secondary rounded-xl">
      <div className="flex gap-2">
        <Image src={"/document.svg"} alt="document" width={45} height={45} />
        <div>
          <p className="text-sm font-semibold text-secondary-foreground">
            {title}
          </p>
          <p className="text-[12px] text-[#757575]">{description}</p>
        </div>
      </div>
      <hr className="mb-2" />
      <div className="p-2 flex items-center justify-between">
        <div className="flex gap-4 text-[#757575] font-medium text-[14px]">
          <Signature size={24} className="text-[#CBCBCB]" />
          {signatureStatus}
        </div>
        <Button
          variant={"secondary"}
          className="bg-transparent gap-2 border drop-shadow-2xl"
          size={"sm"}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
const Documents = ({ data }: { data: TData }) => {
  return (
    <div className="px-8 py-6 space-y-6">
      <div className="space-y-2">
        <h4 className=" font-semibold text-secondary-foreground ">
          Signed by {extractFirstName(data.employee.name)}
        </h4>
        <Card
          title="Device Usage Policy"
          description={`Between Ninjacart and ${data.employee.name}`}
          signatureStatus="Signed on 12th April"
          buttonText="View document"
        />
      </div>
      <div>
        <h4 className="mb-1 font-semibold text-secondary-foreground ">
          Yet to be signed by you
        </h4>
        <p className="mb-3 text-sm font-medium">
          Sign the documents only when you’re sure about claim approval
        </p>
        <Card
          title="Rental Schedule"
          description={`Between Ninjacart and ${data.employee.name}`}
          signatureStatus="Pending"
          buttonText="View and sign document"
        />
      </div>
    </div>
  );
};

export default Documents;
