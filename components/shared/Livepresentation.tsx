"use client";

import { LuUpload } from "react-icons/lu";
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/Dialog";
import Image from "next/image";
import Button from "../ui/Button";
import { RxCross2 } from "react-icons/rx";
import Carousel from "../ui/Carousel";

const slides = [
  { image: '/images/products/p1.png', alt: 'Slide 1', caption: 'Explore the World' },
  { image: '/images/products/p2.png', alt: 'Slide 2', caption: 'Discover New Horizons' },
  { image: '/images/products/p3.png', alt: 'Slide 3', caption: 'Adventure Awaits' },
  { image: '/images/products/p4.png', alt: 'Slide 4', caption: 'Discover New Horizons' },
  { image: '/images/products/p5.png', alt: 'Slide 5', caption: 'Adventure Awaits' },
];


export function LivePresentation({ onClose }: { onClose: any }) {
  return (
    <div className="relative">
      <Dialog open onOpenChange={onClose}>
        <DialogContent className="font-playfair max-h-[90vh] overflow-y-auto">
          <DialogHeader className="font-playfair text-xl border-b border-[#EBE9E0] pb-2">
            <DialogTitle>
              <Button onClick={onClose} icon={<RxCross2 className="text-black" />} label="" className="bg-transparent absolute right-0 top-4" />
              <h1 className="font-playfair text-xl">Live Presentation</h1>
            </DialogTitle>
          </DialogHeader>

          <div>
            <p className="bg-[#EBE9E0] text-center text-sm py-1">Available to watch for another 14 hours</p>
            <div className="my-2">
              <div className="pb-2">
                <div style={{ height: "200px", width: "full", position: "relative" }}>
                  <Image
                    src="/images/blogs/b1.png"
                    alt="img"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="flex flex-row items-center gap-4 py-2 justify-between">
                  <h1 className="font-playfair">Home Decor originating from Italy</h1>
                  <button><LuUpload className="text-lg" /></button>
                </div>

                <p className="text-sm">Streamed 22 hours ago</p>
              </div>

              <div>
                <div className="flex flex-row justify-between py-3 items-center text-sm gap-2">
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
          </div>

          <DialogFooter>
            <Button onClick={onClose} label="Watch Now" className="text-sm capitalize w-full" />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
