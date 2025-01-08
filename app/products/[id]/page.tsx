'use client';;
import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import Button from "@/components/ui/Button";
import { LuReply } from "react-icons/lu";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { RiArrowDropUpLine, RiArrowDropDownLine, RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

import { FaRegCommentDots } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useProducts from "@/hooks/useProducts";


const ProductDetails = ({ params }: { params: any }) => {
    //  const [products, setProducts] = useState<any>(null); // Full product list
    const { products, toggleFavorite, isFavorite } = useProducts();

    const router = useRouter()
    const { id } = params;



    const images = [
        "/images/products/p1.png",
        "/images/blogs/b2.png",
        "/images/blogs/b3.png",
        "/images/blogs/b1.png",
    ];


    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Handle image selection
    const handleImageClick = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    const handleProductDetails = (id: any) => {
        router.push(`/products/${id}`);
    }

    // Handle navigation via arrow icons
    const handleMoveUp = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : images.length - 1
        );
    };

    const handleMoveDown = () => {
        setSelectedImageIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
    };






    return (
        <>
            <div>
                <div className="py-4 px-4 md:px-6 lg:px-12 border-y border-[#EBE9E0]" >
                    <h1 className="text-xs">Home / Products / {products?.category}</h1>
                    <h1 className="font-playfair pt-4 uppercase text-xl ">{products?.title}</h1>
                </div>

                {/* Product details here */}
                <div className="grid grid-cols-1 md:grid-cols-7 gap-2 pt-4 px-4">
                    {/* Left Column: Image Gallery */}
                    <div className="md:col-span-3 md:h-[350px]">
                        <div className="flex w-full flex-col-reverse md:flex-row  md:border-r border-[#EBE9E0] h-full">
                            {/* Scrollable Image Gallery */}
                            <div className="w-full md:w-1/3 flex lg:flex-col items-center gap-1">

                                <button className="text-3xl cursor-pointer" onClick={handleMoveUp}> <span className="hidden lg:block">
                                    <RiArrowDropUpLine />
                                </span>
                                    <span className="block lg:hidden">
                                        <RiArrowLeftLine className="text-sm" />
                                    </span>
                                </button>
                                <div className="flex  lg:flex-col gap-4  max-h-40 md:max-h-none">
                                    {images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={`Image ${index + 1}`}
                                            width={60}
                                            height={60}
                                            className={`border border-[#EBE9E0] cursor-pointer ${index === selectedImageIndex ? "ring-2 ring-[#EBE9E0]" : ""
                                                }`}
                                            onClick={handleImageClick}
                                        />
                                    ))}
                                </div>
                                <button onClick={handleMoveDown} className="text-3xl cursor-pointer"><span className="hidden lg:block">
                                    <RiArrowDropDownLine />
                                </span>
                                    <span className="block lg:hidden">
                                        <RiArrowRightLine className="text-sm" />
                                    </span></button>

                            </div>

                            {/* Main Image */}
                            <div className="w-full py-3 flex h-auto ">
                                <Image
                                    src={images[selectedImageIndex]}
                                    alt="Selected image"
                                    width={350}
                                    height={350}
                                    className=""
                                />
                            </div>
                        </div>




                    </div>

                    {/* Right Column: Product Details */}
                    <div className=" md:col-span-4 md:h-[350px] mt-12 md:mt-0">
                        <div className="flex flex-col px-4 md:px-6 lg:px-10">
                            {/* Seller Info */}
                            <div className="flex items-center justify-between border-b pb-2 border-[#EBE9E0]">
                                <div className="flex items-center text-sm gap-3">
                                    <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                                        <Image src="/" width={10} height={10} className="rounded-full" alt="Seller logo" />
                                    </div>
                                    <h1 className="uppercase font-playfair">Seller Name</h1>
                                </div>
                                <h1 className="text-[#0D0106] text-xs cursor-pointer hover:underline">FOLLOW</h1>
                            </div>

                            {/* Product Title */}
                            <h1 className="text-lg md:text-xl uppercase font-playfair my-4">{products?.title}</h1>

                            {/* Product Description */}
                            <p className="text-[#919089]  mb-4 text-sm md:text-sm">
                                {products?.description}
                            </p>

                            {/* Product Specifications */}
                            <div className="flex flex-wrap justify-between py-3 gap-4  text-gray-800">
                                <div className="text-[10px]">
                                    <p className="text-[#919089] uppercase">Price</p>
                                    <p className="">$ {products?.price}</p>
                                </div>
                                <div className="text-[10px]">
                                    <p className="text-[#919089] uppercase">Measurements</p>
                                    <p>{products?.dimensions?.width} CM X {products?.dimensions?.height} CM</p>
                                </div>
                                <div className="text-[10px]">
                                    <p className="text-[#919089] uppercase">Date & Origin</p>
                                    <p>140CM X 120CM</p>
                                </div>
                                <div className="text-[10px]">
                                    <p className="text-[#919089] uppercase">Materials</p>
                                    <p>140CM X 120CM</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 mt-6">
                                <Button
                                    label="Add to favorite"
                                    icon={<CiHeart className="text-xl" />}
                                    className="bg-white uppercase text-xs text-nowrap md:text-sm border border-black text-black w-full py-2 hover:bg-gray-100"
                                />
                                <Button
                                    label="Send a Query"
                                    className="bg-[#0D0106] uppercase border text-xs md:text-sm border-black text-white w-full py-2 hover:bg-gray-800"
                                />
                            </div>



                        </div>
                    </div>
                </div>



                <div className="md:px-8 grid grid-cols-1 md:grid-cols-7 md:mb-8  mt-4">
                    <div className=" md:col-span-3 mx-4">
                        {/* Left Side: Like and Comment */}
                        <div className="flex flex-row gap-6 border-b pb-2 border-[#EBE9E0]">
                            <button className="flex flex-row gap-2 items-center ">
                                <CiHeart className="text-xl" /> 23
                            </button>
                            <button className="flex flex-row gap-2 items-center ">
                                <FaRegCommentDots className="text-xl" /> 32
                            </button>
                        </div>
                        {Array.from({ length: 2 }).map((_, index) => (
                            <div className="border border-[#EBE9E0] p-3 my-3 ">
                                <h3 className="uppercase text-semibold text-sm text-[#0D0106]">Name SurName</h3>
                                <p className="text-xs py-3 text-[#919089]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis facilis non dolorum veniam odit quasi odio earum, fugit suscipit maxime eaque fugiat reiciendis voluptates id voluptatibus nam, mollitia distinctio necessitatibus!</p>

                                <div className="flex flex-row gap-6  text-[#919089]">
                                    <button className="flex flex-row gap-2 items-center ">
                                        <CiHeart className="text-xl" /> 23
                                    </button>
                                    <button className="flex flex-row gap-2 items-center ">
                                        <LuReply className="text-xl" /> 32
                                    </button>
                                </div>


                            </div>
                        ))}
                    </div>
                    <div className="md:col-span-4">


                        <div className="flex flex-row flex-wrap items-center justify-between gap-2 mx-4 md:mx-5 my-2 border-b pb-3 border-[#EBE9E0]">
                            <p className="text-sm md:text-base font-playfair uppercase">Other Products by Seller Name</p>
                            <Link href={"/sellers"} className="uppercase text-[#463F3A] text-sm">View All</Link>
                        </div>
                        <div className=" w-full px-4">
                            <div className="flex flex-row flex-nowrap md:flex-nowrap overflow-x-auto px-4 md:px-6 lg:px-10 my-6">
                                {products.map((p, index) => {

                                    const isFavorited = isFavorite(p.id);
                                    return (
                                        <div
                                            key={p.id}
                                            className={`flex-shrink-0 w-full md:w-1/2 flex flex-col  border-r border-[#EBE9E0] last:border-r-0 relative px-6`}
                                            onClick={() => handleProductDetails(p.id)}>
                                            <div className=" flex items-center justify-center relative">
                                                <div className="absolute top-2 right-4 z-20">
                                                    <button
                                                        onClick={() => toggleFavorite(p.id)}
                                                        aria-label={`Add ${p.title} to favorites`}
                                                        className="text-xl font-semibold focus:outline-none"
                                                    >
                                                        {isFavorited ? (
                                                            <FaHeart className="text-red-500" /> // Filled heart for favorited
                                                        ) : (
                                                            <CiHeart className="text-gray-500" /> // Outline heart for non-favorited
                                                        )}
                                                    </button>
                                                </div>
                                                <Image
                                                    src="/images/products/p1.png"
                                                    alt={p.title}
                                                    width={150}
                                                    className="w-full h-full object-contain object-center transform hover:scale-105 transition duration-500 ease-in-out"
                                                    height={150}
                                                />
                                            </div>
                                            <div className="w-full mt-4">
                                                <div className="flex flex-row gap-4 justify-between">
                                                    <p className="text-[#919089] mb-1 text-sm">{p.brand}</p>
                                                    <Link href={"#"} className="text-[#919089] text-sm">FOLLOW</Link>
                                                </div>
                                                <h2 className="text-sm md:text-base">{p.title}</h2>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                </div>



                {/* recommeded product add below */}

                <div className="px-4 md:px-6 lg:px-10">
                    <div className="flex flex-row flex-wrap items-center justify-between gap-6 mt-8 pb-3">
                        <h2 className="text-sm md:text-base font-playfair uppercase">Recommedned Product for you</h2>
                        <Link href={"/products"} className="text-sm ">
                            VIEW ALL
                        </Link>
                    </div>


                    <div className="border-y border-[#EBE9E0] w-full py-6">
                    <div className="flex flex-row flex-nowrap md:flex-nowrap overflow-x-auto  my-6">
                                {products.map((p, index) => {

                                    const isFavorited = isFavorite(p.id);
                                    return (
                                        <div
                                            key={p.id}
                                            className={`flex-shrink-0 w-full md:w-1/4 flex flex-col  border-r border-[#EBE9E0] last:border-r-0 relative px-6`}
                                            onClick={() => handleProductDetails(p.id)}>
                                            <div className=" flex items-center justify-center relative">
                                                <div className="absolute top-2 right-4 z-20">
                                                    <button
                                                        onClick={() => toggleFavorite(p.id)}
                                                        aria-label={`Add ${p.title} to favorites`}
                                                        className="text-xl font-semibold focus:outline-none"
                                                    >
                                                        {isFavorited ? (
                                                            <FaHeart className="text-red-500" /> // Filled heart for favorited
                                                        ) : (
                                                            <CiHeart className="text-gray-500" /> // Outline heart for non-favorited
                                                        )}
                                                    </button>
                                                </div>
                                                <Image
                                                    src="/images/products/p1.png"
                                                    alt={p.title}
                                                    width={150}
                                                    className="w-full h-full object-contain object-center transform hover:scale-105 transition duration-500 ease-in-out"
                                                    height={150}
                                                />
                                            </div>
                                            <div className="w-full mt-4">
                                                <div className="flex flex-row gap-4 justify-between">
                                                    <p className="text-[#919089] mb-1 text-sm">{p.brand}</p>
                                                    <Link href={"#"} className="text-[#919089] text-sm">FOLLOW</Link>
                                                </div>
                                                <h2 className="text-sm md:text-base">{p.title}</h2>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                    </div>


                </div>



            </div>
        </>
    );
};

export default ProductDetails;
