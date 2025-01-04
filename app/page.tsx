'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Product } from '@/lib/data';
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Login from "@/components/shared/Login";

const intrests = [
  {
    name: "jwellery",
    image: "/images/jewellery.svg",
  },
  {
    name: "art",
    image: "/images/art.svg",
  },
  {
    name: "collectibles",
    image: "/images/collectibles.svg",
  },
  {
    name: "furniture",
    image: "/images/furniture.svg",
  },
  {
    name: "clothing",
    image: "/images/clothing.svg",
  },
  {
    name: "lighting",
    image: "/images/lighting.svg",
  },
  {
    name: "music",
    image: "/images/music.svg",
  },
  {
    name: "tableware",
    image: "/images/tableware.svg",
  },
  {
    name: "curiosities",
    image: "/images/curiosities.svg",
  },
  {
    name: "gemstones",
    image: "/images/gemstones.svg",
  },
  {
    name: "artefacts",
    image: "/images/artefacts.svg",
  },
];










const slides = [
  {
    productsCount: "23",
    products: Array.from({ length: 6 }).map((_, index) => ({
      id: index,
      image: "/images/products/1.png",
    })),
    title: "Antique Flower Jewelry",
    description: `Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.`,
  },

  {
    productsCount: "45",
    products: Array.from({ length: 6 }).map((_, index) => ({
      id: index,
      image: "/images/products/1.png",
    })),
    title: "Antique Animal Jewelry",
    description: `Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.`,
  },


  {
    productsCount: "262",
    products: Array.from({ length: 6 }).map((_, index) => ({
      id: index,
      image: "/images/products/1.png",
    })),
    title: "Antique Bird Jewelry",
    description: `Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.`,
  },


  {
    productsCount: "23",
    products: Array.from({ length: 6 }).map((_, index) => ({
      id: index,
      image: "/images/products/1.png",
    })),
    title: "Antique Animal Jewelry",
    description: `Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.`,
  },


];







