import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0 font-serif">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-xl text-[#6fddfb]">Asad Abbas</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-[#6fddfb]">
              Home
            </Link>
            <Link href={"#About"} className="mr-5 hover:text-[#6fddfb]">
              About
            </Link>
            <Link href={"#Skill"} className="mr-5 hover:text-[#6fddfb]">
              Skills
            </Link>
            <Link href={"#Project"} className="mr-5 hover:text-[#6fddfb]">
              Projects
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-[#6fddfb]">
              Contant
            </Link>
          </nav>

          <button className="inline-flex items-center text-white bg-[#6fddfb] py-1 px-3  rounded border  border-[#6fddfb] focus  hover:bg-white  mt-4 md:mt-0 hover:text-[#6fddfb] ">
            <h1>Download CV</h1>
            <AiOutlineCloudDownload className="text-xl ml-2" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
