'use client';
import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/Dialog";
import Image from "next/image";
import Button from "../ui/Button";
import { RxCross2 } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import InputField from "../ui/InputField";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Dropdown from "../ui/DropDown";
import Checkbox1 from "../ui/tickbox";
import { intrests } from "@/lib/data";
import Subscription from "./Subscription";
import { useRouter } from "next/navigation";
import { sortOptions } from "@/lib/constants";
import { SellerData, useSellerAccountDetails } from "@/hooks/useSellerAccount";

const checkboxlablel = ["Roman - 753 BC - 476 AD", "Elizabethan - 1558 - 1603", "Roman - 753 BC - 476 AD", "Elizabethan - 1558 - 1603", "Roman - 753 BC - 476 AD", "Elizabethan - 1558 - 1603"];


const SellerAccountSetting = ({ onClose, sellerData, onUpdate}: { onClose: any, sellerData: SellerData; onUpdate: (data: SellerData) => void}) => {

    const {  step, handleNext,  formData, setFormData, handleUpdate,handleCheckboxChange, handleImageUpload } = useSellerAccountDetails({ initialData: sellerData, onUpdate })

    const router = useRouter();

    const [openDropdown, setOpenDropdown] = useState<number | null>(null); // Tracks which dropdown is open

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index); // Toggle the open dropdown
    };

    const handleSubscription = () => {
        handleUpdate();
        router.push('/subscription');
    }



    return (
        <>
            <div className="relative ">
                <Dialog open onOpenChange={onClose}>
                    <DialogContent className="font-playfair max-h-[90vh] overflow-y-auto" customWidth="max-w-3xl md:my-4 overflow-x-auto">
                        <DialogHeader className="font-playfair text-xl border-b border-[#EBE9E0]  pb-2">
                            <DialogTitle>
                                <Button onClick={onClose} icon={<RxCross2 className="text-black" />} label="" className="bg-transparent absolute right-0 top-4" />
                                <h1 className="font-playfair text-base uppercase text-start">Apply for seller</h1>
                            </DialogTitle>
                        </DialogHeader>

                        {/* Step 1 */}

                        {step === 1 && (

                            <div className="flex flex-col  md:px-6">

                                <h1 className="text-xl md:text-3xl  font-playfair">Become a Seller on The Antique Collector</h1>

                                <p className="text-xs py-4 md:py-6 font-sans">
                                    Creating a seller profile on The Antique Collector is completely free, allowing you to showcase your unique pieces to a community of antique enthusiasts without any upfront cost. To ensure a rich experience for our buyers, each seller profile must include a minimum of 10 product listings, giving collectors the opportunity to truly explore the breadth of your collection.
                                </p>

                                <div className="bg-[#F9F8F3] p-3 text-xs font-sans">
                                    <p>
                                        To maintain the integrity and quality of our marketplace, becoming a seller requires an application and approval process:
                                    </p>
                                    <ul className="list-disc space-y-2 pt-2">
                                        <li>
                                            <span className="uppercase">&#x2022; Submit Your Application:</span> Provide details about your expertise, offerings, and background.
                                        </li>

                                        <li>
                                            <span className="uppercase">&#x2022; Review Process:</span> Our team will carefully evaluate your application to ensure it meets our standards for authenticity and quality.
                                        </li>

                                        <li>
                                            <span className="uppercase">&#x2022; Approval or Rejection:</span> You’ll receive a response within a few business days with either approval to proceed or constructive feedback if your application is not accepted.
                                        </li>

                                    </ul>

                                </div>

                                <p className="py-2 md:py-4 text-xs font-sans">
                                    Once approved, you can start showcasing your antiques right away. For sellers looking to elevate their presence, The Antique Collector offers flexible subscription tiers with exclusive benefits. Upgrading to a premium plan unlocks features like increased visibility, advanced analytics, priority support, and enhanced promotional tools—helping you reach more buyers and grow your business.
                                </p>

                                <div className="py-3 font-sans">
                                    <p className="text-xs text-[#0D0106] font-sans pb-2 uppercase">What is you Country of residence?</p>

                                    <div className="w-full">
                                        <Dropdown
                                            label={formData.country || "Select your country"}
                                            items={sortOptions}
                                            onSelect={(country) => setFormData((prev) => ({ ...prev, country }))}
                                            isOpen={openDropdown === 1}
                                            toggleDropdown={() => toggleDropdown(1)}
                                            className="bg-white border border-[#EBE9E0] "
                                        />

                                    </div>
                                </div>


                                <div>

                                    <div className="flex flex-col md:flex-row  gap-3">
                                        <Button label="I'LL Do IT later" className="w-1/2 font-semibold font-sans bg-white uppercase   flex text-xs text-black flex-row " />
                                        <Button onClick={handleNext} label="Continue" className="w-full font-semibold uppercase font-sans bg-[#F9F8F3]  text-xs flex flex-row text-black " />
                                    </div>
                                </div>


                            </div>


                        )}

                        {step === 3 && (

                            <div className='flex flex-col px-1 md:px-6'>

                                <h1 className='text-2xl md:text-4xl'>Tell us a bit about yourself and your collection.</h1>

                                <p className='text-xs font-sans py-6'>Add a short bio and information about your products to let buyers know who you are and what makes your collection special.</p>

                                <div className='font-sans mt-2'>
                                    <h3 className='uppercase text-sm'>1. What Kind of Antiques Do You Love?</h3>
                                    <p className='text-gray-500 text-xs'>Choose your favorite categories to see more of what you’re passionate about.</p>


                                    <div className="flex my-3 px-5  py-6 flex-row flex-wrap gap-4 md:gap-8 bg-[#F9F8F3]">
                                        {intrests.map((interest, index) => (
                                            <div key={index} className="flex flex-col flex-nowrap items-center justify-between">
                                                <div className="mb-3">
                                                    <Image
                                                        src={interest.image}
                                                        alt="interest"
                                                        width={70}
                                                        height={70}
                                                        className=" "
                                                    />
                                                </div>
                                                <h2 className="uppercase text-xs">{interest.name}</h2>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                <div className='font-sans mt-6'>
                                    <h3 className='uppercase text-sm'>1. What's your style</h3>
                                    <p className='text-gray-500 text-xs'>Select the eras and styles that inspire you most, from Art Deco to Victorian.</p>


                                    <div className="flex my-3 px-5  py-6 flex-row flex-wrap gap-8 bg-[#F9F8F3] h-40 md:h-32 overflow-y-auto">
                                        <div>
                                            {checkboxlablel.map((item) => (
                                                <div
                                                    key={item}
                                                    className="flex flex-row items-center gap-3 py-2"
                                                >
                                                    <Checkbox1
                                                        label={item}
                                                        name={item}
                                                        onChange={() => handleCheckboxChange(item)}
                                                        checked={formData.selectedInterests.includes(item)}
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                    </div>

                                </div>

                                <div className="flex flex-col md:flex-row  gap-3">
                                    <Button label="I'LL Do IT later" className="w-1/2 font-semibold font-sans bg-white uppercase   flex text-xs text-black flex-row " />
                                    <Button onClick={handleNext}
                                        label="Continue" className="w-full font-semibold uppercase font-sans bg-[#F9F8F3]  text-xs flex flex-row text-black " />
                                </div>

                            </div>

                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="text-4xl font-playfair">Tell us a bit about yourself and your collection.</h2>

                                <p className="text-xs font-sans py-2 text-[#0D0106]">Add a short bio and information about your products to let buyers know who you are and what makes your collection special.</p>

                                <div>

                                    <form>
                                        <div className="mt-4">
                                            <label className="block text-xs pb-2 uppercase font-sans">company name</label>
                                            <InputField className="text-sm font-sans placeholder:text-sm text-[#919089] w-full md:w-1/2 border border-[#EBE9E0]" type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-xs pb-2 uppercase font-sans">describe you business</label>
                                            <InputField placeholder="Write a short description of your business." className="text-sm font-sans placeholder:text-sm text-[#919089] w-full md:w-1/2 border border-[#EBE9E0]" type="text" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />

                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-xs pb-2 uppercase font-sans">email</label>
                                            <InputField className="text-sm font-sans placeholder:text-sm text-[#919089] w-full md:w-1/2  border border-[#EBE9E0]" placeholder="email@address.com" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-xs pb-2 uppercase font-sans">website</label>
                                            <InputField className="text-sm font-sans placeholder:text-sm text-[#919089] w-full md:w-1/2  border border-[#EBE9E0]" placeholder="www.website.com" type="text" value={formData.websiteUrl} onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })} />

                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-xs pb-2 uppercase font-sans">etsy shop name</label>
                                            <InputField className="text-sm font-sans placeholder:text-sm text-[#919089] w-full md:w-1/2  border border-[#EBE9E0]" placeholder="Name" type="text" value={formData.etsyShop} onChange={(e) => setFormData({ ...formData, etsyShop: e.target.value })} />

                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-xs pb-2 uppercase font-sans">Upload you logo</label>
                                            <div className="flex items-center justify-center w-full ">
                                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full  h-32 border-2 border-[#919089] border-dashed  cursor-pointer bg-[#F9F8F3]">
                                                    <div className="flex flex-col items-center font-sans justify-center pt-5 pb-6">

                                                        <p className="mb-2 text-sm text-[#919089]">ATTACH FILES</p>
                                                        <p className="text-xs text-[#919089]">JPG, PNG FORMAT ACCEPTED</p>
                                                    </div>
                                                    <input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                                                </label>
                                            </div>

                                        </div>

                                    </form>

                                </div>

                                <div className="flex flex-col md:flex-row mt-5 gap-3">
                                    <Button label="I'LL Do IT later" className="w-1/2 font-semibold font-sans bg-white uppercase   flex text-xs text-black flex-row " />
                                    <Button label="Continue" onClick={handleNext} className="w-full font-semibold uppercase font-sans bg-[#F9F8F3]  text-xs flex flex-row text-black " />
                                </div>
                            </div>

                        )}


                        {/* Step 4 start here */}

                        {step === 4 && (
                            <div className="">

                                <h1 className="text-[44px]">Application Submitted Successfully!</h1>

                                <p className="text-[16px] py-4"> Thank you for applying to become a seller. Our team will review your application and get back to you within a few business days.</p>


                                <div className="bg-[#F9F8F3] px-3 py-3 font-sans">
                                    <p className="text-sm pb-2">Please note:</p>

                                    <div className="px-2 space-y-2">
                                        <p className="text-xs">&#x2022; Your account is currently inactive and you will not be able to post products or message buyers until your application is approved and your account is activated.</p>
                                        <p className="text-xs">&#x2022; Once approved, you’ll gain full access to all seller features and can start showcasing your collection.</p>
                                    </div>
                                </div>

                                <p className="text-sm font-sans py-4">
                                    We’re excited to have you join The Antique Collector community!
                                </p>


                                <Button onClick={handleSubscription} label="Explore the platform" className="text-xs font-sans w-full uppercase" />

                            </div>

                        )}





                        {/* {step === 5 && (

                            <div className="px-2 md:px-6">
                                <h1 className="text-3xl">Stay in the Loop</h1>
                                <p className="text-xs py-2 font-sans">Never Miss a New Arrival</p>

                                <div className="flex items-center gap-2 py-7">
                                    <Checkbox1
                                        id="notifications" // Added ID for accessibility
                                        name="notifications"
                                        checked={formData.enableNotifications}
                                        onChange={() =>
                                            setFormData((prev: any) => ({
                                                ...prev,
                                                enableNotifications: !prev.enableNotifications,
                                            }))
                                        }
                                    />
                                    <label htmlFor="notifications" className="text-[10px] uppercase font-sans">
                                        Enable email notifications to get updates on items matching your preferences.
                                    </label>
                                </div>


                                <Button
                                    label="Finish Setting Up My Account"
                                    onClick={handleFinish}
                                    className="uppercase w-full text-xs"
                                />
                            </div>
                        )} */}

                        <DialogFooter>

                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>

        </>
    )
}


export default SellerAccountSetting;