import React from "react";
import { Button } from "@/components/ui/button";
import { NewspaperClipping } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const TopBar = () => {
  return (
    <>
      <div className="px-10 py-6 flex items-center justify-between">
        <div className="flex gap-2 items-center text-secondary-foreground">
          <NewspaperClipping
            size={36}
            weight="duotone"
            className="text-primary"
          />
          <h4 className=" text-2xl font-semibold">Claims</h4>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary">Open</Button>
          <Button variant="secondary" disabled>
            Approved
          </Button>
          <Button variant="secondary" disabled>
            Rejected
          </Button>
        </div>
      </div>
      <div className="px-10 flex gap-10 bg-secondary-background">
        <Image src="/iphone.png" alt="iphone" width={60} height={60} />
        <div className="my-auto">
          <p className="font-semibold text-[#323232]">
            17 employees want to claim their device allowances
          </p>
          <p className="text-sm">
            Review their requests at the earliest to ensure a great benefit
            claim experience
          </p>
        </div>
      </div>
    </>
  );
};

export default TopBar;
