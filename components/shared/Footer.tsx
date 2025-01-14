'use client';
import { useState } from "react";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { productsLink, sellersLink, forumLink, myaccountLink } from "@/lib/constants";


const Footer = () => {
    const [subEmail, setSubEmail] = useState();



    const handleSubscribe = () => {
        if (!subEmail) {
            alert('Please enter a valid email address.');
            return;
        }


        // Perform your subscription logic here
        console.log('Subscribed with email:', subEmail);
        alert('Thank you for subscribing!');

        // Clear the input field after subscription
        setSubEmail('');

    }
    return (
        <>
            <section className="py-5 px-4">
                <div className=" flex flex-row flex-wrap items-center justify-between gap-4 pb-3" >

                    <h1 className="text-2xl font-playfair py-6">Subscribe to our Newsletter</h1>

                    <div className="flex flex-row items-center justify-center">
                        <InputField placeholder="Your Email Address" className="border border-[#EBE9E0] text-[#919089] placeholder:text-[#919089] p-2 " type="email" value={subEmail} onChange={(e) => setSubEmail(e.target.value)} />
                        <Button onClick={handleSubscribe} label="Subscribe" className="uppercase text-xs" />
                    </div>


                </div>


                <div className="  md:grid md:grid-cols-5 gap-8 border-t border-[#EBE9E0] pt-3 pb-10">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="/images/footerlogo.svg" width={80} height={80} alt="footer logo" />
                        <p className="text-[#919089] text-[10px] w-60">Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma</p>

                        <div className="flex flex-row gap-2 py-3">
                            <FaFacebookF
                                key="facebook"
                                className="bg-[#EBE9E0] text-xl text-[#919089] p-1 cursor-pointer"
                                href="#"
                            />
                            <AiFillInstagram
                                key="instagram"
                                className="bg-[#EBE9E0] text-xl text-[#919089] p-1 cursor-pointer"
                                href="#"
                            />
                        </div>

                    </div>
                    <div className="md:block hidden">
                        <p className="text-[#0D0106] text-xs uppercase pb-2">Products</p>

                        <div className="space-y-2">
                            {productsLink.map((items) => (

                                <div key={items.label} className="text-xs ">
                                    <Link href={items.label} className="text-[#919089] text-[10px]">{items.label}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:block hidden">
                        <p className="text-[#0D0106] text-xs uppercase pb-2">Sellers</p>

                        <div className="space-y-2">
                            {sellersLink.map((items) => (

                                <div key={items.label} className="text-xs ">
                                    <Link href={items.label} className="text-[#919089] text-[10px]">{items.label}</Link>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="md:block hidden">
                        <p className="text-[#0D0106] text-xs uppercase pb-2">Forum</p>

                        <div className="space-y-2">
                            {forumLink.map((items) => (

                                <div key={items.label} className="text-xs ">
                                    <Link href={items.label} className="text-[#0D0106] uppercase text-[10px]">{items.label}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:block hidden">
                        <p className="text-[#0D0106] text-xs uppercase pb-2">My Account</p>

                        <div className="space-y-2">
                            {myaccountLink.map((items) => (

                                <div key={items.label} className="text-xs ">
                                    <Link href={items.label} className="text-[#919089] text-[10px]">{items.label}</Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>



                {/* copy right */}

                <div className="border-t border-[#EBE9E0] py-4">

                    <p className="text-xs text-[#919089] text-center">
                        Copyright © 2025 The Antique Collector | All Rights Reserved |
                        <span className="text-[#0D0106]"> Terms and Conditions | Privacy Policy</span>
                    </p>


                </div>
            </section>

        </>
    )
}

export default Footer;