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
import { useRouter } from "next/navigation";


const checkboxlablel = ["Roman - 753 BC - 476 AD", "Elizabethan - 1558 - 1603", "Renaissance - early 1425 - 1490", "Baroque - 1600 - 1750", "William and Mary - 1689 - 1702", "Georgian - 1714 - 1837", "Queen Anne - 1702 - 1714"];

const checkboxlablel1 = ["Excellent Condition", "Very Good Condition", "Good Condition", " Fair Condition"];




const sortData = ['Latest', 'A to Z', 'Low to Higher Price', 'Higher to Low Price', 'Highest Sale Products']
const Product = () => {
  const [isGridView, setIsGridView] = useState(true); // State for grid layout
  const [isHorizontalView, setIsHorizontalView] = useState(false); // State for horizontal layout
  const [filterOpen, setFilterOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null); // Tracks which dropdown is open
const router = useRouter();

  const [products, setProducts] = useState([]); // Full product list
  const [displayedProducts, setDisplayedProducts] = useState([]); // Currently visible products
  const [gridProductCount, setGridProductCount] = useState(20); // Number of products to show in grid layout
  const [horizontalProductCount, setHorizontalProductCount] = useState(10); // Number of products to show in horizontal layout



  console.log(categoriesData);


  const handleGridView = () => {
    setIsGridView(true);
    setIsHorizontalView(false);
    setDisplayedProducts(products.slice(0, gridProductCount));
    
  };

  const handleHorizontalView = () => {
    setIsGridView(false);
    setIsHorizontalView(true);
    setDisplayedProducts(products.slice(0, horizontalProductCount));
  };


  const handleSelect = (item: string) => {
    console.log('Selected:', item);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index); // Toggle the open dropdown
  };




  const handleViewMore = () => {
    if (isGridView) {
      const newCount = gridProductCount + 20;
      setGridProductCount(newCount);
      setDisplayedProducts(products.slice(0, newCount));
    } else if (isHorizontalView) {
      const newCount = horizontalProductCount + 10;
      setHorizontalProductCount(newCount);
      setDisplayedProducts(products.slice(0, newCount));
    }
  };



  const handleProductDetails=(id: any)=>{
    router.push(`/products/${id}`);
  }





  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
        setDisplayedProducts(data.products.slice(0, 20)); // Default to grid layout
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <div className="py-4 px-4 md:px-6 lg:px-10" >
          <h1 className="text-xs">Home / Products / New Arrivals</h1>
          <h1 className="font-playfair pt-4 uppercase text-xl ">Latest Products</h1>
        </div>

        {/* Filter and Sort Section */}
        <section className="bg-[#F9F8F3] py-4 px-4 md:px-6 lg:px-10">
          <div className="flex flex-wrap flex-row gap-5 justify-between items-center">
            {/* Filter button */}
            <div
              onClick={() => setFilterOpen(!filterOpen)}
              className="inline-flex cursor-pointer flex-row items-center gap-2 py-3 px-8 bg-[#EBE9E0]"
            >
              <BiCandles className="text-lg text-[#0D0106]" />
              <p className="text-xs text-[#0D0106] ">FILTER</p>
            </div>
            <p className="uppercase text-xs md:hidden">Showing {products.length} Results</p>

            <div className="flex flex-row justify-between gap-8 items-center">
              <div className="lg:flex flex-row items-center gap-4 md:block hidden">
                <p className="uppercase text-xs">Showing 320 Results</p>

                <div className="flex flex-row gap-2 items-center ">
                  {/* Grid view button */}
                  <HiViewGrid
                    className={`text-lg cursor-pointer ${isGridView ? "text-black opacity-100" : "text-gray-400 opacity-50"
                      }`}
                    onClick={handleGridView}
                  />
                  {/* Horizontal layout button */}
                  <TbLayoutDistributeHorizontal
                    className={`text-lg cursor-pointer ${isHorizontalView ? "text-black opacity-100" : "text-gray-400 opacity-50"
                      }`}
                    onClick={handleHorizontalView}
                  />
                </div>
              </div>

              <div className="flex flex-row items-center gap-5">
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


        <div className="px-6 grid md:grid-cols-4">
          {/* Filter Sidebar */}
          <div className="md:col-span-1 py-6 md:block hidden">
            <FilterComponent
              checkboxlablel={checkboxlablel}
              checkboxlablel1={checkboxlablel1}
              filtersToShow={["category", "eraPeriod", "condition", "sellerLocation", "color", "availability"]}
            />
          </div>

          {/* Conditional rendering for Grid and Horizontal layouts */}
          <div className="col-span-3 py-6">
            {isGridView && (
              <div className="grid grid-cols-1 px-6 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 gap-y-12 ">
                {displayedProducts.map((p) => (
                  <div key={p.id} className="flex flex-col gap-4 cursor-pointer transform  hover:scale-105 transition duration-500 ease-in-out" onClick={handleProductDetails(p.id)}>
                    <div className="bg-red-50 flex items-center justify-center relative">
                      <div className="absolute top-2 right-4">
                        <CiHeart className="text-xl font-semibold" />
                      </div>
                      <Image
                        src='/images/products/p2.png'
                        alt={p.title}
                        width={150}
                        height={150}
                        className="w-full h-full object-contain object-center"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-between">
                      <div className="text-sm flex flex-row justify-between gap-4">
                        <p className="text-[#919089] mb-1">{p.brand}</p>
                        <p className="text-[#aa994c]">FOLLOW</p>
                      </div>
                      <h2 className="text-xs md:text-sm">{p.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
            )}



            {isHorizontalView && (
              <div className="py-6 text-[#0D0106] px-4">
                {displayedProducts.map((item) => (
                  <div className="mb-10" key={item.id}>
                    <div className="flex  hover:scale-105 transition duration-500 ease-in-out flex-row items-center justify-between border-b pb-2 border-[#EBE9E0]">
                      <div className="flex flex-row items-center text-sm gap-3">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                          <Image src='/' width={10} height={10} className="rounded-full" alt="" />
                        </div>
                        <h1>{item.brand}</h1>
                      </div>
                      <h1 className="text-[#0D0106]">FOLLOW</h1>
                    </div>

                    <div className="flex flex-col">
                      <div className="mx-auto w-96 p-4">
                        <Image src={"/images/products/1.png"} alt="product" width={0} height={0} layout="responsive" />
                      </div>

                      <div className="flex flex-row items-center gap-6 mt-2">
                        <button className="flex flex-row gap-2 items-center">
                          <CiHeart className="text-xl" /> {item.like || '23'}
                        </button>
                        <button className="flex flex-row gap-2 items-center">
                          <FaRegCommentDots className="text-xl" /> {item.comment || '23'}
                        </button>
                      </div>

                      <p className="py-2 font-semibold uppercase">{item.title}</p>
                      <p className="text-sm">{item.description}</p>

                      <button onClick={handleProductDetails(item.id)} className="uppercase text-sm py-3">
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
        <div className="bg-[#463F3A] px-8 py-10 md:block hidden">
          <div className="grid grid-cols-3">
            <div className="col-span-2 text-white py-20">
              <h1 className="font-playfair text-base sm:text-xl md:text-3xl lg:text-5xl">Live Presentations</h1>
              <p className="text-sm py-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam esse eos doloremque a natus! Quibusdam eum perferendis perspiciatis deleniti, maiores voluptate odit quis est soluta adipisci, magni debitis? Unde, natus?</p>

              <Button label="See Upcoming live shows" className="uppercase bg-white text-[#2D2D2D]" />
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

                <h3 className="text-[#463F3A] font-playfair text-lg">Antique Showcase Live: Unveiling Rare jewelry Finds in Real Time</h3>
                <p className="text-[#8B8683] py-2 text-sm">Patrick Boyd Carpenter</p>


                <div className="mt-5">
                  <Button label="Set a reminder" className="uppercase w-full" />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* below products */}
        <div className={`px-6 md:block hidden lg:grid grid-cols-4`}>
          <div className="col-span-1 py-6">

          </div>

          <div className={`col-span-3 py-6`}>
            {isGridView && (
              <div className="grid grid-cols-1  hover:scale-105 transition duration-500 ease-in-out px-6 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 gap-y-12">
                {displayedProducts.map((p) => (
                  <div key={p.id} className="flex flex-col gap-4" onClick={handleProductDetails(p.id)}>
                    <div className="bg-red-50 flex items-center justify-center relative">
                      <div className="absolute top-2 right-4">
                        <CiHeart className="text-xl font-semibold" />
                      </div>
                      <Image
                        src="/images/products/1.png"
                        alt={p.title}
                        width={150}
                        height={150}
                        className="w-full h-full object-contain object-center"
                      />
                    </div>
                    <div className="w-full flex flex-col justify-between">
                      <div className="text-sm flex flex-row justify-between gap-4">
                        <p className="text-[#919089] mb-1">{p.brand}</p>
                        <p className="text-[#aa994c]">FOLLOW</p>
                      </div>
                      <h2 className="text-xs md:text-sm">{p.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
            )}




            {isHorizontalView && (
              <div className="py-6 text-[#0D0106] px-4">
                {displayedProducts.map((item) => (
                  <div className="mb-10" key={item.id}>
                    <div className="flex flex-row  hover:scale-105 transition duration-500 ease-in-out items-center justify-between border-b pb-2 border-[#EBE9E0]">
                      <div className="flex flex-row items-center text-sm gap-3">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                          <Image src='/' width={10} height={10} className="rounded-full" alt="" />
                        </div>
                        <h1>{item.brand}</h1>
                      </div>
                      <h1 className="text-[#0D0106]">FOLLOW</h1>
                    </div>

                    <div className="flex flex-col">
                      <div className="mx-auto w-96 p-4">
                        <Image src={item.src || "/images/products/1.png"} alt="product" width={0} height={0} layout="responsive" />
                      </div>

                      <div className="flex flex-row items-center gap-6 mt-2">
                        <button className="flex flex-row gap-2 items-center">
                          <CiHeart className="text-xl" /> {item.like || '23'}
                        </button>
                        <button className="flex flex-row gap-2 items-center">
                          <FaRegCommentDots className="text-xl" /> {item.comment || '23'}
                        </button>
                      </div>

                      <p className="py-2 font-semibold uppercase">{item.title}</p>
                      <p className="text-sm">{item.description}</p>

                      <button onClick={handleProductDetails(item.id)} className="uppercase text-sm py-3">
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
            <Button onClick={handleViewMore} label="View More" className="uppercase border border-[#0D0106] py-2 px-8  bg-white text-[#0D0106] " />
          </div>
        </div>

      </div>

    </>
  )
}

export default Product;