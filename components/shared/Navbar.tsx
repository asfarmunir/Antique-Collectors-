"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import Login from "./Login";
import SignUp from "./Signup";

const navlinks = [
  { title: "Home", link: "/" },
  { title: "Product", link: "/products" },
  { title: "Seller", link: "/sellers" },
  { title: "Forum", link: "#" },
  { title: "Fairs & Events", link: "#" },
  { title: "Live Presentation", link: "/presentation" },
  { title: "Blog", link: "/blog" },
  { title: "About Us", link: "/aboutus" },
  { title: "Become a Seller", link: "#" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin=()=>{
  
    setIsLoginOpen(!isLoginOpen);
  }

  return (
    <nav className="relative">
      <div className="w-full border-b border-[#F9F8F3] p-3 md:px-8 2xl:px-12 md:py-4 flex items-center justify-between">
        <Image src={"/images/logo.svg"} alt="logo" width={160} height={150} />
        <div className="flex items-center gap-3 md:hidden">
          <button className="flex items-center" onClick={toggleMenu}>
            <IoMenu />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Image
            src={"/images/message.svg"}
            alt="icon"
            width={25}
            height={25}
          />
          <Image
            src={"/images/notification.svg"}
            alt="icon"
            width={25}
            height={25}
          />
          <button onClick={handleLogin} className="py-3 2xl:py-3.5 px-9 2xl:px-12 bg-black text-xs 2xl:text-sm text-white">
            LOG IN
          </button>
        </div>
      </div>

      {/* Burger Menu (Mobile/Small Screen) */}
      <div
        className={`absolute top-[100%] left-0 w-full bg-white opacity-95 z-30 border-y-2 border-[#EBE9E0] shadow-lg md:hidden ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col  gap-5 py-2`}
      >
        <ul className="w-full px-5 flex flex-col items-start gap-5 py-2">
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <a
                href={navlink.link}
                className={`${
                  pathname === navlink.link
                    ? "text-black font-bold"
                    : "text-black"
                } text-sm 2xl:text-base`}
              >
                {navlink.title}
              </a>
            </li>
          ))}
        </ul>
        <div className=" flex flex-col gap-3 py-2 px-5">
          <div className="w-1/2 flex flex-row items-center gap-5">
            <Image
              src={"/images/notification.svg"}
              alt="Notification Icon"
              width={25}
              height={25}
              className="cursor-pointer"
            />
            <Image
              src={"/images/message.svg"}
              alt="Message Icon"
              width={25}
              height={25}
              className="cursor-pointer"
            />
          </div>
         <div className=" w-full">
          <button onClick={handleLogin} className=" py-3 px-6 bg-black text-white text-sm w-full ">
            LOG IN
          </button>
          </div>
        </div>
     
      </div>

      {/* Horizontal Menu (Desktop/Large Screens) */}
      <div
        className={`hidden md:flex items-center justify-between py-3 px-9 2xl:px-12 border-y border-[#EBE9E0]`}
      >
        <ul className="flex items-center gap-5 py-2">
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <a
                href={navlink.link}
                className={`${
                  pathname === navlink.link
                    ? "text-black font-bold"
                    : "text-black"
                } text-sm 2xl:text-base`}
              >
                {navlink.title}
              </a>
            </li>
          ))}
        </ul>
       
      </div>



      {isLoginOpen && (
        <SignUp onClose={()=> setIsLoginOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