const page = () => {
  const [showLatestAll, setShowLastestAll] = useState(false);
  const [savedProducts, setSavedProducts] = useState([]);
  const [showblogs, setShowBlogs] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin=()=>{
    setIsLogin(!isLogin);
  }



const router = useRouter();


const handleLiveShows=()=>{
    router.push('/presentation')
}





  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Handle dot navigation click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };


  useEffect(()=>{

    const fetchBlog=async()=>{
      try{
        const response = await fetch('https://dummyjson.com/posts');

        const data = await response.json();
        setShowBlogs(data.posts);

        // console.log(data);
      }catch(error){
          console.log(`Error on fetching blogs`)
      }
    }

    fetchBlog();
  },[]);
  const blogDetails= showblogs.slice(0,3);



  useEffect(()=> {
    const fetchProducts= async()=>{
      try{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        
        setShowProducts(data.products);
        

      }catch(error){
        console.log(`error on fetching prodcuts `);
      }
    }

    fetchProducts();
  },[]);

  const displayedProducts= showProducts.slice(0, 8);

  console.log('products', displayedProducts);
  

 





  const handleReadMore=(id:any)=>{
    router.push(`/blog/${id}`);
  }

  return (
    <>
    <main>
      <section className="w-full h-[600px]  lg:h-screen flex items-center justify-center flex-col  relative">

        <div className="w-[160px] h-[150px] md:max-w-[210px] md:max-h-[200px] absolute top-0">
          <Image
            src="/images/hero1.svg"
            alt="hero"
            width={0}
            height={0}
            layout="responsive"
            className=" "
          />
        </div>
        <div className="absolute top-32 md:top-20 w-[100px] h-[100px] md:w-[120px] md:h-[120px] md:max-w-[150px] md:max-h-[150px] left-0 md:left-12 ">
          <Image
            src="/images/hero2.svg"
            alt="hero"
            width={0}
            height={0}
            layout="responsive"
            className=" "
          />
        </div>
        <div className=" absolute w-[110px] h-[110px] top-24 md:max-w-[150px] md:max-h-[150px] right-0 md:right-10 ">

          <Image
            src="/images/hero3.svg"
            alt="hero"
            width={0}
            height={0}
            layout="responsive"
            className=" "
          />


        </div>


        <div className=" absolute bottom-0 md:bottom-6  left-6 md:left-0 w-[170px] h-[180px] md:max-h-[220px] md:max-w-[260px]">

          <Image
            src="/images/hero4.svg"
            alt="hero"
            width={0}
            height={0}
            layout="responsive"
            className=" "
          />
        </div>

        <div className=" absolute bottom-20 right-0 w-[120px] h-[120px] md:max-w-[150px] md:max-h-[150px]">
          <Image
            src="/images/hero6.svg"
            alt="hero"
            width={0}
            height={0}
            layout="responsive"
            className=" "
          />

        </div>


        <div className=" absolute sm:block hidden  bottom-0 right-72 2xl:right-80 max-h-[200px] max-w-[200px]">
          <Image
            src="/images/hero5.svg"
            alt="hero"
            width={0}
            height={0}
            layout="responsive"
            className=" "
          />


        </div>

        <h2 className="text-3xl md:text-5xl text-center font-playfair ">
          Welcome to <br />{" "}
          <span className=" italic">The Antique Collector</span>
        </h2>
        <p className="text-center max-w-lg text-sm 2xl:text-base my-5">
          A new and exciting global platform where potential buyers can interact
          with the world's premiere antique and jewelry dealers, and peruse and
          buy their latest stock.
        </p>
        <button className=" py-3 mb-8 2xl:py-4 px-16 2xl:px-20 bg-black text-xs 2xl:text-sm text-white ">
          Start browsing
        </button>
      </section>



      <section className=" bg-[#F9F8F3]">
        <div className=" py-7 2xl:py-9 border-b border-[#EBE9E0] px-4 md:px-6 lg:px-8 flex items-center font-playfair justify-between">
          <h2 className="text-lg 2xl:text-2xl  ">SELLERS</h2>
          <Link href={"/sellers"} className="text-sm font-sans">
            VIEW ALL
          </Link>
        </div>






        <div className=" w-full flex flex-col-reverse md:flex-row flex-wrap">
          <div className=" w-full md:w-[50%] px-6 md:px-16  pt-6 md:pt-10 border-r border-[#EBE9E0]">




            <div className=" bg-[#EBE9E0] p-6 relative w-full overflow-hidden"
            >

              <div
                className="transition-transform duration-700 ease-in-out flex flex-row gap-6"
                style={{ transform: `translateX(-${currentIndex * (100 / slides.length)}%)`, width: `${slides.length * 100}%` }}
              >
                {slides.map((slide, index) => (


                  <div key={index} className="w-full flex-shrink-0"
                    style={{ width: `${100 / slides.length}%` }}>

                    <div className=" w-full items-center justify-between flex">
                      <h2>{slide.productsCount} Products</h2>
                      <Link href={"#"}>SHOP ALL</Link>
                    </div>
                    <div className=" w-full grid grid-cols-3 my-4 gap-2">
                      {slide.products.map((product) => (
                        <div key={product.id}>
                          <Image
                            src={product.image}
                            alt="product"
                            width={100}
                            className=" w-full h-full"
                            height={100}
                          />
                        </div>
                      ))}
                    </div>
                    <div className=" w-full items-center mb-4  justify-between flex">
                      <h2 className=" text-lg md:text-2xl lg:text-3xl font-playfair">
                        {slide.title}
                      </h2>
                      <Link href={"#"} className="text-sm">
                        FOLLOW
                      </Link>
                    </div>
                    <p className="text-sm">
                      {slide.description}
                    </p>
                  </div>


                ))}
              </div>
              
            </div>

            <div className="flex flex-row justify-center mt-4">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleDotClick(index)}
                      className={`w-5 rounded-sm h-1 mx-2 cursor-pointer ${currentIndex === index ? "bg-[#919089]" : "bg-[#EBE9E0]"
                      }`}
                  ></div>


                ))}
              </div>


          </div>
          <div className=" w-full md:w-[50%] flex flex-col pt-8 items-center">
            <h2 className="text-2xl md:text-4xl lg:text-6xl   text-center font-playfair ">
              Featured Sellers
            </h2>
            <p className="text-center max-w-xl px-6 text-sm 2xl:text-base my-6">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper habitasse eget
              elit sit magna et diam faucibus elit. Scelerisque nec in semper ac
              pellentesque arcu iaculis mauris sed. Nunc arcu scelerisque tellus
              erat purus. Dui scelerisque semper aliquam risus lacinia sit amet
              a.
            </p>
            <button className=" py-3 2xl:py-4 px-16  bg-black text-xs 2xl:text-sm text-white ">
              BECOME A SELLER
            </button>
            <Table className=" w-full mt-12">
              <TableBody>
                <TableRow className=" bg-[#EBE9E0]">
                  <TableCell className=" text-center font-playfair text-lg  border-y border-[#EBE9E0]">
                    <div className="flex justify-center flex-row items-center gap-3">
                      <div className="bg-[#919089] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                        <Image src="/" width={10} height={10} className="rounded-full" alt="" />
                      </div>
                      <p>Antique Animal Jewelry</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-lg border-y border-[#EBE9E0] text-[#0D0106]">
                    Follow
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className=" text-center font-playfair text-lg  border-y border-[#EBE9E0]">
                    <div className="flex justify-center flex-row items-center gap-3">
                      <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                        <Image src="/" width={10} height={10} className="rounded-full" alt="" />
                      </div>
                      <p>Patrick Boyd Carpenter</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-lg border-y border-[#EBE9E0] text-[#0D0106]">
                    Follow
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className=" text-center font-playfair text-lg  border-y border-[#EBE9E0]">
                    <div className="flex justify-center flex-row items-center gap-3">
                      <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                        <Image src="/" width={10} height={10} className="rounded-full" alt="" />
                      </div>
                      <p>Inezstodel Cloth House</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-lg  border-y border-[#EBE9E0] text-[#0D0106]">
                    Follow
                  </TableCell>
                </TableRow>
                <TableRow className=" ">
                  <TableCell className=" text-center font-playfair text-lg  border-y border-[#EBE9E0]">
                    <div className="flex justify-center flex-row items-center gap-3">
                      <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                        <Image src="/" width={10} height={10} className="rounded-full" alt="" />
                      </div>
                      <p>Inezstodel Cloth House</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-lg  border-y border-[#EBE9E0] text-[#0D0106]">
                    Follow
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>





      <section className="pb-12">
        <div className="py-7 px-4 md:6 2xl:py-9 border-b border-[#EBE9E0] lg:px-10  flex items-center font-playfair justify-between">
          <h2 className="text-lg 2xl:text-2xl">LATEST PRODUCTS</h2>
          <Link className="text-sm font-sans" href={"/products"}>VIEW ALL</Link>
         
        </div>
        <div className="flex flex-row flex-nowrap overflow-x-auto  md:grid md:grid-cols-4 gap-4 py-4 px-4 md:px-6 lg:px-10">
          {displayedProducts.map((p) => (
            <div key={p.id} className="w-full flex flex-col gap-4 mb-2">
              <div className="bg-red-50 flex items-center justify-center relative">
                <div className="absolute top-2 right-4">
                  <CiHeart className="text-xl font-semibold" />
                </div>
                <Image
                  src='/images/products/p2.png'
                  alt={p.title}
                  width={150}
                  className="w-full h-full object-contain object-center"
                  height={150}
                />
              </div>
              <div className="w-full">
                <div className="flex flex-row gap-4 justify-between">
                  <p className="text-[#919089] mb-1 text-sm">{p.brand}</p>
                  <p className="text-[#919089] text-sm">FOLLOW</p>
                </div>
                <h2 className="text-sm md:text-base">{p.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="  relative h-[80svh] md:h-[130svh] w-full flex-col flex items-center justify-center"
        style={{
          backgroundImage: "url(/images/bg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image
          src="/images/post1.svg"
          alt="hero"
          width={280}
          height={280}
          className=" absolute top-12 2xl:top-16 left-16 md:block hidden"
        />
        <Image
          src="/images/post2.svg"
          alt="hero"
          width={280}
          height={280}
          className=" absolute bottom-12  right-16 md:block hidden "
        />
        <h2 className=" text-3xl lg:text-5xl text-white mt-6  text-center font-playfair ">
          Live Presentations
        </h2>
        <p className="text-center px-6 max-w-xl 2xl:max-w-3xl text-white text-sm 2xl:text-base my-6">
          Lorem ipsum dolor sit amet consectetur. Sed amet bibendum at venenatis
          faucibus mi fringilla viverra. In nulla aliquam magna orci neque
          penatibus neque eget. Commodo scelerisque cursus purus id fermentum
          lorem nisi sit malesuada.
        </p>
        <button onClick={handleLiveShows} className=" py-3 uppercase 2xl:py-4 px-16  bg-white text-xs 2xl:text-sm text-black ">
          see upcoming live shows
        </button>
        
      </section>



      <section className="bg-white">
        <div className=" py-7 2xl:py-9 border-b border-[#EBE9E0] px-4 md:m-6 2xl:px-10 flex items-center font-playfair justify-between">
          <h2 className="text-lg 2xl:text-2xl  ">CATEGORIES</h2>
          <Link href={"#"} className="text-sm font-sans">
            VIEW ALL
          </Link>
        </div>
      </section>



      <section className=" bg-[#F9F8F3] p-8 md:p-10 lg:px-10 lg:py-16">
        <h1 className="text-3xl lg:text-5xl font-playfair mb-16">
          Find your interest
        </h1>
        <div className="flex flex-row flex-wrap gap-8">
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
      </section>

      <section className="bg-white">
        <div className=" py-7 2xl:py-9 border-b border-[#EBE9E0] px-4 md:px-6 lg:px-10 flex items-center font-playfair justify-between">
          <h2 className="text-lg 2xl:text-2xl  ">PERIODS</h2>
          <Link href={"#"} className="text-sm font-sans">
            VIEW ALL
          </Link>
        </div>
      </section>




      <section className="bg-[#FFFFFF] px-4 md:px-6 lg:px-10 py-10 md:py-20 border-b border-[#EBE9E0]">
        <div className="grid md:grid-cols-4">
          <div className="md:col-span-3">

            <div className="text-3xl md:text-5xl  font-playfair ">
              <h1 className="italic">Victorian Elegance:</h1>
              <h1 className="mt-2">A Journey Through 19th Century Artistry</h1>
            </div>


            <p className="py-10 text-[14px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta exercitationem harum magnam eaque cupiditate natus. Maxime possimus perspiciatis id sed illum reprehenderit natus alias consequuntur ea facilis. Expedita, dignissimos deserunt?</p>

            <Link href={"#"} className="text-sm uppercase">See Collection</Link>
          </div>

          <div className="md:col-span-1  relative py-3 mt-8 md:mt-0 md:mx-8 bg-[#EBE9E0] px-3">

            <div className="absolute top-4 right-5 ">
              <CiHeart />
            </div>
            <Image src="/images/products/1.png" width={140} height={100} alt="img" layout="responsive" />

            <div className="text-sm text-[#919089] flex flex-row gap-2 justify-between flex-nowrap mt-3">
              <h1>Seller Name</h1>
              <h1>Follow</h1>
            </div>

            <p className="text-[#0D0106] text-sm mt-2">NATIVE IRON CHAIR</p>

          </div>

        </div>


      </section>


      <section className="bg-white">
        <div className=" py-7 2xl:py-9 border-b border-[#EBE9E0] px-4 md:px-6 lg:px-10 flex items-center font-playfair justify-between">
          <h2 className="text-lg 2xl:text-2xl  ">Blog</h2>
          <Link href={"/blog"} className="text-sm font-sans">
            VIEW ALL
          </Link>
        </div>
      </section>




      {/* blogs card details add here */}
      <section className="px-4 md:px-6 lg:px-10 ">
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 w-full ">
          {blogDetails.map((b) => (
            <div key={b.id} className="w-full py-3 md:py-5 pr-4  border-b last:border-b-0 md:border-r border-[#EBE9E0] last:border-r-0">
              <Image
                src="/images/blogs/b1.png" //replacce with original image
                className="w-full h-auto"
                height={150}
                width={120}
                alt={b.title}
              />
              <h1 className="text-xl font-playfair py-3">{b.title}</h1>
              <p className="text-sm text-[#463F3A] ">{b.body}</p>


              <button onClick={()=> handleReadMore(b.id)} className=" pt-4 pb-6 text-sm text-[#0D0106]">
                READ MORE
              </button>
            </div>
          ))}
        </div>

      </section>



      {/* how to work section */}

      <section className="bg-[#F9F8F3] pt-10 pb-12 md:pb-28 px-6 md:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-playfair">How it works</h1>
          <p className="uppercase py-4 text-xs text-center">we are specialized in adornments, that bring charm to any environment.</p>
          <p className="md:w-[400px] text-justify ">Lorem ipsum dolor sit amet consectetur. In laoreet viverra sed auctor amet nec senectus porta. Ac commodo cum ut quam vitae sollicitudin aenean. Sit volutpat nunc et aenean. Sed condimentum felis at rhoncus. Gravida placerat senectus tortor id vitae nullam orci mollis. Consequat commodo tellus varius purus quam nulla. Enim tellus ac convallis enim convallis sed. Augue amet morbi penatibus.</p>

          <Button onClick={handleLogin} label="Create a Free Account" className="uppercase my-8 " />
        </div>



        <div className="bg-[#463F3A] py-10  text-white">
          <div className="flex flex-col items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-light font-playfair italic">Stay in the Loop:</h1>
            <h1 className="text-2xl text-center font-light md:text-3xl font-playfair mt-3">
              Discover Exclusive Antiques & Insights</h1>


            <div className="my-8 flex flex-row gap-2 sm:gap-2">
              <InputField
                className="flex-1 placeholder:text-xs md:placeholder:text-sm text-xs md:text-sm py-2 px-3"
                placeholder="Enter Email Address"
              />
              <Button
                label="Subscribe"
                className="w-full sm:w-auto py-2.5 px-4 uppercase text-xs md:text-sm"
              />
            </div>




          </div>


          <div className="flex  flex-row   justify-between items-center gap-2 ">
            {intrests.map((intrest, index) => (
              <div key={index} className="">
                <div className="mb-3">
                  <Image
                    src={intrest.image}
                    alt="interest"
                    width={80}
                    height={80}
                    className=" "
                  />
                </div>

              </div>
            ))}
          </div>


        </div>

      </section>





    </main>
            {isLogin && (
              <Login onClose={()=> setIsLogin(false)} />
            )}
    </>
  );
};

export default page;
