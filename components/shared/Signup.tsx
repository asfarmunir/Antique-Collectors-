import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/Dialog";
import Button from "../ui/Button";
import { RxCross2 } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import InputField from "../ui/InputField";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Checkbox1 from "../ui/tickbox";
import Link from "next/link";
// import SellerAccountSetting from "./SellerAccountSetting";
import SellerAccountSetting from "./SellerAccountSetting";
import { BuyerAccountSetting } from "./BuyerAccountSetting";
import { toast, ToastContainer } from "react-toastify";
import useSignup from "@/hooks/useSignup";


const SignUp = ({ onClose }: { onClose: any }) => {
    const {
        formData,
        currentStep,
        otp,
        handleInputChange,
        handleOtpChange,
        handleSubmit,
    } = useSignup();
 
    const [isBuyerOpen, setIsBuyerOpen] = useState(false);
    const [isSettingOpen, setIsSettingOpen] = useState(false);


    const handleSellerAccount = () => setIsSettingOpen(!isSettingOpen);
    const handleBuyer = () => setIsBuyerOpen(!isBuyerOpen);


    return (
        <>
            <div className="relative ">
                <Dialog open onOpenChange={onClose}>
                    <DialogContent className="font-playfair max-h-[90vh] overflow-y-auto" customWidth="max-w-2xl">
                        <DialogHeader className="font-playfair text-xl border-b border-[#EBE9E0] pb-2">
                            <DialogTitle>
                                <Button onClick={onClose} icon={<RxCross2 className="text-black" />} label="" className="bg-transparent absolute right-0 top-4" />
                                <h1 className="font-playfair text-base uppercase text-start">
                                    {currentStep === 1 && (
                                        <span>Login or Sign Up</span>
                                    )}

                                    {currentStep > 1 && (
                                        <span>Sign Up</span>
                                    )}

                                </h1>
                            </DialogTitle>
                        </DialogHeader>


                        {/* step 1 */}

                        {currentStep === 1 && (
                            <div className="flex flex-col px-2 md:px-6">

                                <h1 className="text-[32px]">Welcome to The Antique Collector</h1>
                                <p className="text-sm text-[#919089] font-sans pt-2">Discover a world of timeless treasures, crafted to match your unique tastes.</p>


                                <div className="my-4">
                                    <form onSubmit={handleSubmit}>

                                        <div className="space-y-2">
                                            <label className="block text-xs uppercase font-sans tracking-wide">use your email address to sign up or log in</label>
                                            <InputField className="text-sm font-sans placeholder:text-sm text-[#919089] w-full border border-[#EBE9E0]"
                                                placeholder="email@gmail.com"
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange} />

                                            <Button type="submit" label="Continue" className="text-sm hover:opacity-80 capitalize w-full font-sans" />
                                        </div>

                                    </form>
                                </div>

                                <div className="flex items-center gap-3 py-3">
                                    <div className="flex-grow border-t border-[#EBE9E0]"></div>
                                    <p className="text-[#919089] px-3 text-xs">or</p>
                                    <div className="flex-grow border-t border-[#EBE9E0]"></div>
                                </div>



                                <div>

                                    <p className="text-[10px] font-sans uppercase text-[#0D0106] py-2">Instantly Login or sign up via google</p>

                                    <div className="flex flex-col md:flex-row gap-3">
                                        <Button icon={<FcGoogle />} label="Continue with google" className="w-full font-semibold hover:bg-gray-100 font-sans bg-white uppercase  border border-[#919089] text-nowrap flex text-xs text-black flex-row " />
                                        <Button icon={<FaApple />} label="Continue with apple" className="w-full font-semibold  hover:bg-gray-100 uppercase font-sans bg-white border border-[#919089] text-nowrap text-xs flex flex-row text-black " />
                                    </div>
                                </div>

                            </div>
                        )}




                        {/* step 2 */}

                        {currentStep === 2 && (

                            <div className="flex flex-col px-2 md:px-6 py-4">
                                <h1 className="text-[32px]">Welcome to The Antique Collector</h1>
                                <p className="text-xs text-[#919089] font-sans pt-2">Discover a world of timeless treasures, crafted to match your unique tastes.</p>


                                <div className="my-4">
                                    <form onSubmit={handleSubmit}>

                                        <div className="space-y-2">
                                            <label className="block text-xs uppercase font-sans">use your email address to sign up or login</label>
                                            <InputField className="text-sm font-sans text-black placeholder:text-sm  w-full border-b border-[#919089]"
                                                placeholder="email@gmail.com"
                                                value={formData.email}
                                                type="email"
                                                readOnly />

                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-xs pb-2 uppercase font-sans">Your name</label>
                                            <InputField className="text-sm font-sans placeholder:text-sm text-[#919089] w-full border border-[#EBE9E0]"
                                                required name="name" value={formData.name} onChange={handleInputChange} placeholder="FIRST and LAST NAME" type="text" />

                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-xs pb-2 uppercase font-sans">mobile number</label>
                                            <InputField className="text-sm font-sans placeholder:text-sm text-[#919089] w-full border border-[#EBE9E0]" placeholder="+44" type="number"
                                                required name="mobile" value={formData.mobile} onChange={handleInputChange} />

                                        </div>

                                        <div className="mt-4">
                                            <label className="block text-xs pb-2 uppercase font-sans">create a Password</label>
                                            <InputField required minLength={8} className="text-sm font-sans placeholder:text-sm text-[#919089] w-full border border-[#EBE9E0]" placeholder="*******" type="password" name="password" value={formData.password} onChange={handleInputChange} />
                                            <p className="text-[10px] py-2 font-sans text-[#919089] text-start">Create a strong password containing at least 1 Upper case, 1 Lower case and a Number</p>

                                        </div>


                                        <div className="mt-4">
                                            <label className="block text-xs pb-2 uppercase font-sans">confirm Password</label>
                                            <InputField required minLength={8} className="text-sm font-sans placeholder:text-sm text-[#919089] w-full border border-[#EBE9E0]" placeholder="*******" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />

                                        </div>

                                        <div className="my-3">
                                            <Checkbox1
                                                label="By signing up you agree to our Terms and Conditions & Privacy Policy."

                                                name="terms"

                                                checked={formData.terms}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <Button type="submit" label="Continue" className="text-sm hover:opacity-80 capitalize w-full font-sans" />

                                    </form>
                                </div>

                                <div className="flex items-center gap-3 py-3">
                                    <div className="flex-grow border-t border-[#EBE9E0]"></div>
                                    <p className="text-[#919089] px-3 text-xs">or</p>
                                    <div className="flex-grow border-t border-[#EBE9E0]"></div>
                                </div>



                                <div>

                                    <p className="text-[10px] font-sans uppercase text-[#0D0106] py-2">Instantly Login or sign up via google</p>

                                    <div className="flex flex-col md:flex-row  gap-3">
                                        <Button icon={<FcGoogle />} label="Continue with google" className="w-full hover:bg-gray-100 font-semibold text-nowrap font-sans bg-white uppercase  border border-[#919089] flex text-xs text-black flex-row " />
                                        <Button icon={<FaApple />} label="Continue with apple" className="w-full hover:bg-gray-100 font-semibold uppercase text-nowrap font-sans bg-white border border-[#919089] text-xs flex flex-row text-black " />
                                    </div>
                                </div>
                            </div>


                        )}

                        {/* step 3 */}

                        {/* code verification */}

                        {currentStep === 3 && (
                            <div>

                                <h1 className="text-[#0D0106] text-[36px]">Please verify your email address to finish creating your account</h1>


                                <div className="mt-6 text-[#0D0106]">
                                    <p className="font-sans text-xs mb-2 uppercase">We’ve sent a verification code to your email address.</p>

                                    <InputField className="text-sm text-black font-sans placeholder:text-sm  w-full border-b border-[#919089]" placeholder="email@gmail.com"
                                        value={formData.email}
                                        type="email"
                                        readOnly />

                                    <div className="py-4">

                                        <p className="text-[10px] text-[#0D0106] font-sans uppercase">Your 4-digit code</p>

                                        <div className="flex flex-row gap-4 py-2">

                                            {otp.map((digit, index) => (
                                                <InputField className="border border-[#EBE9E0] h-16 w-16" key={index}
                                                    value={digit}
                                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                                    maxLength={1} />
                                            ))}
                                        </div>

                                        <p className="text-[12px] font-sans">Didn't receive a code? <Link href={"#"} className="uppercase text-[10px]">Resend</Link></p>
                                    </div>

                                </div>
                            </div>

                        )}



                        {/* last step */}

                        {currentStep === 4 && (
                            <div>
                                <h1 className="text-lg">Welcome To</h1>
                                <h1 className="italic text-2xl">The Antique Collector Anna!</h1>


                                <div className="font-sans mt-6">
                                    <p className="text-[#0D0106] text-[10px] uppercase">Are You Here to Buy or Sell?</p>
                                    <p className="text-[10px] pt-2 pb-3">Let us know your goals, and we’ll tailor your journey to match. You can start as a Buyer, and further upgrade your account to Seller.</p>
                                </div>


                                <div className="font-sans flex flex-col gap-2 md:flex-row ">

                                    <Button type="submit" onClick={handleBuyer} label="I'm a Buyer" className="bg-[#EBE9E0] text-xs uppercase text-[#463F3A] w-full" />
                                    <Button type="submit" label="I'm a Seller" className="bg-[#463F3A] text-xs text-white uppercase w-full" onClick={handleSellerAccount} />
                                </div>
                            </div>
                        )}

                        <DialogFooter>

                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>


            {isSettingOpen && <SellerAccountSetting onClose={() => setIsSettingOpen(false)} />}
            {isBuyerOpen && <BuyerAccountSetting onClose={() => setIsBuyerOpen(false)} />}

            <ToastContainer />
        </>
    )
}


export default SignUp;