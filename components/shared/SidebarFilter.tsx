import React, { useState } from 'react';
import { TiMinus, TiPlus } from 'react-icons/ti';
import Checkbox1 from '../ui/tickbox';
import Dropdown from '../ui/DropDown';
import { categoriesData } from '@/lib/data';
import CategoryDropdown from '../ui/SubDropdown';

interface FilterComponentProps {
  checkboxlablel: string[];
  checkboxlablel1: string[];
  filtersToShow: string[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  checkboxlablel,
  checkboxlablel1,
  filtersToShow,
}) => {
  // State to manage filter visibility
  const [openFilters, setOpenFilters] = useState({
    category: true,
    eraPeriod: true,
    condition: true,
    sellerLocation: false,
    color: false,
    availability: false,
  });

  // State to track selected filters
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string[];
  }>({
    category: [],
    eraPeriod: [],
    condition: [],
    sellerLocation: [],
    color: [],
    availability: [],
  });

  // Toggle filter section visibility
  const handleToggle = (filter: string) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (filterName: string, value: string) => {
    setSelectedFilters((prev) => {
      const existingValues = prev[filterName] || [];
      if (existingValues.includes(value)) {
        return {
          ...prev,
          [filterName]: existingValues.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [filterName]: [...existingValues, value],
        };
      }
    });
  };

  return (
    <div>
      {filtersToShow.includes('category') && (
        <div className="border border-[#EBE9E0] p-3 mb-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="custom-border font-playfair text-lg">Categories</h1>
            <div onClick={() => handleToggle('category')}>
              {openFilters.category ? <TiMinus className="mr-3" /> : <TiPlus className="mr-3" />}
            </div>
          </div>
          {openFilters.category && (
            <div className="flex flex-col gap-2 mt-2 w-full max-w-md mx-auto">
              {Object.entries(categoriesData).map(([name, items]) => (
                <div key={name} className="w-full">
                  <CategoryDropdown category={{ name, items }} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {filtersToShow.includes('eraPeriod') && (
        <div className="border border-[#EBE9E0] p-3 mb-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="custom-border font-playfair text-lg">Era/Period</h1>
            <div onClick={() => handleToggle('eraPeriod')}>
              {openFilters.eraPeriod ? <TiMinus className="mr-3" /> : <TiPlus className="mr-3" />}
            </div>
          </div>
          {openFilters.eraPeriod && (
            <div>
              {checkboxlablel.map((item) => (
                <div key={item} className="flex flex-row items-center gap-3 py-4">
                  <Checkbox1
                    name={item}
                    checked={selectedFilters.eraPeriod.includes(item)}
                    onChange={() => handleCheckboxChange('eraPeriod', item)}
                  />
                  <label htmlFor={item} className="text-xs">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {filtersToShow.includes('condition') && (
        <div className="border border-[#EBE9E0] p-3 mb-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="custom-border font-playfair text-lg">Condition</h1>
            <div onClick={() => handleToggle('condition')}>
              {openFilters.condition ? <TiMinus className="mr-3" /> : <TiPlus className="mr-3" />}
            </div>
          </div>
          {openFilters.condition && (
            <div>
              {checkboxlablel1.map((item) => (
                <div key={item} className="flex flex-row items-center gap-3 py-4">
                  <Checkbox1
                    name={item}
                    checked={selectedFilters.condition.includes(item)}
                    onChange={() => handleCheckboxChange('condition', item)}
                  />
                  <label htmlFor={item} className="text-xs">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {filtersToShow.includes('sellerLocation') && (
        <div className="border border-[#EBE9E0] p-3 mb-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="custom-border font-playfair text-lg">Seller Location</h1>
            <div onClick={() => handleToggle('sellerLocation')}>
              {openFilters.sellerLocation ? <TiMinus className="mr-3" /> : <TiPlus className="mr-3" />}
            </div>
          </div>
          {openFilters.sellerLocation && (
            <div className="flex flex-col gap-2 mt-2">
              {['USA', 'Europe', 'Asia', 'Australia'].map((location) => (
                <div key={location} className="flex flex-row items-center gap-3">
                  <Checkbox1
                    name={location}
                    checked={selectedFilters.sellerLocation.includes(location)}
                    onChange={() => handleCheckboxChange('sellerLocation', location)}
                  />
                  <label htmlFor={location} className="text-xs">
                    {location}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
