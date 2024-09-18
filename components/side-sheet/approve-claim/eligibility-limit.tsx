import { extractFirstName } from "@/lib/utils";
import { TData } from "@/types/data";
import React, { useState } from "react";
import { SectionCard } from "../lib";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

const EligibilityLimit = ({ data }: { data: TData }) => {
  const [increaseLimit, setIncreaseLimit] = useState(false);
  const [newLimit, setNewLimit] = useState(150000);

  const handleSliderChange = (value: number) => {
    setNewLimit(value);
  };
  return (
    <SectionCard className={increaseLimit ? "border-2 border-primary" : ""}>
      <div className="text-sm flex items-center justify-between">
        Increase device eligibility limit for{" "}
        {extractFirstName(data.employee.name)}
        <Switch checked={increaseLimit} onCheckedChange={setIncreaseLimit} />
      </div>
      <hr className="my-4" />
      <div>
        <div className="flex justify-between items-center mb-2 font-medium">
          <span>New limit</span>
          <span>₹ {newLimit.toLocaleString()}</span>
        </div>
        <Slider
          min={90000}
          max={240000}
          defaultValue={[newLimit]}
          //@ts-expect-error It's still working fine
          onValueChange={handleSliderChange}
          className="mb-2"
          disabled={!increaseLimit}
        />
        <div className="flex justify-between text-[15px] text-[#757575]">
          <span>₹ 90,000</span>
          <span>₹ 2,40,000</span>
        </div>
      </div>
    </SectionCard>
  );
};

export default EligibilityLimit;
