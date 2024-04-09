import React from 'react'

export const Contact = () => {
  return (
    <div id='Contact'className='font-serif' >
<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55769.253193330194!2d71.7028145654687!3d29.118127937995677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393bee325e55cf3f%3A0x59d8f6b6766cc70f!2sYazman%20Mandi%2C%20Bahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1712598193586!5m2!1sen!2s"
        vnb-frameid={3034}
        
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold  tracking-widest text-xs text-yellow-500">
            ADDRESS
          </h2>
          <p className="mt-1">
            Tehsil Yazman , District Bahawalpur , Punjab , Pakistan
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-yellow-500 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-black leading-relaxed">Assadgamerchannel1@email.com</a>
          <h2 className="title-font font-semibold text-yellow-500 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed text-black">03085147645</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className=" text-yellow-500   mb-1 font-bold title-font text-4xl ">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Feel free to contact
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm  text-[#6fddfb]  ">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border  border-[#6fddfb] focus:border-[#6fddfb] focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm  text-[#6fddfb]">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border  border-[#6fddfb] focus:border-[#6fddfb] focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm  text-[#6fddfb]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border  border-[#6fddfb] focus:border-[#6fddfb] focus:ring-2  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white hover:text-[#6fddfb] bg-[#6fddfb] hover:bg-white border rounded border-[#6fddfb] focus: py-2 px-6  text-lg">
        Send Message
      </button>
      <p className="text-xs text-gray-500 mt-3">
        
      </p>
    </div>
  </div>
</section>


    </div>
  )
}




