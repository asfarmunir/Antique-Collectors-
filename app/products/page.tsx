'use client';
import React, { useState, useEffect } from "react";
import { BiCandles } from "react-icons/bi";
import { HiViewGrid } from "react-icons/hi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import Image from "next/image";
import Dropdown from "@/components/ui/DropDown";
import Checkbox1 from "@/components/ui/tickbox";
import { TiMinus, TiPlus } from "react-icons/ti";
import FilterComponent from "@/components/shared/SidebarFilter";
import Button from "@/components/ui/Button";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import Link from "next/link";
import { categoriesData } from '@/lib/data';
import { useParams, useRouter } from "next/navigation";
import useProducts from "@/hooks/useProducts";
import { checkboxLabels, conditionLabels, sortOptions } from "@/lib/constants";
import { FaHeart } from "react-icons/fa";

const Product = () => {
  const { products, toggleFavorite, isFavorite } = useProducts();
  const [isGridView, setIsGridView] = useState(true); // State for grid layout
  const [filterOpen, setFilterOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null); // Tracks which dropdown is open
  const router = useRouter();
  const [isViewMore, setIsViewMore] = useState(true);
  const [gridProductCount, setGridProductCount] = useState(20); // Number of products to show in grid layout
  const [horizontalProductCount, setHorizontalProductCount] = useState(10);




  // Open filter sidebar by default on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setFilterOpen(true);
      } else {
        setFilterOpen(false);
      }
    };

    handleResize(); // Set initial state based on screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const handleGridView = () => {
    setIsGridView(true);

  };

  const handleHorizontalView = () => {
    setIsGridView(false);

  };


  const handleSelect = (item: string) => {
    console.log('Selected:', item);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index); // Toggle the open dropdown
  };




  const handleViewToggle = () => {
    if (isViewMore) {
      setGridProductCount(products.length);
      setHorizontalProductCount(products.length);
    } else {
      setGridProductCount(20);
      setHorizontalProductCount(10);
    }


    setIsViewMore(!isViewMore);
  };



  const handleProductDetails = (id: any) => {
    router.push(`/products/${id}`);
  }


  return (
    <>
      <div>
        <div className="py-4 px-4 md:px-6 lg:px-12" >
          <h1 className="text-xs">Home / Products / New Arrivals</h1>
          <h1 className="font-playfair pt-4 uppercase text-xl ">Latest Products</h1>
        </div>

        {/* Filter and Sort Section */}
        <section className="bg-[#F9F8F3] py-4 px-4 md:px-6 lg:px-12">
          <div className=" flex flex-wrap flex-row gap-5 justify-between items-center">
            {/* Filter button */}
            <div
              onClick={() => setFilterOpen(!filterOpen)}
              className=" inline-flex cursor-pointer flex-row items-center gap-2 py-3 px-8 bg-[#EBE9E0]"
            >
              <BiCandles className="text-lg text-[#0D0106]" />
              <p className="text-xs text-[#0D0106] ">FILTER</p>
            </div>
            <p className="uppercase text-xs md:hidden">Showing {products.length} Results</p>

            <div className="w-full md:w-auto flex flex-row justify-between gap-4 items-center">
              <div className="lg:flex flex-row items-center gap-4 md:block hidden">
                <p className="uppercase text-nowrap text-xs">Showing {products.length} Results</p>

                <div className="flex flex-row gap-2 items-center ">
                  <HiViewGrid
                    className={`text-lg cursor-pointer ${isGridView ? "text-black" : "text-gray-400"
                      }`}
                    onClick={handleGridView}
                  />
                  <TbLayoutDistributeHorizontal
                    className={`text-lg cursor-pointer ${!isGridView ? "text-black" : "text-gray-400"
                      }`}
                    onClick={handleHorizontalView}
                  />
                </div>
              </div>

              <div className="w-full flex flex-row items-center gap-5">
                <p className="uppercase text-xs text-nowrap">Sort by</p>
                <div className="w-full md:w-full">



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
          </div>
        </section>
        {/* Main content start from here */}


        {/* Filter Panel for Small Screens */}
        {filterOpen && (
          <div className="bg-white p-4 md:hidden">
            <FilterComponent

              checkboxlablel={["Roman - 753 BC - 476 AD", "Elizabethan - 1558 - 1603"]}
              checkboxlablel1={["Excellent Condition", "Very Good Condition"]}
              filtersToShow={['category', 'eraPeriod', 'condition', 'sellerLocation']}
            />
            <Button label="Apply Filters" onClick={() => setFilterOpen(false)} className="mt-4 w-full" />
          </div>
        )}


        <div className={`px-4 md:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-${filterOpen ? 4 : 4}`}>
          {/* Filter Sidebar */}
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

          {/* Conditional rendering for Grid and Horizontal layouts */}
          <div className={`col-span-${filterOpen ? 3 : 4} py-8 md:py-2`}>
            {isGridView ? (

              <>
                <div className={` grid grid-cols-1 sm:grid-cols-4 gap-4  md:grid-cols-${filterOpen ? 3 : 4} lg:grid-cols-${filterOpen ? 3 : 4}`}>
                  {products.slice(0, gridProductCount).map((p, index) => {
                    const columns = 3; // Adjust based on your actual column count for grid view
                    const isLastRow = Math.floor(index / columns) === Math.floor((products.length - 1) / columns);
                    const isLastColumn = (index + 1) % columns === 0;
                    const isFavorited = isFavorite(p.id);

                    return (
                      <div
                        key={p.id}
                        className={`flex flex-col stroke-black md:py-6 px-6 cursor-pointer border-[#EBE9E0]
                          ${!isLastRow ? 'md:border-b' : ''} 
                          ${!isLastColumn ? 'md:border-r -mr-[3px]' : ''}`}
                        onClick={() => handleProductDetails(p.id)}
                      >
                        <div className="flex items-center justify-center relative group">
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
                            src="/images/products/p2.png"
                            alt={p.title}
                            width={150}
                            height={150}
                            className="w-full h-full object-contain object-center transform hover:scale-105 transition duration-500 ease-in-out"
                          />

                          {/* Likes and Comments Overlay on Hover */}
                          <div className="absolute inset-0 bg-white bg-opacity-80   flex flex-row gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-sm text-black flex items-center gap-4"><CiHeart className="text-lg" /> {p.likes || 34}</p>
                            <p className="text-sm text-black flex items-center gap-4"><FaRegCommentDots className="text-lg" /> {p.comments || 34}</p>
                          </div>
                        </div>
                        <div className="w-full pt-4 flex flex-col justify-between">
                          <div className="text-sm flex flex-row justify-between gap-4">
                            <p className="text-[#919089] mb-1">{p.brand}</p>
                            <p className="text-[#919089]">FOLLOW</p>
                          </div>
                          <h2 className="text-sm pt-2 md:text-[14px] uppercase">{p.title}</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>



              </>




            ) : (


              <div className="py-6 text-[#0D0106] px-4">
                {products.slice(0, gridProductCount).map((item) => (
                  <div className="mb-10" key={item.id}>
                    <div className="flex  flex-row items-center justify-between border-b pb-2 border-[#EBE9E0]">
                      <div className="flex flex-row items-center text-sm gap-3">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                          <Image src='/' width={10} height={10} className="rounded-full" alt="" />
                        </div>
                        <h1 className="font-playfair capitalize text-[20px]">{item.brand}</h1>
                      </div>
                      <h1 className="text-[#0D0106] text-sm">FOLLOW</h1>
                    </div>

                    <div className="flex flex-col">
                      <div className="mx-auto w-96 p-4">
                        <Image src={"/images/products/p1.png"} alt="product" width={0} height={0} layout="responsive" className="transform  hover:scale-105 transition duration-500 ease-in-out" />
                      </div>

                      <div className="flex flex-row items-center gap-6 mt-2">
                        <button className="flex flex-row gap-2 items-center">
                          <CiHeart className="text-xl" /> {item.likes || '23'}
                        </button>
                        <button className="flex flex-row gap-2 items-center">
                          <FaRegCommentDots className="text-xl" /> {item.comments || '23'}
                        </button>
                      </div>

                      <div>
                        <p className="py-2 uppercase">{item.title}</p>
                        <p className="text-sm text-[#463F3A]">{item.description}</p>
                      </div>

                      <button onClick={() => handleProductDetails(item.id)} className="uppercase text-sm text-start pt-5">
                        READ MORE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>


        </div>









        


        {/* Live Presentation section */}
        <div className="bg-[#463F3A] px-12 py-10 md:block hidden">
          <div className="grid grid-cols-3">
            <div className="col-span-2 text-white py-20">
              <h1 className="font-playfair text-base sm:text-xl md:text-3xl lg:text-5xl">Live Presentations</h1>
              <p className="text-sm py-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam esse eos doloremque a natus! Quibusdam eum perferendis perspiciatis deleniti, maiores voluptate odit quis est soluta adipisci, magni debitis? Unde, natus?</p>

              <Button label="See Upcoming live shows" className="uppercase text-sm px-6 py-4 hover:bg-[#2D2D2D] hover:text-white bg-white text-[#2D2D2D]" />
            </div>

            <div className="col-span-1">
              <div className="bg-[#FFFFFF] p-2">
                <div className="bg-black text-white py-2 px-1 text-xs flex flex-row justify-between gap-4">
                  <p>12.23.2025</p>
                  <p>5.00 pm (UTC)</p>
                </div>
                <div style={{ height: '200px', width: "full", position: 'relative' }}>
                  <Image
                    src="/images/blogs/b1.png"
                    alt="img"
                    layout="fill"
                    objectFit="cover"

                  />
                </div>

                <h3 className="text-[#463F3A] font-playfair text-[20px]">Antique Showcase Live: Unveiling Rare jewelry Finds in Real Time</h3>
                <p className="text-[#8B8683] py-2 text-sm">Patrick Boyd Carpenter</p>


                <div className="mt-5">
                  <Button label="Set a reminder" className="uppercase text-sm w-full hover:opacity-80" />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* below products */}
        <div className={`px-6 md:block hidden lg:grid grid-cols-4`}>
          <div className="col-span-1 py-6">

          </div>

          <div className={`col-span-${filterOpen ? 3 : 4}  py-2`}>
            {isGridView ? (
              <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${filterOpen ? 3 : 4} lg:grid-cols-${filterOpen ? 3 : 4}`}>
                {products.slice(0, gridProductCount).map((p, index) => {
                  const columns = 3; // Adjust based on your actual column count for grid view
                  const isLastRow = Math.floor(index / columns) === Math.floor((products.length - 1) / columns);
                  const isLastColumn = (index + 1) % columns === 0;
                  const isFavorited = isFavorite(p.id);

                  return (
                    <div
                      key={p.id}
                      className={`flex flex-col stroke-black md:py-6 px-6 cursor-pointer border-[#EBE9E0]
                ${!isLastRow ? 'border-b' : ''} 
                ${!isLastColumn ? 'border-r -mr-[3px]' : ''}`}
                      onClick={() => handleProductDetails(p.id)}
                    >
                      <div className=" flex items-center justify-center relative group">
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
                          height={150}
                          className="w-full h-full object-contain object-center transform  hover:scale-105 transition duration-500 ease-in-out"
                        />


                        {/* Likes and Comments Overlay on Hover */}
                        <div className="absolute inset-0 bg-white bg-opacity-80   flex flex-row gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-sm text-black flex items-center gap-4"><CiHeart className="text-lg" /> {p.likes || 34}</p>
                          <p className="text-sm text-black flex items-center gap-4"><FaRegCommentDots className="text-lg" /> {p.comments || 34}</p>
                        </div>
                      </div>
                      <div className="w-full pt-4 flex flex-col justify-between">
                        <div className="text-sm flex flex-row justify-between gap-4">
                          <p className="text-[#919089] mb-1">{p.brand}</p>
                          <p className="text-[#919089]">FOLLOW</p>
                        </div>
                        <h2 className="text-sm md:text-[14px] uppercase pt-2">{p.title}</h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (


              <div className="py-6 text-[#0D0106] px-4">
                {products.slice(gridProductCount).map((item) => (
                  <div className="mb-10" key={item.id}>
                    <div className="flex flex-row   items-center justify-between border-b pb-2 border-[#EBE9E0]">
                      <div className="flex flex-row items-center text-sm gap-3">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                          <Image src='/' width={10} height={10} className="rounded-full" alt="" />
                        </div>
                        <h1 className="text-[20px] capitalize font-playfair">{item.brand || 'Seller Name'}</h1>
                      </div>
                      <h1 className="text-[#0D0106] text-sm">FOLLOW</h1>
                    </div>

                    <div className="flex flex-col">
                      <div className="mx-auto w-96 p-4">
                        <Image src={item.image || "/images/products/p1.png"} alt="product" width={0} height={0} layout="responsive" className="transform  hover:scale-105 transition duration-500 ease-in-out" />
                      </div>

                      <div className="flex flex-row items-center gap-6 mt-2">
                        <button className="flex flex-row gap-2 items-center">
                          <CiHeart className="text-xl" /> {item.likes || '23'}
                        </button>
                        <button className="flex flex-row gap-2 items-center">
                          <FaRegCommentDots className="text-xl" /> {item.comments || '23'}
                        </button>
                      </div>

                      <p className="py-2 uppercase">{item.title}</p>
                      <p className="text-sm text-[#463F3A]">{item.description}</p>

                      <button onClick={() => handleProductDetails(item.id)} className="uppercase text-sm pt-5 text-start">
                        READ MORE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>


        </div>


        <div className="">
          <div className="flex flex-row justify-center items-center py-6">
            <Button onClick={handleViewToggle} label={isViewMore ? "View More" : "View Less"} className="uppercase border border-[#0D0106] hover:bg-[#0D0106] hover:text-white py-2 px-8 text-sm md:px-16  bg-white text-[#0D0106] " />
          </div>
        </div>

      </div>

    </>
  )
}

export default Product;