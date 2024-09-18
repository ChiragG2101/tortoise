"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, disabled, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    disabled={disabled}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(
        "relative h-9 w-full grow overflow-hidden rounded-xl bg-secondary",
        disabled && "opacity-60"
      )}
    >
      <SliderPrimitive.Range
        className={cn(
          "absolute h-full bg-primary rounded-r-lg",
          disabled && "opacity-60"
        )}
      />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        "block -translate-x-2 h-4 w-1 rounded-full bg-white shadow-xl transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none ",
        disabled && "opacity-80"
      )}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
