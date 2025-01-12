// components/CustomCheckbox.tsx
"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (e: { target: { name: string; checked: boolean } }) => void; // Mimic event object
  name: string; // Name prop to identify the checkbox
}

const Checkbox1: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  name,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);

    // Mimic an event-like object for parent compatibility
    if (onChange) {
      onChange({
        target: {
          name: name,
          checked: newCheckedState,
        },
      });
    }

    console.log(`${name}:`, newCheckedState); // Log name and the new checked state
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Clickable checkbox box */}
      <div
        onClick={handleCheckboxChange}
        className={`peer h-5 w-5 flex-shrink-0 flex items-center justify-center rounded-sm border ring-offset-white 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 
          disabled:cursor-not-allowed disabled:opacity-50 
          ${isChecked ? "bg-[#463F3A] text-slate-50" : "bg-white border-[#463F3A]"} 
          dark:border-slate-800 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 
          ${isChecked ? "dark:bg-slate-50 dark:text-slate-900" : "dark:border-slate-50"}`}
      >
        {isChecked && <Check className="h-4 w-4 text-current" />}
      </div>

      {/* Clickable label */}
      <label
        htmlFor={name}
        className={`cursor-pointer text-black dark:text-white text-xs font-sans`}
        onClick={handleCheckboxChange}
      >
        {label}
      </label>

      {/* Hidden input for accessibility */}
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={handleCheckboxChange} // Ensure consistency
        className="hidden peer"
      />
    </div>
  );
};

export default Checkbox1;
