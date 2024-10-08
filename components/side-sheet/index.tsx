import React, { Dispatch, SetStateAction } from "react";
import { SheetContent } from "@/components/ui/sheet";
import { TData } from "@/types/data";
import { extractFirstName } from "@/lib/utils";
import { CaretLeft, CaretRight, XCircle } from "@phosphor-icons/react/dist/ssr";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentBreakdown from "./payment-breakdown";
import Documents from "./documents";
import ClaimDetails from "./claim-details";
import ApproveClaim from "./approve-claim";
import { SectionTitle } from "./lib";

const SideSheet = ({
  data,
  setIsOpen,
}: {
  data: TData;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <SheetContent
      className="min-w-[40%] rounded-l-xl overflow-auto"
      style={{ scrollbarGutter: "stable" }}
    >
      <div className="flex justify-between p-4 px-8 bg-secondary-background rounded-l-xl">
        <div className="flex">
          <button
            className="p-1 border rounded-l-lg outline-none"
            autoFocus={false}
            onClick={() => setIsOpen(false)}
          >
            <CaretLeft size={14} />
          </button>
          <button
            className="p-1 border rounded-r-lg"
            onClick={() => setIsOpen(false)}
          >
            <CaretRight size={14} />
          </button>
        </div>
        <SectionTitle
          title={`${extractFirstName(data.employee.name)}'s Claim`}
        />

        <button
          className="p-1 border rounded-lg"
          onClick={() => setIsOpen(false)}
        >
          <XCircle size={16} weight="duotone" />
        </button>
      </div>
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="w-full p-6 px-8 flex gap-4 justify-start bg-secondary-background border-y">
          <TabsTrigger value="details">Claim Details</TabsTrigger>
          <TabsTrigger value="breakdown">Payment Breakdown</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <ClaimDetails data={data} />
        </TabsContent>
        <TabsContent value="breakdown">
          <PaymentBreakdown data={data} />
        </TabsContent>
        <TabsContent value="documents">
          <Documents data={data} />
        </TabsContent>
        <hr className="mt-10 mb-5" />
        <ApproveClaim data={data} />
      </Tabs>
    </SheetContent>
  );
};

export default SideSheet;
