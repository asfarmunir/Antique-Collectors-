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

const CategoryDropdown: React.FC<DropdownProps> = ({ category, onItemSelect, customStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item: string) => {
    console.log('item', item);
    setSelectedItem(item);
    onItemSelect?.(category.name, item); // Call the callback with the selected item
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className={`relative inline-block w-full px-4 ${customStyle?.container || ''}`}>
      <button
        className={`w-full bg-transparent text-[#463F3A] text-sm py-2 rounded flex items-center justify-between ${customStyle?.button || ''}`}
        onClick={toggleDropdown}
        aria-expanded={isOpen} // Added for accessibility
        aria-controls={`dropdown-list-${category.name}`} // Ensures screen readers know which list is controlled
      >
        {selectedItem ? `${category.name}: ${selectedItem}` : `${category.name} (${category.items.length})`}
        {isOpen ? <FaChevronUp className="text-sm font-light text-[#463F3A] space-y-1" /> : <FaChevronDown className="text-sm text-[#919089]" />}
      </button>
      {isOpen && (
        <ul
          id={`dropdown-list-${category.name}`} // Added ID for accessibility
          className={`absolute z-10 w-full bg-white border text-sm border-gray-300 text-[#463F3A] rounded mt-1 shadow-lg ${customStyle?.list || ''}`}
        >
          {category.items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className={`px-4 py-2 hover:bg-gray-100 text-[#463F3A] cursor-pointer ${customStyle?.listItem || ''}`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
