"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // Utility function for dynamic class merging.

const InputField = React.forwardRef<
  React.InputHTMLAttributes<HTMLInputElement>,
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "py-2.5 placeholder:text-[#808080] text-[#808080]  px-4 focus:outline-none",
      className
    )}
    {...props}
  />
));

InputField.displayName = "Input";

export default InputField;
