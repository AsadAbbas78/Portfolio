import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='font-senrif mt-8'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl  mb-4 font-bold text-yellow-500">
        I am Asad Abbas
        <br className="hidden lg:inline-block " />
      <p className='text-sm mt-2 text-[#6fddfb]'>web Developer</p>
      </h1>
      <p className="mb-8 leading-relaxed ">
      As an experienced web developer, I bring a wealth of expertise and insight to every project I undertake. With years of hands-on experience in the field, I have honed my skills in various programming languages, frameworks, and development methodologies.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#6fddfb] border rounded border-[#6fddfb] focus py-2 px-6 focus:outline-none hover:text-[#6fddfb] hover:bg-white text-lg">
          Lets Talk
        </button>
        <button className="ml-4 inline-flex text-[#6fddfb] bg-white border rounded border-[#6fddfb] py-2 px-6 focus:outline-none hover:bg-[#6fddfb]  hover:text-white text-lg">
          Hire Me
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-80 md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require('../../../public/assests/logo/logo44.png')}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero