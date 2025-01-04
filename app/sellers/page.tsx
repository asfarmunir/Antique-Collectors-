'use client';
import React, { useState } from "react";
import { BiCandles } from "react-icons/bi";
import { HiViewGrid } from "react-icons/hi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import Image from "next/image";
import Checkbox1 from "@/components/ui/tickbox";
import { TiMinus, TiPlus } from "react-icons/ti";
import FilterComponent from "@/components/shared/SidebarFilter";
import Button from "@/components/ui/Button";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import Link from "next/link";
import { VscVerifiedFilled } from "react-icons/vsc";
import Dropdown from "@/components/ui/DropDown";
import { sellerdata, sellers } from "@/lib/data";
import { useRouter } from "next/navigation";

const checkboxlablel = ["Roman - 753 BC - 476 AD", "Elizabethan - 1558 - 1603", "Renaissance - early 1425 - 1490", "Baroque - 1600 - 1750", "William and Mary - 1689 - 1702", "Georgian - 1714 - 1837", "Queen Anne - 1702 - 1714"];
const checkboxlablel1 = ["Excellent Condition", "Very Good Condition", "Good Condition", "Fair Condition"];
const sortData = ['Latest', 'A to Z', 'Low to Higher Price', 'Higher to Low Price', 'Highest Sale Products'];

