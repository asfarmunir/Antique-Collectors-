'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBlogDetails } from "@/hooks/useBlogs";
import { useBlogs } from "@/hooks/useBlogs";



const BlogDetails = ({ params }: { params: any }) => {
  const {blog} = useBlogs();
  const { blogDetails, error } = useBlogDetails(params.id);
  const router = useRouter();


  const handleReadMore = (id: any) => {
    router.push(`/blog/${id}`);
  }

  return (
    <>
      <div>
        <div className="py-4 px-4 md:px-12 border border-[#EBE9E0]" >
          <h1 className="text-xs">Home / Blog / Blog Post Title</h1>
          <h1 className="font-playfair pt-4 uppercase text-xl ">{blogDetails?.title}</h1>
        </div>
        <div className="p-4 md:py-8 md:px-12">
          <div className="relative w-full min-h-80 mx-auto">
            <Image
              src="/images/post/post4.jpeg"
              alt="imag"
              layout="fill"
              objectFit="cover"
              priority // Optional: If the image is above the fold
            />
          </div>

          <h1 className="text-[40px] font-playfair capitalize py-3">{blogDetails?.title}</h1>
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
            <h1 className="text-[#404040] uppercase text-xs">{blogDetails?.date || '23 JAN 2023'}</h1>
          </div>

          <p className="text-[#666666] text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>

          <h1 className="text-[#3D3D3D] py-3 text-lg font-playfair">Lorem Heading</h1>
          <p className="text-[#666666] text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">

            <div className="">
              <Image src="/images/post/post2.jpeg" height={300} width={400} alt="pic2" />
            </div>



            <div className="">
              <Image src="/images/post/post3.jpeg" height={300} width={400} alt="pic2" />
            </div>

          </div>

          <p className="text-[#666666] text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>

          <h1 className="text-[#3D3D3D] py-3 text-lg font-playfair">Lorem Heading</h1>
          <p className="text-[#666666] text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>



        </div>



        <section className="bg-white">
          <div className=" py-6 border-y border-[#EBE9E0] px-4 md:px-6 lg:px-12 flex items-center font-playfair justify-between">
            <h2 className="text-lg md:text-[20px] uppercase ">Other Blog Posts</h2>
            <Link href={"/blog"} className="text-sm ">
              VIEW ALL
            </Link>
          </div>
        </section>




         <section className="px-4 md:px-6 lg:px-12 ">
                <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-6">
                  {blog.slice(0,3).map((b) => (
                    <div key={b.id} className="w-full py-3 md:py-5 md:pr-4  last:border-r-0">
                      <Image
                        src="/images/blogs/b1.png" //replacce with original image
                        className="w-full h-auto "
                        height={150}
                        width={120}
                        alt={b.title}
                      />
                      <h1 className="text-xl font-playfair py-3">{b.title}</h1>
                      <p className="text-sm text-[#463F3A] line-clamp-6">{b.body}</p>
      
      
                      <button onClick={() => handleReadMore(b.id)} className=" pt-4 pb-6 text-sm text-[#0D0106]">
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