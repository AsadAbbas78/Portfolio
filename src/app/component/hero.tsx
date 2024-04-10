"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="font-serif">
      <section className="text-gray-600 body-font bg-gray-100 mt-8">
        <div className="container mx-auto flex px-20 py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=":text-4xl  ml-24 font-medium">
              <h1 className=" text-yellow-500 font-serif font-bold text-5xl">
                Hi.I.m Asad Abbas
              </h1>
              <br className="hidden lg:inline-block " />
              <h5 className="text-[#6fddfb] font-serif  text-2xl">
                Web Devloper
                
              </h5>
            </h1>
            <p className="mb-8 h-30 w-50 ml-24 mt-2 text-black font-serif">
              Hi, Im a passionate frontend web developer dedicated to creating
              engaging and user-friendly digital experiences. With a blend of
              creativity and technical skills, I specialize in crafting visually
              appealing and responsive websites that captivate audiences across
              various devices. My journey in web development began with a
              fascination for the intersection of design and technology. Over
              the years, I.ve honed my skills in Next.js, Tailwind CSS, and
              TypeScript, staying updated with the latest trends and best
              practices in the ever-evolving landscape of frontend development.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#6fddfb] mt-8 ml-24 hover:text-[#6fddfb] py-2 px-10  hover:bg-white rounded border  border-[#6fddfb] focus text-lg">
                Hire Me
              </button>

              <button className="inline-flex text-[#6fddfb] bg-white mt-8 ml-10 hover:text-white py-2 px-10  hover:bg-[#6fddfb] rounded border  border-[#6fddfb] focus text-lg">
                Let.s Talk
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <Image
              src={require("../../../public/assests/logo/logo44.png")}
              alt="web"
              width={350}
              height={300}
              className="ml-4 "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
