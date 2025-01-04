// Dropdown.tsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


interface DropdownProps {
    category: {
      name: string;
      items: string[];
    };
    onItemSelect?: (categoryName: string, selectedItem: string) => void; // Callback for item selection
    customStyle?: {
      container?: string;
      button?: string;
      list?: string;
      listItem?: string;
    };
  }
  
const CategoryDropdown: React.FC<DropdownProps> = ({ category,onItemSelect, customStyle }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleItemClick = (item: string) => {
      setSelectedItem(item);
      onItemSelect?.(category.name, item); // Call the callback with the selected item
      setIsOpen(false); // Close dropdown after selection (can be modified for multi-selection)
    };
  

  return (
    <div className={`relative inline-block w-full px-4 ${customStyle?.container || ''}`}>
      <button
        className={`w-full bg-transparent text-[#919089] text-sm py-2 rounded flex items-center justify-between ${customStyle?.button || ''}`}
        onClick={toggleDropdown}
      >
         {selectedItem ? `${category.name}: ${selectedItem}` : `${category.name} (${category.items.length})`}
        {isOpen ? <FaChevronUp className='text-sm font-light text-[#919089] space-y-1' /> : <FaChevronDown className='text-sm text-[#919089] ' />}
      </button>
      {isOpen && (
        <ul className={`absolute z-10 w-full  bg-white border text-sm border-gray-300 rounded mt-1 shadow-lg ${customStyle?.list || ''}`}>
          {category.items.map((item, index) => (
            <li  onClick={() => handleItemClick(item)} key={index} className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${customStyle?.listItem || ''}`}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
