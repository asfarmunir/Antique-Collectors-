'use client';
import React, { useState } from "react";
import { BiCandles } from "react-icons/bi";
import { HiViewGrid } from "react-icons/hi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import Image from "next/image";
import FilterComponent from "@/components/shared/SidebarFilter";
import Button from "@/components/ui/Button";
import { VscVerifiedFilled } from "react-icons/vsc";
import Link from "next/link";
import Dropdown from "@/components/ui/DropDown";
import { sellerdata, sellers } from "@/lib/data";
import { useRouter } from "next/navigation";
import { checkboxLabels, conditionLabels, sortOptions } from "@/lib/constants";

const Seller = () => {
    const [isGridView, setIsGridView] = useState(true); // State for grid layout
    const [isHorizontalView, setIsHorizontalView] = useState(false); // State for horizontal layout
    const [filterOpen, setFilterOpen] = useState(true);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [visibleGridUsers, setVisibleGridUsers] = useState(24); // Initial visible items in grid
    const [visibleHorizontalUsers, setVisibleHorizontalUsers] = useState(12); // Initial visible items in horizontal

    const router = useRouter();

    const handleGridView = () => {
        setIsGridView(true);
        setIsHorizontalView(false);
    };

    const handleSelect = (item: string) => {
        console.log("Selected:", item);
    };

    const handleHorizontalView = () => {
        setIsGridView(false);
        setIsHorizontalView(true);
    };

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const handleSellerDetails = (id: any) => {
        router.push(`/sellers/${id}`);
    };

    // Toggle View More and View Less for Grid View
    const handleGridToggle = () => {
        setVisibleGridUsers((prev) => (prev === 24 ? sellers.length : 24));
    };

    // Toggle View More and View Less for Horizontal View
    const handleHorizontalToggle = () => {
        setVisibleHorizontalUsers((prev) => (prev === 12 ? sellerdata.length : 12));
    };

    return (
        <>
            <div>
                <div className="py-4 px-4 md:px-6 lg:px-12">
                    <h1 className="text-xs">Home / Sellers / A-Z Sellers</h1>
                    <h1 className="font-playfair pt-4 uppercase text-xl">Sellers</h1>
                </div>

                <section className="bg-[#F9F8F3] py-4 px-4 lg:px-12 md:px-6">
                    <div className="flex flex-wrap gap-5 flex-row justify-between items-center">
                        <div
                            onClick={() => setFilterOpen(!filterOpen)}
                            className="inline-flex cursor-pointer flex-row items-center gap-2 py-3 px-8 bg-[#EBE9E0]"
                        >
                            <BiCandles className="text-lg text-[#0D0106]" />
                            <p className="text-xs text-[#0D0106]">FILTER</p>
                        </div>
                        <p className="uppercase text-xs md:hidden">Showing {sellers.length} Results</p>

                        <div className="w-full md:w-auto flex flex-row justify-between gap-4 items-center">
                            <div className="lg:flex flex-row items-center gap-4 md:block hidden">
                                <p className="uppercase text-xs text-nowrap">Showing {sellers.length} Results</p>
                                <div className="flex flex-row gap-2 items-center ">
                                    <HiViewGrid
                                        className={`text-lg cursor-pointer ${isGridView ? "text-black opacity-100" : "text-gray-400 opacity-50"
                                            }`}
                                        onClick={handleGridView}
                                    />
                                    <TbLayoutDistributeHorizontal
                                        className={`text-lg cursor-pointer ${isHorizontalView ? "text-black opacity-100" : "text-gray-400 opacity-50"
                                            }`}
                                        onClick={handleHorizontalView}
                                    />
                                </div>
                            </div>

                            <div className="w-full md:w-auto flex flex-row items-center gap-5 z-50">
                                <p className="uppercase text-xs text-nowrap">Sort by</p>
                                <Dropdown
                                    label="Sort it"
                                    items={sortOptions}
                                    onSelect={handleSelect}
                                    isOpen={openDropdown === 1}
                                    toggleDropdown={() => toggleDropdown(1)}
                                    className="bg-white w-full border border-[#EBE9E0]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div className={`px-4 md:px-6 lg:px-12 grid gap-6 grid-cols-1 md:grid-cols-${filterOpen ? 4 : 4}`}>
                    {filterOpen && (
                        <div className="md:col-span-1 py-6 md:block hidden">
                            <FilterComponent
                                checkboxlablel={checkboxLabels}
                                checkboxlablel1={conditionLabels}
                                filtersToShow={[
                                    "category",
                                    "eraPeriod",
                                    "condition",
                                    "sellerLocation",
                                    "color",
                                    "availability",
                                ]}
                            />
                        </div>
                    )}

                    <div className={`col-span-${filterOpen ? 3 : 4} py-6`}>
                        {isGridView && (
                            <div
                                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${filterOpen ? 3 : 4} gap-4`}
                            >
                                {sellers.slice(0, visibleGridUsers).map((items) => (
                                       <div
                                       key={items.id} // Use a unique ID
                                       className="relative flex flex-col items-center hover:scale-105 transition duration-500 ease-in-out"
                                       onClick={() => handleSellerDetails(items.id)} // Pass the correct ID to the handler
                                     >
                                        <div className="relative z-30 top-6">
                                            <Image src={items.src} alt={items.title} width={80} height={80} />
                                        </div>
                                        <div className="bg-[#F9F8F3] w-full capitalize flex flex-col gap-1 items-center relative pt-6 pb-6 z-10">
                                            <div className="flex flex-row items-center gap-2 pt-1">
                                                <h1 className="font-playfair text-[20px] ">
                                                    Seller Name
                                                </h1>
                                                {items.verified ? <VscVerifiedFilled className="text-green-600" /> : ""}
                                            </div>
                                            <p className="uppercase text-xs">{items.totalproduct} Products</p>
                                            <Button
                                                className="bg-transparent text-xs text-[#0D0106] p-0"
                                                label="Follow"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {isHorizontalView && (
                            <div className="">
                                {sellerdata.slice(0, visibleHorizontalUsers).map((item) => (
                                    <div
                                        className="bg-[#EBE9E0] p-4 my-6"
                                        key={item.id}
                                        onClick={handleSellerDetails}
                                    >
                                        <div className="uppercase text-xs flex flex-row justify-between items-center">
                                            <p>{item.product_count} products</p>
                                            <Link href={"#"}>Shop All</Link>
                                        </div>
                                        <div className="flex flex-row items-center gap-2 py-2 overflow-x-auto">
                                            {Array.from({ length: 6 }).map((_, index) => (
                                                <Image
                                                    src="/images/products/p2.png"
                                                    width={120}
                                                    height={120}
                                                    alt="images"
                                                    key={index}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex flex-row items-center justify-between gap-4 my-3">
                                            <div className="flex flex-row items-center gap-2">
                                                <Image src="/images/sellers/s1.png" width={50} height={50} className="rounded-full" />
                                                <h1 className="text-[20px] md:text-[24px] font-playfair">Antique Animal Jewelry</h1>
                                                </div>
                                                <Link href={"#"} className="text-sm uppercase text-[#463F3A]">Follow</Link>
                                        </div>
                                        <h2 className="pt-2">{item.seller.location}</h2>
                                        <p className="py-3 text-sm">{item.seller.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
















                

                <div className="mt-6 flex justify-center">
                    <Button
                        label={
                            isGridView
                                ? visibleGridUsers === 24
                                    ? "View More"
                                    : "View Less"
                                : visibleHorizontalUsers === 12
                                    ? "View More"
                                    : "View Less"
                        }
                        onClick={isGridView ? handleGridToggle : handleHorizontalToggle}
                        className="uppercase border border-[#0D0106] py-2 px-12 hover:bg-black hover:text-white text-sm bg-white text-[#0D0106]"
                    />
                </div>
            </div>
        </>
    );
};

export default Seller;
