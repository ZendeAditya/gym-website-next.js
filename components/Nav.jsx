"use client";
import React, { useState } from "react";
import Logo from "../public/logo-gym.webp";
import Image from "next/image";
import Link from "next/link";
import { FcMenu, FcRight } from "react-icons/fc";
import Hero from "./Hero";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  const Links = [
    { link: "Home" },
    { link: "About" },
    { link: "Contact" },
    { link: "Blog" },
  ];
  return (
    <>
      <div className="h-screen bg-hero bg-cover overflow-x-hidden">
        <nav className="flex  justify-around px-3 items-center  py-3  bg-black/100 w-full">
          <div>
            <Link href={"/"} className="cursor-pointer">
              <Image
                src={Logo}
                alt="Brand logo"
                className="rounded-full"
                width={70}
              />
            </Link>
          </div>
          {/* lg:flex flex-col lg:flex-row  top-0 w-60 h-screen items-end z-20 gap-x-8 sm:absolute fixed block text-green-200 */}
          <ul
            className={`${
              !open ? "right-[-100%]" : "right-[0]"
            }      ] lg:flex flex-col lg:flex-row items-center  justify-around  top-0 w-60 h-full  z-[20] gap-x-10 py-3 sm:hidden ]
            `}
          >
            {Links.map((element, index) => (
              <li
                key={index}
                className="text-xl font-semibold hover:underline cursor-pointer duration-300 "
              >
                {element.link}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <div className=" bg-red-600 py-3 px-7 rounded-lg focus:outline-none text-white hover: hover:text-black hover:bg-orange-800">
              <button>Get Started</button>
            </div>
          </div>
          <div className="lg:hidden">
            {!open ? (
              <FcMenu
                onClick={handleMenu}
                size={35}
                className="cursor-pointer text-blue-500"
              />
            ) : (
              <FcRight
                onClick={handleMenu}
                size={35}
                className="cursor-pointer"
              />
            )}
          </div>
        </nav>
        <Hero />
      </div>
    </>
  );
};

export default Nav;
