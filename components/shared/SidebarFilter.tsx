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
  const [openCategory, setOpenCategory] = useState(true);
  const [openEraPeriod, setOpenEraPeriod] = useState(true);
  const [openCondition, setOpenCondition] = useState(true);
  const [openSellerLocation, setOpenSellerLocation] = useState(false);

  const handleToggle = (filter: string) => {
    switch (filter) {
      case 'category':
        setOpenCategory(!openCategory);
        break;
      case 'eraPeriod':
        setOpenEraPeriod(!openEraPeriod);
        break;
      case 'condition':
        setOpenCondition(!openCondition);
        break;
      case 'sellerLocation':
        setOpenSellerLocation(!openSellerLocation);
        break;
      default:
        break;
    }
  };


  return (
    <>
      {/* Categories */}
      {filtersToShow.includes('category') && (
        <div className="border border-[#EBE9E0] p-3 mb-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="custom-border font-playfair text-lg">Categories</h1>
            <div onClick={() => handleToggle('category')}>
              {openCategory ? <TiMinus className="mr-3" /> : <TiPlus className="mr-3" />}
            </div>
          </div>
          {openCategory && (
            <div className="flex flex-col gap-2 mt-2 w-full max-w-md mx-auto">
              {Object.entries(categoriesData).map(([name, items]) => (
                <div className="w-full" key={name}>
                  <CategoryDropdown category={{ name, items }} />
                </div>
              ))}

            </div>
          )}
        </div>
      )}

      {/* Era/Period */}
      {filtersToShow.includes('eraPeriod') && (
        <div className="border border-[#EBE9E0] p-3 mb-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="custom-border font-playfair text-lg">Era/Period</h1>
            <div onClick={() => handleToggle('eraPeriod')}>
              {openEraPeriod ? <TiMinus className="mr-3" /> : <TiPlus className="mr-3" />}
            </div>
          </div>
          {openEraPeriod && (
            <div>
              {checkboxlablel.map((item) => (
                <div key={item} className="flex flex-row items-center gap-3 py-4">
                  <Checkbox1 name={item} />
                  <label htmlFor={item} className="text-xs">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Conditions */}
      {filtersToShow.includes('condition') && (
        <div className="border border-[#EBE9E0] p-3 mb-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="custom-border font-playfair text-lg">Condition</h1>
            <div onClick={() => handleToggle('condition')}>
              {openCondition ? <TiMinus className="mr-3" /> : <TiPlus className="mr-3" />}
            </div>
          </div>
          {openCondition && (
            <div>
              {checkboxlablel1.map((item) => (
                <div key={item} className="flex flex-row items-center gap-3 py-4">
                  <Checkbox1 name={item} />
                  <label htmlFor={item} className="text-xs">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Seller Location */}
      {filtersToShow.includes('sellerLocation') && (
        <div className="border border-[#EBE9E0] p-3 mb-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <h1 className="custom-border font-playfair text-lg">Seller Location</h1>
            <div onClick={() => handleToggle('sellerLocation')}>
              {openSellerLocation ? <TiMinus className="mr-3" /> : <TiPlus className="mr-3" />}
            </div>
          </div>
          {openSellerLocation && (
            <div className="flex flex-col gap-2 mt-2">
              {['USA', 'Europe', 'Asia', 'Australia'].map((location) => (
                <div key={location} className="flex flex-row items-center gap-3">
                  <Checkbox1 name={location} />
                  <label htmlFor={location} className="text-xs">
                    {location}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FilterComponent;
