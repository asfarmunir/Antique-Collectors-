'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { BiCandles } from "react-icons/bi";
import { HiViewGrid } from "react-icons/hi";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import Image from "next/image";
import Dropdown from "@/components/ui/DropDown";
import FilterComponent from "@/components/shared/SidebarFilter";
import Button from "@/components/ui/Button";
import InputField from "@/components/ui/InputField";
import { blog as blogData } from "@/lib/data";
import { useRouter } from "next/navigation";


const checkboxlablel = ["Roman - 753 BC - 476 AD", "Elizabethan - 1558 - 1603", "Renaissance - early 1425 - 1490", "Baroque - 1600 - 1750", "William and Mary - 1689 - 1702", "Georgian - 1714 - 1837", "Queen Anne - 1702 - 1714"];

const checkboxlablel1 = ["Excellent Condition", "Very Good Condition", "Good Condition", "Fair Condition"];

const post = [
    { title: 'Exploring new ways of decorating', src: "/images/post/post1.jpeg", date: "03 AUG 2022" },
    { title: 'Handmade pieces that took time to make', src: "/images/post/post2.jpeg", date: "04 AUG 2022" },
    { title: 'Modern home in Milan', src: "/images/post/post3.jpeg", date: "03 AUG 2022" },
    { title: 'Colorful office redesign', src: "/images/post/post4.jpeg", date: "03 AUG 2022" },
];

const sortData = ['Latest', 'A to Z', 'Low to Higher Price', 'Higher to Low Price', 'Highest Sale Products'];

