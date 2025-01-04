"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // Utility function to combine class names.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode; // Optional icon prop for rendering icons.
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, label, icon, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "bg-[#0D0106] text-white px-4 py-3 flex flex-row justify-center items-center space-x-2",
        className
      )}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      <span>{label}</span>
    </button>
  )
);

Button.displayName = "Button";

export default Button;
