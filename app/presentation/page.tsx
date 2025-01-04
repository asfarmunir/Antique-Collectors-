'use client';
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image";
import {
    Table, TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table";
import { LuUpload } from "react-icons/lu";
import Carousel from "@/components/ui/Carousel";
import { LivePresentation } from "@/components/shared/Livepresentation";


const slides = [
    { image: '/images/products/p1.png', alt: 'Slide 1', caption: 'Explore the World' },
    { image: '/images/products/p2.png', alt: 'Slide 2', caption: 'Discover New Horizons' },
    { image: '/images/products/p3.png', alt: 'Slide 3', caption: 'Adventure Awaits' },
    { image: '/images/products/p4.png', alt: 'Slide 4', caption: 'Discover New Horizons' },
    { image: '/images/products/p5.png', alt: 'Slide 5', caption: 'Adventure Awaits' },
];

const tableData = [
    { sellername: 'Oliver bennett', title: 'Home Decor originating from Italy', date: '15.12.2024', time: '5.00 PM (UTC)' },
    { sellername: 'Oliver bennett', title: 'Home Decor originating from Italy', date: '15.12.2024', time: '5.00 PM (UTC)' },
    { sellername: 'Oliver bennett', title: 'Home Decor originating from Italy', date: '15.12.2024', time: '5.00 PM (UTC)' },

];


const Presentations = () => {
    const [openPopup, setOpenPopup] = useState(false);

    const handleDialog = () => {
        setOpenPopup(!openPopup); // Toggles the popup state
    };



    return (
        <>
            <div>
                <div className="py-4 px-4 md:px-6 lg:px-10 border-b border-[#EBE9E0] flex flex-row flex-wrap gap-4 justify-between items-center" >
                    <div>
                        <p className="text-xs">Home / Live Presentations</p>
                        <h1 className="font-playfair pt-4 uppercase text-base md:text-xl ">Live Presentations</h1>
                    </div>

                    <div>
                        <Button onClick={handleDialog} label="Create a live presentation" className="text-xs text-white uppercase" />
                    </div>
                </div>


                <section className="py-4 px-4 md:px-6 lg:z-10">
                    <h1 className="text-3xl font-playfair capitalize">Discover Upcoming Live Showcases</h1>
                    <p className="text-sm py-3 text-[#919089]">Explore our schedule of live presentations where sellers unveil unique antiques, share their stories, and answer your questions in real time. Don’t miss the chance to connect and find your next treasure.</p>



                    {/* Live Presentation section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 py-5">
                        {Array.from({ length: 6 }).map((items) => (
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

                                <h3 className="text-[#463F3A] font-playfair text-lg pt-2">Antique Showcase Live: Unveiling Rare jewelry Finds in Real Time</h3>
                                <p className="text-[#8B8683] py-2 text-sm">Patrick Boyd Carpenter</p>


                                <div className="mt-5">
                                    <Button label="Set a reminder" className="uppercase w-full" />
                                </div>

                            </div>
                        ))}
                    </div>
                </section>


                <section className="py-4 px-8 md:block hidden">
                    <h1 className="text-3xl font-playfair capitalize">Time Table</h1>
                    <p className="text-sm py-3">Explore our schedule of live presentations where sellers unveil unique antiques, share their stories, and answer your questions in real time. Don’t miss the chance to connect and find your next treasure.</p>





                    <div className="p-4">
                        <Table className="border  border-[#EBE9E0] shadow-md text-[#0D0106]">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="uppercase text-[#919089] border-r  border-[#EBE9E0] text-center">Seller Name</TableHead>
                                    <TableHead className="border-r  border-[#EBE9E0] text-[#0D0106]">Title</TableHead>
                                    <TableHead className="border-r  border-[#EBE9E0] text-[#0D0106]">Date</TableHead>
                                    <TableHead className="border-r  border-[#EBE9E0] text-[#0D0106]">Time</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tableData.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="border-r  border-[#EBE9E0]">
                                            <div className="flex flex-row items-center text-sm gap-2 ">
                                                <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                                                    <Image
                                                        src="/"
                                                        width={10}
                                                        height={10}
                                                        className="rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h1 className="text-xs uppercase text-[#919089]">{row.sellername}</h1>
                                                    <Button label="Follow" className="uppercase text-[10px] p-0 bg-transparent text-[#0D0106]" />
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className=" border-r  border-[#EBE9E0]"><p className="font-playfair text-base">{row.title}</p> <p className="text-gray-400 text-xs">Description</p></TableCell>
                                        <TableCell className="border-r  border-[#EBE9E0] text-[#0D0106]">{row.date}</TableCell>
                                        <TableCell className="border-r  border-[#EBE9E0] text-[#0D0106]">{row.time}</TableCell>

                                        <TableCell>
                                            <Button label="Set a reminder" className="uppercase text-sm text-white w-full" />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                </section>



                <section className="py-4 px-4 md:px-6 lg:px-10">
                    <h1 className="text-3xl font-playfair capitalize">Catch Up on Recent Showcases</h1>
                    <p className="text-xs py-3">Missed a live session? Watch the highlights and explore featured antiques from the past 24 hours before they’re gone.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Array.from({ length: 2 }).map((item) => (
                            <div className="md:mx-2 ">
                                <div className="border-b border-[#EBE9E0] pb-4">
                                    <div style={{ height: '400px', width: "full", position: 'relative' }}>
                                        <Image
                                            src="/images/blogs/b1.png"
                                            alt="img"
                                            layout="fill"
                                            objectFit="cover"

                                        />
                                    </div>

                                    <div className="flex flex-row items-center gap-4 py-2 justify-between">
                                        <h1 className="font-playfair text-xl">Home Decor originating from Italy</h1>
                                        <button><LuUpload className="text-lg" /> </button>
                                    </div>

                                    <p className="text-sm">Streamed 22 hours ago</p>

                                </div>



                                <div>

                                    <div className="flex flex-row justify-between py-3 items-center text-sm gap-2 ">
                                        <div className="flex flex-row items-center gap-2">
                                            <div className="bg-[#EBE9E0] p-2 rounded-full w-8 h-8 flex items-center justify-center">
                                                <Image
                                                    src="/"
                                                    width={10}
                                                    height={10}
                                                    className="rounded-full"
                                                    alt=""
                                                />
                                            </div>

                                            <h1 className="text-xs uppercase text-[#919089]">Seller Name</h1>


                                        </div>

                                        <Button label="Follow" className="uppercase text-[10px] p-0 bg-transparent text-[#0D0106]" />
                                    </div>



                                    <div className="mx-4">
                                        <Carousel items={slides} />


                                    </div>
                                </div>




                            </div>
                        ))}
                    </div>
                </section>

            </div>


            {/* Dialog Popup */}
            {openPopup && (
                <LivePresentation onClose={() => setOpenPopup(false)} />
            )}

        </>
    )
}

export default Presentations;