const Blog = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [visibleBlogs, setVisibleBlogs] = useState(10); // Show 10 blogs initially
    const [displayedBlog, setDisplayedBlog] = useState([]); // Currently visible blogs
    const [openDropdown, setOpenDropdown] = useState<number | null>(null); // Tracks which dropdown is open
    const [blog, setBlog] = useState([]); // Full blog list
    const router = useRouter();
    const [showAll, setShowAll] = useState(false); // Toggle between "View More" and "View Less"



    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch("https://dummyjson.com/posts");
                const data = await response.json();
                setBlog(data.posts);
                setDisplayedBlog(data.posts); // Display first 10 blogs initially
            } catch (error) {
                console.log("Error fetching blogs:", error);
            }
        };

        fetchBlog();
    }, []);


    const handleViewMoreOrLess = () => {
        if (showAll) {
            setVisibleBlogs(10); // Reset to initial 10 blogs
        } else {
            setVisibleBlogs(blog.length); // Show all blogs
        }
        setShowAll(!showAll); // Toggle state
    };

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index); // Toggle the open dropdown
    };

    const handleSelect = (item: string) => {
        console.log('Selected:', item);
    };

    const handleViewMore = () => {
        setVisibleBlogs((prev) => prev + 10); // Load 10 more blogs on "View More" button click
    };

    const handleReadMore = (id: any) => {
        router.push(`/blog/${id}`);
    };

    return (
        <>
            <div>
                <div className="flex relative flex-col-reverse gap-5 md:flex-row h-[480px] md:h-[300px] border-b border-[#EBE9E0]">
                    {/* Text Section */}
                    <div className="w-full px-6 md:px-12 flex flex-col my-auto justify-center h-full">
                        <h1 className="text-3xl md:text-4xl font-playfair">Blog Post Title</h1>
                        <p className="text-sm md:text-base text-justify py-2">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque alias, beatae, iste totam molestias placeat molestiae laudantium hic consequuntur possimus explicabo voluptatum! Error consequuntur eaque harum blanditiis sequi. Ratione, similique!
                        </p>
                        <Button label="Read article" className="w-1/2 md:w-1/2 lg:w-1/3 text-sm text-white mt-4 uppercase py-3" />
                    </div>

                    {/* Image Section */}
                    <div className="w-full relative h-full md:h-auto px-4 md:px-8">
                        {/* Top Image */}
                        <div className="absolute top-0 right-0 w-[150px] md:max-w-[280px]">
                            <Image src="/images/blogs/bt.png" alt="top left" width={0} height={0} layout="responsive" className="w-full h-auto" />
                        </div>

                        {/* Center Image */}
                        <div className="absolute top-1/3 md:top-1/3 lg:top-1/2 left-0 md:left-10 lg:left-32 transform -translate-y-1/2 w-[120px] md:max-w-[180px]">
                            <Image src="/images/blogs/bm.png" alt="center left" width={0} height={0} layout="responsive" className="w-full h-auto" />
                        </div>

                        {/* Bottom Image */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform w-[120px] md:max-w-[300px]">
                            <Image src="/images/blogs/bb.png" alt="bottom center" width={0} height={0} layout="responsive" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                <div>
                    <div className="py-4 px-8">
                        <h1 className="text-xs">Home / Products / New Arrivals</h1>
                        <h1 className="font-playfair pt-4 uppercase text-xl ">Blog</h1>
                    </div>

                    <section className="bg-[#F9F8F3] py-4 px-8">
                        <div className="flex flex-row flex-wrap justify-between gap-4 items-center">
                            <div onClick={() => setFilterOpen(!filterOpen)} className="inline-flex flex-row items-center gap-2 py-3 px-8 bg-[#EBE9E0]">
                                <BiCandles className="text-lg text-[#0D0106]" />
                                <p className="text-xs text-[#0D0106] ">FILTER</p>
                            </div>

                            <p className="uppercase text-xs text-[#463F3A] md:hidden block">Showing {blog.length} Results</p>
                            <InputField placeholder="Search" className="text-sm placeholder:text-sm w-full md:w-1/3 border border-[#EBE9E0]" />
                            <div className="flex flex-row gap-2 items-center">
                                <p className="uppercase text-xs text-[#463F3A] md:block hidden">Showing 320 Results</p>
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

                    {filterOpen && (
                        <div className="bg-white p-4 md:hidden absolute z-10">
                            <FilterComponent
                                checkboxlablel={checkboxlablel} checkboxlablel1={checkboxlablel1} filtersToShow={['category']}
                            />
                            <Button label="Apply Filters" onClick={() => setFilterOpen(false)} className="mt-4 w-full" />
                        </div>
                    )}

                    {/* Main content start from here */}
                    <div className="py-4 px-5 md:px-6 md:grid md:grid-cols-5">
                        <div className="md:col-span-1 py-6">
                            <div className="md:block hidden">
                                <FilterComponent checkboxlablel={checkboxlablel} checkboxlablel1={checkboxlablel1} filtersToShow={['category']} />
                            </div>

                            <div className="md:block hidden">
                                <h2 className="text-xl font-playfair">Recent Posts</h2>
                                {post.map((p) => (
                                    <div key={p.title} className="flex flex-row items-center gap-4 mt-4">
                                        <div className="w-20 h-12 bg-[#7C7C7C] overflow-hidden">
                                            <Image src={p.src} alt={p.title} width={80} height={80} className="object-cover w-full h-full" />
                                        </div>
                                        <div>
                                            <Link href="#" className="text-sm font-playfair">{p.title}</Link>
                                            <p className="font-light text-xs mt-2 text-[#9F9F9F]">{p.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="md:px-4 col-span-4">
                            {blog.slice(0, visibleBlogs).map((blogs) => (
                                <div key={blogs.userId} className="md:border-l md:border-[#EBE9E0]">
                                    <div className="w-full py-4 md:px-10 md:py-5">
                                        <div className="h-80 relative">
                                            <Image
                                                src='/images/blogs/b2.png' // Replace with original blog image
                                                alt={blogs.userId}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>

                                        <div className="text-xs text-[#9F9F9F] flex flex-row justify-between gap-6 mt-2">
                                            <p>{blogs.date}</p>
                                            <p>Writer Name</p>
                                        </div>

                                        <h1 className="text-xl font-playfair mt-2">{blogs.title}</h1>
                                        <p className="mt-2 text-[#919089] text-sm">
                                            {`${blogs.body.split(' ').slice(0, 20).join(' ')}...`}
                                        </p>

                                        <Button
                                            label="Read More"
                                            onClick={() => handleReadMore(blogs.id)}
                                            className="uppercase bg-transparent text-[#0D0106] text-sm mt-2 p-0"
                                        />
                                    </div>
                                </div>
                            ))}

                            <div className="flex flex-row justify-center items-center mt-4">
                                <Button
                                    onClick={handleViewMoreOrLess}
                                    label={showAll ? "View Less" : "View More"}
                                    className="uppercase border border-[#0D0106] py-2 px-8 bg-white text-[#0D0106]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;