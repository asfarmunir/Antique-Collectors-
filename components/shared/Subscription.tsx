import React from "react";
import { IoClose } from "react-icons/io5";
import { subscriptionPlans } from "@/lib/data";
import Button from "@/components/ui/Button";

const sub = ['posting', 'feed access', 'scheduled posts', 'account support', 'forum access', 'pop-Up ads',
    'messaging', 'sharing', 'analytics'
]
const Subscription = () => {
    return (
        <>
            <div className="">
                <div className="border-b border-[#EBE9E0] flex flex-row justify-between gap-6 px-4 items-center">
                    <h1 className="text-xl py-4 uppercase font-playfair">Setting up your account </h1>
                    <IoClose className="text-xl" />
                </div>

                <div >
                    <div className="mt-16 relative">
                        <div className="px-4 md:px-10 md:w-[450px]">
                            <h1 className="text-4xl font-playfair">Choose your Subscription Plan</h1>
                            <p className="py-6 text-xs">Each tier is designed to fit your unique needs as a seller on The Antique Collector. Choose the plan that best matches your goals and begin sharing your collection with a community of passionate collectors.</p>
                        </div>


                        <div className="bg-[#F9F8F3] mt-10 py-8 px-6 md:pl-12 pr-6">
                            {['posting', 'feed access', 'scheduled posts', 'account support', 'forum access', 'pop-Up ads',
                                'messaging', 'sharing', 'analytics'
                            ].map((item) => (
                                <p className="border-b py-1 border-[#EBE9E0] text-[#0D0106] capitalize text-xs" key={item}>{item}</p>
                            ))}


                        </div>



                        <div className="lg:absolute lg:right-10 lg:top-0">
                            <div className="mt-5 lg:mt-0 grid grid-cols-2  md:grid-cols-3 gap-2 px-4 lg:px-0">
                                {subscriptionPlans.map((plan) => (
                                    <div key={plan.name} className={`border relative h-[580px] rounded-md p-4 bg-[#FFFFFF8F] flex flex-col justify-between gap-3 items-center  border-[#EBE9E0] ${plan.name === 'Silver' ? 'border-2 border-black' : ''}`}>

                                        <div className="mt-6 space-y-3  text-center flex flex-col items-center">
                                            <p className={`${plan.name === 'Silver' ? 'bg-black flex items-center justify-center absolute top-0 py-1 w-full ' : ''}   text-white text-[10px] `}>{plan.name === 'Silver' ? 'Popular Plan' : ''}</p>
                                            <h1 className="text-2xl font-playfair ">{plan.name}</h1>
                                            <p className="text-xs">${plan.price_per_month} <span className="text-[#919089]">user/mo</span></p>
                                            <p className="text-xs">or ${plan.price_per_year} <span className="text-[#919089]">/year</span></p>
                                        </div>
                                        <div className="mt-2 lg:mt-4">

                                            <ul className="list-inside list-disc">
                                                {Object.entries(plan.features).map(([key, value]) => (
                                                    <li key={key} className="text-center lg:border-b-0 border-b broder-[#EBE9E0]">
                                                        <span className="text-xs text-[#454545]"> {value}</span>
                                                    </li>
                                                ))}
                                            </ul>




                                            <div className="mt-14 flex justify-center items-center">
                                                <Button label="Select" className="py-2  text-xs uppercase text-black bg-white border border-black" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>





                </div>
                <div className="mt-20 px-8">
                    <h1 className="text-3xl font-playfair capitalize">Or Continue with a free account</h1>
                    <div className="py-8">
                        <p className="text-sm"><span className="pr-1">•</span> Minimum Posts: 1 per week (or auto-bump to Bronze)</p>
                        <p className="text-sm"><span className="pr-1">•</span> Messaging: View-Only – Receive email notifications of new messages, but no in-app message view.</p>
                        <p className="text-sm"><span className="pr-1">•</span> Forum Access: Not included</p>
                        <p className="text-sm"><span className="pr-1">•</span> Features: Full sharing features</p>
                        <p className="text-sm"><span className="pr-1">•</span> Basic analytics</p>
                    </div>


                    <Button className="w-1/3 p-2 uppercase text-sm" type="submit" label="Continue" />
                </div>



            </div>
        </>
    )
}

export default Subscription;