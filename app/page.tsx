'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { intrests } from "@/lib/data";
import { Product } from '@/lib/data';
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Login from "@/components/shared/Login";
import { slides } from "@/lib/data";
import { FaHeart } from "react-icons/fa";
import useProducts from "@/hooks/useProducts";
import usePosts from "@/hooks/usePosts";
import { FaRegCommentDots } from "react-icons/fa";




const page = () => {
  const [subEmail, setSubEmail] = useState();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const { products, isFavorite, toggleFavorite } = useProducts();
  const post = usePosts();
  const router = useRouter();

  const posts = post.slice(0, 3);
  const product = products.slice(0, 8);
  // console.log(product);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  }



  const handleLiveShows = () => {
    router.push('/presentation')
  }


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


  const handleProductDetails = (id: any) => {
    router.push(`/products/${id}`);
  }

  const handleReadMore = (id: any) => {
    router.push(`/blog/${id}`);
  }

  return (
    <>
      <main>
        <section className="w-full h-[600px]  lg:h-screen flex items-center justify-center flex-col  relative">

          <div className="w-[150px] h-[140px] md:min-w-[220px] md:min-h-[250px] absolute top-0 ,">
            <Image
              src="/images/hero1.svg"
              alt="hero"
              width={200}
              height={230}

              className=" "
            />
          </div>
          <div className="absolute top-32 md:top-20 w-[90px] h-[90px] md:w-[120px] md:h-[120px] md:min-w-[150px] md:min-h-[150px] left-0 md:left-8 ">
            <Image
              src="/images/hero2.svg"
              alt="hero"
              width={150}
              height={150}
              layout="responsive"
              className=" "
            />
          </div>
          <div className=" absolute w-[100px] h-[100px] top-24 md:min-w-[150px] md:min-h-[150px] right-0 md:right-10 ">

            <Image
              src="/images/hero3.svg"
              alt="hero"
              width={150}
              height={150}
              className=" "
            />


          </div>


          <div className=" absolute bottom-0 md:bottom-16   left-0 h-[160px] w-[170px] md:min-w-[270px] md:min-h-[250px]">

            <Image
              src="/images/hero4.svg"
              alt="hero"
              width={340}
              height={340}

              className=" "
            />
          </div>

          <div className=" absolute right-0 bottom-16 md:bottom-36 w-[120px] h-[120px] md:min-w-[150px] md:min-h-[150px]">
            <Image
              src="/images/hero6.svg"
              alt="hero"
              width={150}
              height={150}
              className=" "
            />

          </div>


          <div className=" absolute sm:block hidden  bottom-0 right-72 2xl:right-80 min-h-[200px] min-w-[200px]">
            <Image
              src="/images/hero5.svg"
              alt="hero"
              width={200}
              height={200}
              className=" "
            />


          </div>
          <div className="mt-6">

            <h2 className="text-3xl md:text-5xl leading-normal text-center font-playfair ">
              Welcome to <br />{" "}
              <span className=" italic">The Antique Collector</span>
            </h2>
            <p className="text-center max-w-lg text-sm 2xl:text-base my-5">
              A new and exciting global platform where potential buyers can interact
              with the world's premiere antique and jewelry dealers, and peruse and
              buy their latest stock.
            </p>
         
           <div className="   flex items-center justify-center text-xs">
           <button className=" py-3 mb-8 2xl:py-4 px-16 2xl:px-20 bg-black  2xl:text-sm text-white ">
              Start browsing
            </button>

           </div>
          </div>
        </section>



        <section className=" bg-[#F9F8F3]">
          <div className="py-6 border-b border-[#EBE9E0] px-4 md:px-6 lg:px-16 flex items-center font-playfair justify-between">
            <h2 className="text-lg 2xl:text-2xl  ">SELLERS</h2>
            <Link href={"/sellers"} className="text-sm font-sans">
              VIEW ALL
            </Link>
          </div>






          <div className=" w-full flex flex-col-reverse md:flex-row flex-wrap ">
            <div className=" w-full md:w-[50%] px-6 md:px-16  py-6 md:pt-10 border-r border-[#EBE9E0]">

              <div className=" relative overflow-hidden">

                <div
                  className="transition-transform duration-700 ease-in-out flex flex-row"
                  style={{ transform: `translateX(-${currentIndex * (100 / slides.length)}%)`, width: `${slides.length * 100}%` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full bg-[#EBE9E0]  p-6 flex-shrink-0 gap-5"
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
                        <Link href={"#"} className="text-[12px]">
                          FOLLOW
                        </Link>
                      </div>
                      <p className="text-[12px] text-[#463F3A]">
                        {slide.description}
                      </p>
                    </div>

                  ))}
                </div>

              </div>

              <div className="flex flex-row justify-center mt-8">
                {slides.map((_, index) => (
                  <div key={index} onClick={() => handleDotClick(index)}
                    className={`w-8 rounded-sm h-1 mx-2 cursor-pointer ${currentIndex === index ? "bg-[#919089]" : "bg-[#EBE9E0]"}`}
                  ></div>

                ))}
              </div>


            </div>









            <div className=" w-full md:w-[50%] flex flex-col pt-8 items-center">
              <h2 className="text-2xl md:text-4xl lg:text-6xl   text-center font-playfair ">
                Featured Sellers
              </h2>
              <p className="text-center max-w-xl px-6 text-sm text-[#463F3A] text-[14px] 2xl:text-base my-6">
                Lorem ipsum dolor sit amet consectetur. Ullamcorper habitasse eget
                elit sit magna et diam faucibus elit. Scelerisque nec in semper ac
                pellentesque arcu iaculis mauris sed. Nunc arcu scelerisque tellus
                erat purus. Dui scelerisque semper aliquam risus lacinia sit amet
                a.
              </p>
              <button className=" py-3 2xl:py-4 px-16 hover:opacity-80 bg-black text-xs 2xl:text-sm text-white ">
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
                        <p className="text-[20px]">Antique Animal Jewelry</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-sm border-y border-[#EBE9E0] text-[#0D0106]">
                      Follow
                    </TableCell>
                  </TableRow>
                  <TableRow className=" ">
                    <TableCell className=" text-center font-playfair text-lg  border-y border-[#EBE9E0]">
                      <div className="flex justify-center flex-row items-center gap-3">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                          <Image src="/" width={10} height={10} className="rounded-full" alt="" />
                        </div>
                        <p className="text-[20px]">Patrick Boyd Carpenter</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-sm border-y border-[#EBE9E0] text-[#0D0106]">
                      Follow
                    </TableCell>
                  </TableRow>
                  <TableRow className=" ">
                    <TableCell className=" text-center font-playfair text-lg  border-y border-[#EBE9E0]">
                      <div className="flex justify-center flex-row items-center gap-3">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                          <Image src="/" width={10} height={10} className="rounded-full" alt="" />
                        </div>
                        <p className="text-[20px]">Inezstodel Cloth House</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-sm  border-y border-[#EBE9E0] text-[#0D0106]">
                      Follow
                    </TableCell>
                  </TableRow>
                  <TableRow className=" ">
                    <TableCell className=" text-center font-playfair text-lg  border-y border-[#EBE9E0]">
                      <div className="flex justify-center flex-row items-center gap-3">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                          <Image src="/" width={10} height={10} className="rounded-full" alt="" />
                        </div>
                        <p className="text-[20px]">Inezstodel Cloth House</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center text-sm  border-y border-[#EBE9E0] text-[#0D0106]">
                      Follow
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>





        <section className="pb-12">
          <div className="py-6 px-4 md:px-6 lg:px-16 border-b border-[#EBE9E0]  flex items-center font-playfair justify-between">
            <h2 className="text-lg md:text-[24px]">LATEST PRODUCTS</h2>
            <Link className="text-sm font-sans" href={"/products"}>VIEW ALL</Link>

          </div>
          <div className="flex flex-row flex-nowrap md:flex-wrap overflow-x-auto py-6 md:py-10 px-4 md:px-6 lg:px-10">
            {product.map((p, index) => {
              const isLastRow = Math.floor(index / 4) === Math.floor((product.length - 1) / 4);
              const isLastColumn = (index + 1) % 4 === 0;
              const isFavorited = isFavorite(p.id);

              return (
                <div
                  key={p.id}
                  className={`flex-shrink-0 w-full md:w-1/4 flex flex-col md:py-6 relative px-6 ${!isLastRow ? 'md:border-b md:border-[#EBE9E0]' : ''} ${!isLastColumn ? 'border-r border-[#EBE9E0]' : ''}`}
                  onClick={() => handleProductDetails(p.id)}
                >
                  {/* Product Image Container */}
                  <div className="relative group">
                    {/* Favorite Button */}
                    <div className="absolute top-2 right-4 z-10">
                      <button
                        onClick={() => toggleFavorite(p.id)}
                        aria-label={`Add ${p.title} to favorites`}
                        className="text-xl font-semibold focus:outline-none"
                      >
                        {isFavorited ? (
                          <FaHeart className="text-red-500" />
                        ) : (
                          <CiHeart className="text-gray-500" />
                        )}
                      </button>
                    </div>

                    {/* Product Image */}
                    <Image
                      src="/images/products/p1.png"
                      alt={p.title}
                      width={150}
                      className="w-full h-full object-contain object-center transform hover:scale-105 hover:blur-md transition duration-500 ease-in-out"
                      height={150}
                    />

                    {/* Likes and Comments Overlay on Hover */}
                    <div className="absolute inset-0 bg-white bg-opacity-80   flex flex-row gap-4 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm text-black flex items-center gap-4"><CiHeart className="text-lg" /> {p.likes || 34}</p>
                      <p className="text-sm text-black flex items-center gap-4"><FaRegCommentDots className="text-lg" /> {p.comments || 34}</p>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="w-full mt-4">
                    <div className="flex flex-row gap-4 justify-between">
                      <p className="text-[#919089] mb-1 text-[12px]">{p.brand}</p>
                      <Link href={"#"} className="text-[#919089] text-[12px]">FOLLOW</Link>
                    </div>
                    <h2 className="text-[14px] md:text-base">{p.title}</h2>
                  </div>
                </div>
              );
            })}
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
          <p className="text-center px-6 max-w-xl 2xl:max-w-3xl text-[#FFFFFF] text-sm 2xl:text-base my-6">
            Lorem ipsum dolor sit amet consectetur. Sed amet bibendum at venenatis
            faucibus mi fringilla viverra. In nulla aliquam magna orci neque
            penatibus neque eget. Commodo scelerisque cursus purus id fermentum
            lorem nisi sit malesuada.
          </p>
          <button onClick={handleLiveShows} className=" py-3 uppercase 2xl:py-4 px-16  bg-white hover:bg-gray-900 text-xs 2xl:text-sm hover:text-white text-black ">
            see upcoming live shows
          </button>

        </section>



        <section className="bg-white">
          <div className=" py-6 border-b border-[#EBE9E0] px-4 md:px-6 lg:px-16 flex items-center font-playfair justify-between">
            <h2 className="text-lg md:text-[24px] ">CATEGORIES</h2>
            <Link href={"#"} className="text-sm font-sans">
              VIEW ALL
            </Link>
          </div>
        </section>



        <section className=" bg-[#F9F8F3] p-8 md:p-10  lg:px-16 lg:py-16">
          <h1 className="text-3xl lg:text-5xl font-playfair mb-16">
            Find your interest
          </h1>
          <div className="flex flex-row flex-wrap justify-start md:justify-between gap-[32px]">
            {intrests.map((intrest, index) => (
              <div key={index} className="flex flex-col flex-nowrap gap-4 items-center justify-between">
                <div className="mb-3">
                  <Image
                    src={intrest.image}
                    alt="interest"
                    width={60}
                    height={60}
                    className=" "
                  />
                </div>
                <h2 className="uppercase text-xs">{intrest.name}</h2>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className=" py-6 border-b border-[#EBE9E0] px-4 md:px-6 lg:px-16 flex items-center font-playfair justify-between">
            <h2 className="text-lg md:text-[24px]">PERIODS</h2>
            <Link href={"#"} className="text-sm font-sans">
              VIEW ALL
            </Link>
          </div>
        </section>




        <section className="bg-[#FFFFFF] px-4 md:px-6 lg:px-16 py-10 md:py-20 border-b border-[#EBE9E0]">
          <div className="grid md:grid-cols-4">
            <div className="md:col-span-3 flex flex-col justify-center ">

              <div className="text-3xl md:text-[48px] space-y-4 font-playfair ">
                <h1 className="italic leading-[12px] md:leading-[50px] tracking-tighter">Victorian Elegance:</h1>
                <h1 className="tracking-normal">A Journey Through 19th Century Artistry</h1>
              </div>


              <p className="py-10 pr-1 text-[14px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta exercitationem harum magnam eaque cupiditate natus. Maxime possimus perspiciatis id sed illum reprehenderit natus alias consequuntur ea facilis. Expedita, dignissimos deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iste esse, praesentium nobis consequuntur dolores numquam ad debitis, beatae et corrupti id eius perferendis sunt. Sint nulla earum laborum voluptas?</p>

              <Link href={"#"} className="text-sm uppercase">See Collection</Link>
            </div>

            <div className="md:col-span-1  relative py-3 mt-8 md:mt-0  bg-[#EBE9E0] p-[20px] pb-[24px]">

              <div className="absolute top-5 right-7 ">
                <CiHeart />
              </div>
              <Image src="/images/products/p1.png" width={140} height={100} alt="img" layout="responsive" />

              <div className="text-sm text-[#919089] flex flex-row gap-2 justify-between flex-nowrap mt-3">
                <h1>Seller Name</h1>
                <Link href={"#"} className="uppercase text-[12px]">Follow</Link>
              </div>

              <p className="text-[#0D0106] text-[14px] mt-2">NATIVE IRON CHAIR</p>

            </div>

          </div>


        </section>


        <section className="bg-white">
          <div className=" py-6 border-b border-[#EBE9E0] px-4 md:px-6 lg:px-16 flex items-center font-playfair justify-between">
            <h2 className="text-lg md:text-[24px]  ">Blog</h2>
            <Link href={"/blog"} className="text-sm font-sans">
              VIEW ALL
            </Link>
          </div>
        </section>




        {/* blogs card details add here */}
        <section className="px-4 md:px-6 lg:px-16 ">
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 w-full ">
            {posts.map((b) => (
              <div key={b.id} className="w-full py-3 md:py-5 md:pr-4  border-b last:border-b-0 md:border-r border-[#DFDEDB] last:border-r-0">
                <Image
                  src="/images/blogs/b1.png" //replacce with original image
                  className="w-full h-auto "
                  height={150}
                  width={120}
                  alt={b.title}
                />
                <h1 className="text-[24px] font-playfair py-3 capitalize tracking-tight">{b.title}</h1>
                <p className="text-sm text-[#463F3A] line-clamp-6">{b.body}</p>


                <button onClick={() => handleReadMore(b.id)} className=" pt-4 pb-6 text-sm text-[#0D0106]">
                  READ MORE
                </button>
              </div>
            ))}
          </div>

        </section>



        {/* how to work section */}

        <section className="bg-[#F9F8F3] pt-10 pb-12 md:pb-28 md:px-8">
          <div className="flex flex-col items-center  px-6">
            <h1 className="text-[64px] font-playfair">How it works</h1>
            <p className="uppercase tracking-widest py-4 text-xs text-center">we are specialized in adornments, that bring charm to any environment.</p>
            <p className="md:w-[500px] text-center ">Lorem ipsum dolor sit amet consectetur. In laoreet viverra sed auctor amet nec senectus porta. Ac commodo cum ut quam vitae sollicitudin aenean. Sit volutpat nunc et aenean. Sed condimentum felis at rhoncus. Gravida placerat senectus tortor id vitae nullam orci mollis. Consequat commodo tellus varius purus quam nulla. Enim tellus ac convallis enim convallis sed. Augue amet morbi penatibus.</p>

            <Button onClick={handleLogin} label="Create a Free Account" className="uppercase my-8 text-sm py-4 px-8  hover:opacity-80" />
          </div>



          <div className="bg-[#463F3A] py-10  text-white px-4">
            <div className="flex flex-col items-center justify-between">
              <h1 className="text-2xl md:text-[48px] leading-[50px] tracking-tight font-light font-playfair italic">Stay in the Loop:</h1>
              <h1 className="text-2xl text-center font-light md:text-[48px] font-playfair mt-3">
                Discover Exclusive Antiques & Insights</h1>


              <div className="w-full md:w-1/3 my-12 flex flex-row  gap-1">
                <InputField
                  type="email"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  className="flex-1 w-3/4 md:w-3/4  placeholder:text-xs md:placeholder:text-sm text-xs md:text-sm py-2 px-3"
                  placeholder="Enter Email Address"
                />
                <Button
                  onClick={handleSubscribe}
                  label="Subscribe"
                  className=" w-1/4 md:w-1/4 py-2.5 px-4 uppercase text-xs md:text-sm"
                />
              </div>
            </div>
            <div className="px-4 flex  flex-row flex-wrap  justify-between items-center gap-2 ">
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
        <Login onClose={() => setIsLogin(false)} />
      )}
    </>
  );
};

export default page;
