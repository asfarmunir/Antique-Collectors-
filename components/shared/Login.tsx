import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/Dialog";
import Image from "next/image";
import Button from "../ui/Button";
import { RxCross2 } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import InputField from "../ui/InputField";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const Login = ({ onClose }: { onClose: any }) => {
    const [step, setStep] = useState(1); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const router = useRouter();
 

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim() !== "") {
          setStep(2); // Navigate to the next step
        } else {
          alert("Please enter a valid email.");
        }
      };
    

      const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email, password);
        if(!email || !password){
          toast.error('Please fill all fields');
        }
        if (email && password) {
          toast.success('Successfully account login!')
          alert(`Login Successful!\nEmail: ${email}\nPassword: ${password}`);
          router.push('/');
        } else {
          alert("Authentication failed. Please check your credentials.");
        }
      };





  return (
    <>
    <div className="relative">
      <Dialog open onOpenChange={onClose}>
        <DialogContent className="font-playfair">
          <DialogHeader className="font-playfair text-xl border-b border-[#EBE9E0] pb-2">
            <DialogTitle>
              <Button
                onClick={onClose}
                icon={<RxCross2 className="text-black" />}
                label=""
                className="bg-transparent absolute right-0 top-4"
              />
              <h1 className="font-playfair text-base uppercase text-start">
                {step === 1 && (<p>Login or Sign Up</p>)}
                {step === 2 && (<p>Login</p>)}
              </h1>
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col px-6">
            {step === 1 && (
              <>
                <h1 className="text-2xl">Welcome to The Antique Collector</h1>
                <p className="text-xs text-[#919089] pt-2 font-sans">
                  Discover a world of timeless treasures, crafted to match your unique tastes.
                </p>

                <div className="my-4">
                  <form onSubmit={handleEmailSubmit}>
                    <div className="space-y-2">
                      <label className="block text-xs uppercase font-sans">
                        Use your email address to sign up or login
                      </label>
                      <InputField
                        className="text-sm placeholder:text-sm text-[#919089] font-sans w-full border border-[#EBE9E0]"
                        placeholder="email@gmail.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button
                        type="submit"
                        label="Continue"
                        className="text-sm capitalize w-full font-sans"
                      />
                    </div>
                  </form>
                </div>

                <div className="flex items-center gap-3 py-3">
                  <div className="flex-grow border-t border-[#EBE9E0]"></div>
                  <p className="text-[#919089] px-3 text-xs">or</p>
                  <div className="flex-grow border-t border-[#EBE9E0]"></div>
                </div>

                <div>
                  <p className="text-[10px] font-sans uppercase text-[#0D0106] py-2">
                    Instantly Login or sign up via google
                  </p>

                  <div className="flex flex-row flex-wrap gap-3">
                    <Button
                      icon={<FcGoogle />}
                      label="Continue with Google"
                      className="w-full font-semibold font-sans bg-white uppercase  border border-[#919089] flex text-xs text-black flex-row"
                    />
                    <Button
                      icon={<FaApple />}
                      label="Continue with Apple"
                      className="w-full font-semibold uppercase font-sans bg-white border border-[#919089] text-xs flex flex-row text-black"
                    />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h1 className="text-2xl">Welcome back!</h1>
                <p className="text-xs text-[#919089] font-sans">
                  Please sign in by inputting your password.
                </p>

                <div className="my-4">
                  <form onSubmit={handlePasswordSubmit}>
                    <div className="space-y-2">
                      <label className="block text-xs uppercase font-sans">
                        Use your email address to sign up or login
                      </label>
                      <InputField
                        className="text-sm font-sans placeholder:text-sm w-full text-black border-b border-[#919089]"
                        value={email}
                        type="email"
                        readOnly
                      />
                    </div>

                    <div className="mt-4">
                      <label className="block text-xs uppercase font-sans">Password</label>
                      <InputField
                        className="text-sm font-sans placeholder:text-sm text-[#919089] w-full border border-[#EBE9E0]"
                        placeholder="*******"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        type="password"
                      />
                    </div>

                    <p className="text-xs py-2 uppercase font-sans text-[#919089] text-end">
                      Forgot password
                    </p>

                    <Button
                      type="submit"
                      label="Continue"
                      className="text-sm capitalize w-full font-sans"
                    />
                  </form>
                </div>

                <div className="flex items-center gap-3 py-3">
                  <div className="flex-grow border-t border-[#EBE9E0]"></div>
                  <p className="text-[#919089] px-3 text-xs">or</p>
                  <div className="flex-grow border-t border-[#EBE9E0]"></div>
                </div>

                <div>
                  <p className="text-[10px] font-sans uppercase text-[#0D0106] py-2">
                    Instantly Login or sign up via google
                  </p>

                  <div className="flex flex-col md:flex-row gap-3">
                    <Button
                      icon={<FcGoogle />}
                      label="Continue with Google"
                      className="w-full font-semibold font-sans bg-white uppercase  border border-[#919089] flex text-xs text-black flex-row"
                    />
                    <Button
                      icon={<FaApple />}
                      label="Continue with Apple"
                      className="w-full font-semibold uppercase font-sans bg-white border border-[#919089] text-xs flex flex-row text-black"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
            <ToastContainer />
    </>
  );
};

export default Login;