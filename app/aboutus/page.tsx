import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { intrests } from "@/lib/data";



const Aboutus = () => {
    return (

        <>
            <div>
                <div className="py-4 px-4 md:px-6 lg:px-12 border-b border-[#EBE9E0]" >
                    <h1 className="text-xs">Home / About Us</h1>
                    <h1 className="font-playfair pt-4 uppercase text-xl ">About Us</h1>
                </div>

                <div className=" bg-[#F9F8F3] flex flex-col  pt-20 pb-16 px-4 relative">
                    <div>
                        <div className="absolute -top-8 right-6">
                            <Image src="/images/about/about1.png" width={120} height={80} alt="about pic1" />

                        </div>
                        <div className="absolute md:-bottom-6 md:block hidden">
                            <Image src="/images/about/about2.png" width={120} height={80} alt="about pic1" />

                        </div>

                        <div className="absolute top-4 md:hidden block ">
                            <Image src="/images/about/about2.png" width={120} height={80} alt="about pic1" />

                        </div>
                    </div>

                    <div className="mt-28 px-4 sm:mt-20 md:mt-0 flex flex-col gap-2 items-center justify-center">
                        <h1 className="font-playfair text-3xl">Our Story</h1>
                        <p className="w-96 text-sm px-4 text-center">The Antique Collector is a new and exciting global platform where potential buyers can interact with the world's premiere antique and jewelry dealers, and peruse and buy their latest stock. Created by two dealers who thought it was time for a change, for somewhere more specialised, but still fresh and without a regimented corporate feel.</p>
                    </div>


                </div>


                <section className="py-4 px-4 md:px-6 lg:px-12 flex flex-col-reverse md:flex-row gap-4 pt-20">
                    <div className="w-full md:w-1/2">
                        <Image src="/images/about/about3.png" width={350} height={300} alt="about pic1" />
                    </div>

                    <div className="w-full  md:w-1/2 flex flex-col justify-center ">  {/* Updated this div */}
                        <h1 className="font-playfair text-2xl">Discover Antiques from all over the World</h1>
                        <p className="text-[#666666] text-sm py-2">
                            The Antique Collector partners with dealers and auction houses from all over the world. From Antique and Vintage Jewelry, to Furniture and Decorative Antiques, all under one virtual roof.
                        </p>
                    </div>
                </section>


                <section className="px-4 md:px-6 lg:px-12  pt-10">

                    <div>
                        <h1 className="text-2xl font-playfair">Follow your favorite dealers</h1>
                        <p className="text-[#666666] py-2 text-sm">Follow the people you love and see all their new posts. Or go to the categories and hunt down specific pieces.</p>


                        <div className="flex flex-row flex-wrap justify-start md:justify-between items-center gap-6 md:gap-8 py-10">
                            {intrests.map((intrest, index) => (
                                <div key={index} className="flex flex-col flex-nowrap items-center justify-between">
                                    <div className="mb-3">
                                        <Image
                                            src={intrest.image}
                                            alt="interest"
                                            width={70}
                                            height={70}
                                            className=" "
                                        />
                                    </div>
                                    <h2 className="uppercase text-xs">{intrest.name}</h2>
                                </div>
                            ))}
                        </div>
                    </div>


                </section>


                <section className="px-4 md:px-6 lg:px-12  pt-10 ">

                    <div className="grid md:grid-cols-5 mb-8">

                        <div className="col-span-2 px-4 md:p-6">
                            <h1 className="text-xl font-playfair">Liaise With Dealers Privately</h1>
                            <p className="text-xs text-[#666666] py-2">Liaise with dealers with our direct message, or their email, and arrange payment offline or on their website. The Antique Collector does not add fees or commission, or share your data with third parties unless directly related to app functionality.</p>
                        </div>
                        <div className="col-span-1 flex flex-row items-center justify-center">
                            <Image src='/images/about/about4.png' alt="About last image" width={160} height={160} />
                        </div>
                        <div className="col-span-2 p-6">
                            <h1 className="text-xl font-playfair">Become a dealer and be seen</h1>
                            <p className="text-[#666666] text-xs py-0">When you join our community your followers will be able to see all your new finds in the daily feed, in chronological order. Our algorithm does not choose what you see, you see who you follow in real time. No silly dances required for visibility.</p>
                        </div>
                    </div>


                </section>



                {/* how to join community */}

                <section className="bg-[#463F3A] flex text-white flex-col items-center justify-center ">
                    <div className="w-full px-3 md:w-1/2 py-10 text-center">
                        <h1 className="text-2xl font-playfair capitalize">How to Join our Community</h1>
                        <p className="text-[#EBE9E0] text-sm py-2">
                            The Antique Collector is free for all buyers. Just download the app and login.
                            Sellers download the app and login, and then fill in the online application here or on the app to start selling.
                        </p>
                        <p className="uppercase text-xs py-3">We are offering free seller membership for early adopters</p>
                        <p className="font-playfair uppercase text-sm">Join now and be ahead of the crowd!</p>
                        <div className="flex flex-row items-center justify-center mt-4">
                            <Button label="become a seller" className="uppercase bg-[#EBE9E0] text-[#463F3A] text-xs px-8 w-1/2" />
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}

export default Aboutus;