const Seller = () => {
    const [isGridView, setIsGridView] = useState(true); // State for grid layout
    const [isHorizontalView, setIsHorizontalView] = useState(false); // State for horizontal layout
    const [filterOpen, setFilterOpen] = useState(true);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    // State to handle the number of visible products
    const [visibleGridUsers, setVisibleGridUsers] = useState(10); // Show 10 initially in grid view
    const [visibleHorizontalUsers, setVisibleHorizontalUsers] = useState(10); // Show 10 initially in horizontal view

    const router = useRouter();

    const handleGridView = () => {
        setIsGridView(true);
        setIsHorizontalView(false);
    };

    const handleHorizontalView = () => {
        setIsGridView(false);
        setIsHorizontalView(true);
    };

    const handleSelect = (item: string) => {
        console.log('Selected:', item);
    };

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const handleSellerDetails = (id: any) => {
        router.push(`/sellers/${id}`);
    };

    // Handle "View More" and "View Less"
    const handleViewMore = () => {
        if (isGridView) {
            setVisibleGridUsers(visibleGridUsers + 10); // Increase by 10
        } else if (isHorizontalView) {
            setVisibleHorizontalUsers(visibleHorizontalUsers + 10); // Increase by 10
        }
    };

    const handleViewLess = () => {
        if (isGridView) {
            setVisibleGridUsers(10); // Reset to initial 10
        } else if (isHorizontalView) {
            setVisibleHorizontalUsers(10); // Reset to initial 10
        }
    };

    return (
        <>
            <div>
                <div className="py-4 px-4 md:px-6 lg:px-10">
                    <h1 className="text-xs">Home / Sellers / A-Z Sellers</h1>
                    <h1 className="font-playfair pt-4 uppercase text-xl">Sellers</h1>
                </div>

                <section className="bg-[#F9F8F3] py-4 px-4 lg:px-10 md:px-6">
                    <div className="flex flex-wrap gap-5 flex-row justify-between items-center">
                        {/* Filter button */}
                        <div onClick={() => setFilterOpen(!filterOpen)} className="inline-flex cursor-pointer flex-row items-center gap-2 py-3 px-8 bg-[#EBE9E0]">
                            <BiCandles className="text-lg text-[#0D0106]" />
                            <p className="text-xs text-[#0D0106]">FILTER</p>
                        </div>
                        <p className="uppercase text-xs md:hidden">Showing 320 Results</p>

                        <div className="flex flex-row justify-between gap-8 items-center">
                            <div className="lg:flex flex-row items-center gap-4 md:block hidden">
                                <p className="uppercase text-xs">Showing 320 Results</p>

                                <div className="flex flex-row gap-2 items-center ">
                                    {/* Grid view button */}
                                    <HiViewGrid
                                        className={`text-lg cursor-pointer ${isGridView ? "text-black opacity-100" : "text-gray-400 opacity-50"}`}
                                        onClick={handleGridView}
                                    />
                                    {/* Horizontal layout button */}
                                    <TbLayoutDistributeHorizontal
                                        className={`text-lg cursor-pointer ${isHorizontalView ? "text-black opacity-100" : "text-gray-400 opacity-50"}`}
                                        onClick={handleHorizontalView}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row items-center gap-5 z-50">
                                <p className="uppercase text-xs text-nowrap">Sort by</p>
                                <div className="w-full">
                                    <Dropdown
                                        label="Sort it"
                                        items={sortData}
                                        onSelect={handleSelect}
                                        isOpen={openDropdown === 1}
                                        toggleDropdown={() => toggleDropdown(1)}
                                        className="bg-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main content */}
                <div className={` px-4 md:px-6 md:grid md:grid-cols-${filterOpen ? 4 : 4}`}>
                    {filterOpen && (
                        <div className="md:col-span-1 py-6 md:block hidden">
                            <FilterComponent
                                checkboxlablel={checkboxlablel}
                                checkboxlablel1={checkboxlablel1}
                                filtersToShow={['category', 'eraPeriod', 'condition', 'sellerLocation', 'color', 'availability']}
                            />
                        </div>
                    )}

                    <div className={`col-span-${filterOpen ? 3 : 4} py-6`}>
                        {isGridView && (
                            <div className={`w-full grid grid-cols-1 px-4 md:px-6 md:grid-cols-2 lg:grid-cols-${filterOpen ? 3 : 3} xl:grid-cols-${filterOpen ? 3 : 3} gap-5 gap-y-2`}>
                                {sellers.slice(0, visibleGridUsers).map((items) => (
                                    <div key={items.title} className="relative flex flex-col items-center hover:scale-105 transition duration-500 ease-in-out" onClick={handleSellerDetails}>
                                        <div className="relative z-30 top-6">
                                            <Image src={items.src} alt={items.title} width={80} height={80} />
                                        </div>
                                        <div className="bg-[#F9F8F3] w-full capitalize flex flex-col gap-1 items-center relative pt-6 pb-6 z-10">
                                            <div className="flex flex-row items-center gap-2 pt-1">
                                                <h1 className="font-playfair text-base font-semibold">Seller Name</h1>
                                                {items.verified ? <VscVerifiedFilled className="text-green-600" /> : ""}
                                            </div>
                                            <p className="uppercase text-xs">{items.totalproduct} Products</p>
                                            <Button className="bg-transparent text-xs text-[#0D0106] p-0" label="Follow" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {isHorizontalView && (
                            <div className="mx-4 md:mx-6">
                                {sellerdata.slice(0, visibleHorizontalUsers).map((item) => (
                                    <div className="bg-[#EBE9E0] p-4 my-6 text-[#0D0106]" key={item.id}>
                                        <div className="uppercase text-xs flex flex-row justify-between items-center">
                                            <p>{item.product_count} products</p>
                                            <Link href={"#"}>Shop All</Link>
                                        </div>
                                        <div className="flex flex-row items-center gap-2 py-2 overflow-x-auto">
                                            {Array.from({ length: 6 }).map((_, index) => (
                                                <Image src="/images/products/p2.png" width={120} height={120} alt="images" key={index} />
                                            ))}
                                        </div>
                                        <div className="py-2 flex flex-row justify-between">
                                            <div className="flex flex-row items-center gap-2">
                                                <Image src="/images/sellers/s1.png" width={40} height={40} className="rounded-full" alt="" />
                                                <h1 className="font-playfair text-lg text-[#0D0106]">{item.seller.name}</h1>
                                            </div>
                                            <Button label="Follow" className="uppercase text-xs bg-transparent text-[#463F3A]" />
                                        </div>
                                        <h2 className="pt-2 ">{item.seller.location}</h2>
                                        <p className="py-3 text-sm">{item.seller.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-6">
                    <div className="flex flex-row justify-center items-center py-6">
                        {visibleGridUsers >= 30 || visibleHorizontalUsers >= 30 ? (
                            <Button label="View Less" onClick={handleViewLess} className="uppercase border border-[#0D0106] py-2 px-8 bg-white text-[#0D0106]" />
                        ) : (
                            <Button label="View More" onClick={handleViewMore} className="uppercase border border-[#0D0106] py-2 px-8 bg-white text-[#0D0106]" />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Seller;
