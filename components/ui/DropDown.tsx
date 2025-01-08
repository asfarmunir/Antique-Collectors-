// components/Dropdown.tsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type DropdownProps = {
  items: string[];
  onSelect: (item: string) => void;
  label: string;
  className?: string;
  isOpen: boolean;
  toggleDropdown: () => void;
};

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect, label, className, isOpen, toggleDropdown }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelect = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    toggleDropdown(); // Close dropdown after selecting
  };

  return (
    <div className="relative inline-block w-full">
    {/* Dropdown Button */}
    <button
      onClick={toggleDropdown}
      className={`dropdown-toggle ${className} w-full bg-gray-200 text-[#919089] text-sm py-2 px-4 rounded flex items-center justify-between`}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      {label || 'Select an option'}
      {isOpen ? <FaChevronUp className="ml-2 text-[#919089]" /> : <FaChevronDown className="ml-2 text-[#919089]" />}
    </button>
  
    {/* Dropdown Items */}
    {isOpen && (
      <ul
        className="dropdown-menu absolute z-10 w-full bg-white border text-sm border-gray-300 rounded mt-1 shadow-lg"
        role="listbox"
      >
        {items.map((item) => (
          <li
            key={item}
            onClick={() => handleSelect(item)}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            role="option"
            aria-selected={selectedItem === item}
          >
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
  
  );
};

export default Dropdown;
