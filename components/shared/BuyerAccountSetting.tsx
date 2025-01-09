import React, { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from '../ui/Dialog';
import Button from '../ui/Button';
import Dropdown from '../ui/DropDown';
import Image from 'next/image';
import { RxCross2 } from 'react-icons/rx';
import { LuUpload } from 'react-icons/lu';
import InputField from '../ui/InputField';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import Checkbox1 from '../ui/tickbox';
import { intrests } from '@/lib/data';

const checkboxLabels = [
  'Roman - 753 BC - 476 AD',
  'Elizabethan - 1558 - 1603',
  'Baroque - 1600 - 1750',
  'Victorian - 1837 - 1901',
  'Art Deco - 1920s - 1930s',
  'Mid-Century Modern - 1933 - 1965',
];

const sortData = [
  'Latest',
  'A to Z',
  'Low to Higher Price',
  'Higher to Low Price',
  'Highest Sale Products',
];

export const BuyerAccountSetting = ({ onClose }: { onClose: any }) => {
  const [step, setStep] = useState(1);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    country: '',
    buyFromCountries: '',
    selectedInterests: [],
    enableNotifications: false,
  });

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev: any) => {
      const updatedInterests = prev.selectedInterests.includes(interest)
        ? prev.selectedInterests.filter((i: any) => i !== interest)
        : [...prev.selectedInterests, interest];
      return { ...prev, selectedInterests: updatedInterests };
    });
  };

  const handleNext = () => setStep((prev) => prev + 1);

  const handleFinish = () => {
    alert(`Account setup complete: ${JSON.stringify(formData)}`);
    setStep(4);
  };

  const isStep1Complete = formData.country && formData.buyFromCountries;
  const isStep2Complete = formData.selectedInterests.length > 0;

  return (
    <div className="relative">
      <Dialog open onOpenChange={onClose}>
        <DialogContent className="font-playfair max-h-[90vh] overflow-y-auto" customWidth="max-w-3xl">
          <DialogHeader className="font-playfair text-xl border-b border-[#EBE9E0] pb-2">
            <DialogTitle>
              <Button
                onClick={onClose}
                icon={<RxCross2 className="text-black" />}
                label=""
                className="bg-transparent absolute right-0 top-4"
              />
              <h1 className="font-playfair text-base uppercase text-start">
                Setting up your account
              </h1>
            </DialogTitle>
          </DialogHeader>


          {step === 1 && (
            <div className="flex flex-col px-2 md:px-6">
              <h1 className="text-3xl md:text-4xl">Location Preferences</h1>
              <p className="text-xs py-2 font-sans">
                Personalize your experience by sharing a few details about your location preferences.
              </p>

              <form>
                <div className="py-3">
                  <p className="text-xs pb-2 font-sans uppercase">What is your country of residence?</p>
                  <div>
                    <Dropdown
                      label="-Select-"
                      items={sortData}
                      onSelect={(item) => handleSelect('country', item)}
                      isOpen={openDropdown === 1}
                      toggleDropdown={() => toggleDropdown(1)}
                      className="bg-white border border-[#EBE9E0] font-sans"
                    />
                  </div>

                </div>

                <div className="py-3">
                  <p className="text-xs pb-2 font-sans uppercase">Do you have a preference for countries you would like to buy from?</p>
                  <div>
                    <Dropdown
                      label="-Select-"
                      items={sortData}
                      onSelect={(item) => handleSelect('buyFromCountries', item)}
                      isOpen={openDropdown === 2}
                      toggleDropdown={() => toggleDropdown(2)}
                      className='bg-white border border-[#EBE9E0] font-sans'
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3">
                  <Button
                    label="I'll Do It Later"
                    className="w-full font-sans bg-white uppercase text-xs text-black"
                  />
                  <Button
                    onClick={handleNext}
                    disabled={!isStep1Complete}
                    label="Continue"
                    className="w-full font-sans uppercase bg-[#F9F8F3] text-xs text-black"
                  />
                </div>
              </form>
            </div>
          )}


          {step === 2 && (
            <div className="flex flex-col px-2 md:px-6">
              <h1 className="text-2xl md:text-3xl">What Interests You</h1>
              <p className="text-xs font-sans">
                Personalize your experience by sharing a few details about your interests.
              </p>

              <div className="font-sans mt-6">
                <h3 className="uppercase text-sm">1. What Kind of Antiques Do You Love?</h3>
                <p className="text-gray-500 text-xs">
                  Choose your favorite categories to see more of what you’re passionate about.
                </p>

                <div className="flex my-3 px-5 py-6 flex-wrap gap-4 bg-[#F9F8F3]">
                  {intrests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-between"
                    >
                      <Image
                        src={interest.image}
                        alt="interest"
                        width={70}
                        height={70}
                      />
                      <h2 className="uppercase text-xs">{interest.name}</h2>
                    </div>
                  ))}
                </div>
              </div>

              <div className="font-sans mt-6">
                <h3 className="uppercase text-sm">2. What's your style?</h3>
                <p className="text-gray-500 text-xs">
                  Select the eras and styles that inspire you most, from Art Deco to Victorian.
                </p>

                <div className="flex flex-wrap gap-3 bg-[#F9F8F3] p-6 h-40 overflow-y-auto">
                  {checkboxLabels.map((item) => (
                    <div
                      key={item}
                      onClick={() => handleCheckboxChange(item)}
                      className="flex items-center gap-3 py-2 cursor-pointer"
                    >
                      <Checkbox1 label={item} name={item} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <Button
                  label="I'll Do It Later"
                  className="w-full font-semibold bg-white uppercase text-xs text-black"
                />
                <Button
                  onClick={handleNext}
                  disabled={!isStep2Complete}
                  label="Continue"
                  className="w-full font-semibold uppercase bg-[#F9F8F3] text-xs text-black"
                />
              </div>
            </div>
          )}


          {step === 3 && (
            <div className="px-2 md:px-6">
              <h1 className="text-3xl">Stay in the Loop</h1>
              <p className="text-xs py-2 font-sans">Never Miss a New Arrival</p>

              <div className="flex items-center gap-2 py-7">
                <Checkbox1
                  name="notifications"
                  checked={formData.enableNotifications}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      enableNotifications: !prev.enableNotifications,
                    }))
                  }
                />
                <label className="text-[10px] uppercase font-sans">
                  Enable email notifications to get updates on items matching your preferences.
                </label>
              </div>

              <Button
                label="Finish Setting Up My Account"
                onClick={handleFinish}
                className="uppercase w-full text-xs"
              />
            </div>
          )}

          {step === 4 && (
            <div className="px-2 md:px-6">
              <h1 className="text-lg">Welcome To</h1>
              <h1 className="italic text-2xl">The Antique Collector's Hub!</h1>
              <p className="text-xs uppercase py-2">
                The global platform for lovers of all antiques and jewelry.
              </p>

              <div className="mt-3">
                <p className="py-4 text-sm">
                  We have started you off with a few default sellers in your feed. Visit the Sellers page to choose more.
                </p>
                <p className="py-2 text-sm">
                  Use filters to find dealers by country or type, or search by typing their name or browsing their profiles.
                </p>
                <p className="py-2 text-sm">
                  Search for pieces on the Search page or explore the directory for types.
                </p>
              </div>

              <Button
                label="Start Exploring"
                className="uppercase w-full mt-4 text-xs"
              />
            </div>
          )}

          <DialogFooter />
        </DialogContent>
      </Dialog>
    </div>
  );
};
