'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";






const blogDetails1 = [
    {
      id:1,
      image: "/images/blogs/b1.png",
      title: "Unlocking the Past: How to Identify Authentic Victorian Antiques",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus corporis perferendis labore. Dolor praesentium mollitia, quaerat laudantium magnam ipsam quo, eaque incidunt voluptatibus porro, culpa dolorum autem earum quam consequuntur."
    },
    {
      id:2,
      image: "/images/blogs/b2.png",
      title: "Lorem ipsum dolor sit amet consectetur. Nec ut tellus pellentesq..",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus corporis perferendis labore. Dolor praesentium mollitia, quaerat laudantium magnam ipsam quo, eaque incidunt voluptatibus porro, culpa dolorum autem earum quam consequuntur."
    },
  
    {
      id:3,
      image: "/images/blogs/b2.png",
      title: "Unlocking the Past: How to Identify Authentic Victorian Antiques",
      details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus corporis perferendis labore. Dolor praesentium mollitia, quaerat laudantium magnam ipsam quo, eaque incidunt voluptatibus porro, culpa dolorum autem earum quam consequuntur."
    }
  ]

const BlogDetails = ({params}:{params: any}) => {
  const [blogDetails, setBlogDetails] = useState(null);
  const router =useRouter();
  const {id} = params;
  
  
console.log('id', id);


    useEffect(() => {
      const fetchBlog = async () => {
          try {
              const response = await fetch(`https://dummyjson.com/posts/${id}`);
              const data = await response.json();
              console.log(data);
              setBlogDetails(data);
             
          } catch (error) {
              console.log("Error fetching blogs:", error);
          }
      };

      fetchBlog();
  }, [id]);


  console.log(blogDetails);


    return (
        <>
            <div>
                <div className="py-4 px-4 md:px-8 border border-[#EBE9E0]" >
                    <h1 className="text-xs">Home / Blog / Blog Post Title</h1>
                    <h1 className="font-playfair pt-4 uppercase text-xl ">Blog Post Title</h1>
                </div>
                <div className="p-4 md:p-8">
                    <div className="relative w-full min-h-80 mx-auto">
                        <Image
                            src="/images/post/post4.jpeg"
                            alt="imag"
                            layout="fill"
                            objectFit="cover"
                            priority // Optional: If the image is above the fold
                        />
                    </div>

                    <h1 className="text-2xl font-playfair capitalize py-3">Blog title</h1>
                    <div className="flex flex-row items-center text-sm gap-3 pb-3">
                        <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                            <Image
                                src="/"
                                width={10}
                                height={10}
                                className="rounded-full"
                                alt=""
                            />
                        </div>
                        <h1 className="text-xs uppercase text-[#404040]">Oliver bennett</h1>
                        <span className="w-1 h-1 bg-[#404040] rounded-full"></span>
                        <h1 className="text-[#404040] uppercase text-xs">23 Jan 2023</h1>
                    </div>

                    <p className="text-[#666666] text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>

                    <h1 className="text-[#3D3D3D] py-3 font-playfair">Lorem Heading</h1>
                    <p className="text-[#666666] text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">

                       <div className="">
                       <Image src="/images/post/post2.jpeg" height={300} width={400}  alt="pic2" />
                        </div>


                        
                       <div className="">
                       <Image src="/images/post/post3.jpeg" height={300} width={400}  alt="pic2" />
                        </div>

                    </div>

                    <p className="text-[#666666] text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>

                    <h1 className="text-[#3D3D3D] py-3 font-playfair">Lorem Heading</h1>
                    <p className="text-[#666666] text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>



                </div>



                <section className="bg-white">
        <div className=" py-7 2xl:py-9 border-y border-[#EBE9E0] px-4 md:px-7 2xl:px-12 flex items-center font-playfair justify-between">
          <h2 className="text-lg 2xl:text-2xl uppercase ">Other Blog Posts</h2>
          <Link href={"/blog"} className="text-sm ">
            VIEW ALL
          </Link>
        </div>
      </section>




      {/* blogs card details add here */}
      <section className="px-4 md:px-10 pb-5">
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 w-full ">
          {blogDetails1.map((items) => (
            <div className="w-full py-5 pr-4 ">
              <Image
                src={items.image}
                className="w-full h-auto"
                height={150}
                width={120}
                alt={items.title}
              />
              <h1 className="text-xl font-playfair py-3">{items.title}</h1>
              <p className="text-sm text-[#463F3A] ">{items.details}</p>


              <button className=" pt-4 pb-6 text-sm text-[#0D0106]">
                READ MORE
              </button>
            </div>
          ))}
        </div>

      </section>





            </div>

        </>
    )
}

export default BlogDetails;