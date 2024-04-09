import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiYoutube } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='font-serif'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image
              src={require("../component../../../../public/assests/logo/parrot_logo1.png")}
              alt="web"
              width={100}
              height={100}/>
        <span className="ml-3 text-xl">ASAD ABBAS</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
    
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-sm mb-3">
          Company
        </h2>
        <nav className="list-none mb-10">
          <li>
        <Link href="" className=' hover:text-[#6fddfb]'>About Us</Link>
        </li>
        <li>
        <Link href="" className=' hover:text-[#6fddfb]'>Careers</Link>
        </li>
        <li>
        <Link href=""className=' hover:text-[#6fddfb]' >Events</Link>
        </li>
        <li> 
        <Link href="#Contact" className=' hover:text-[#6fddfb]' >Contact Us</Link>
        </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-sm mb-3">
          Resources
        </h2>
        <nav className="list-none mb-10">
          <li>
        <Link href="" className='hover:text-[#6fddfb]'>Resources Hub</Link>
          </li>
          <li>
            <Link href="" className='hover:text-[#6fddfb]'>Blog</Link>
          </li>
          <li>
        <Link href="" className='hover:text-[#6fddfb]'>Learn More</Link>
          </li>
          <li>
            <Link href="" className='hover:text-[#6fddfb]'></Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-black tracking-widest text-sm mb-3">
          Solutions
        </h2>
        <nav className="list-none mb-10">
          <li>
        <Link href="" className='hover:text-[#6fddfb]'>Explainable AI</Link>
          </li>
          <li>
            <Link href="" className='hover:text-[#6fddfb]'> Ml monitoring</Link>
          </li>
         
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h1 className="title-font    font-bold text-black tracking-widest text-xl mb-3 ">
          Subscriber
        </h1>



        <nav className="list-none mb-10">
          
        <label className="relative">
  <input type="input"className='h-10 w-[200px] px-6 text-xl bg-white rounded border border  border-[#6fddfb]   ' />
  <span className='absolute left-1 ml-3 mt-2 '>Email or Phone</span>

  <input type="input"className='mt-3 h-10 w-[200px] px-6 text-xl bg-white rounded border border  border-[#6fddfb]   ' />
  <span className='absolute left-1 ml-3 mt-5 '>Password</span>


        </label>


        <button className="inline-flex text-white  py-2 bg-[#6fddfb]  hover:text-[#6fddfb] px-7 mt-5 ml-10 focus:outline-none hover:bg-white  rounded border  border-[#6fddfb] focus">
  Button
</button>

        </nav>
      </div>
    </div>
  </div>
  <div className= "bg-[#6fddfb] hover:bg-white  hover:text-[#6fddfb]  rounded border  border-[#6fddfb] focus">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-black text-sm text-center sm:text-left hover:text-[#6fddfb]">
        © 2024 ASAD ABBAS —
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-black hover:text-[#6fddfb] ml-1"
          target="_blank"
        >
          @knyttneve
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
         
          
            
        </a>
        <a className="ml-3 text-2xl text-black  hover:text-[#6fddfb]">
        <FiYoutube />
        </a>
        <a className="ml-3 text-2xl text-black  hover:text-[#6fddfb]">
          
        <FaFacebookF />
        </a>
        <a className="ml-3 text-2xl text-black  hover:text-[#6fddfb]">
        <FaWhatsapp />
        </a>
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer



