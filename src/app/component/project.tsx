import Link from "next/link";
import React from "react";
import Image from "next/image";
const Project = () => {
  return (
    <div id="Project">
      <section className="text-gray-600 body-font mt-5">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className=" text-4xl font-bold title-font mb-4 text-yellow-500">
              My Project
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-2 text-black">
              The web project encompasses a versatile platform crafted with
              HTML, CSS, and potentially other technologies. Its designed to
              cater to diverse user needs, featuring intuitive navigation,
              visually appealing elements.
            </p>
          </div>
          {/* project */}
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4  cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-[257px] object-cover object-center"
                  src={require("../../../public/assests/logo/Project1.webp")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-2 border-[#6fddfb] focus bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-2xl title-font font-medium text-[#6fddfb] mb-1">
                    Login Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-500 mb-3">
                    Business
                  </h1>
                  <p className="leading-relaxed   text-black line-clamp-2">
                    A login page crafted with HTML and CSS offers a seamless
                    user experience, blending aesthetic appeal with
                    functionality.
                  </p>
                  <Link href={""}>
                    <p className="leading-relaxed  text-[#6fddfb] mt-5 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4  cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/logo/Project2.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-2  border-[#6fddfb] focus bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest  title-font text-2xl font-medium text-[#6fddfb] mb-1">
                    Gym Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-500 mb-3">
                    Business
                  </h1>
                  <p className="leading-relaxed text-black line-clamp-2">
                    The gym project features a dynamic interface combining HTML
                    and CSS, offering users a visually engaging platform for
                    fitness management.
                  </p>

                  <Link href={""}>
                    <p className="leading-relaxed text-[#6fddfb]  mt-5 hover:underline ">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4  cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/logo/project4.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-2  border-[#6fddfb] focus bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest  title-font text-2xl font-medium text-[#6fddfb] mb-1">
                    Html Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-500 mb-3">
                    Business
                  </h1>
                  <p className="leading-relaxed text-black line-clamp-2">
                    The gym project features a dynamic interface combining HTML
                    and CSS, offering users a visually engaging platform for
                    fitness management.
                  </p>

                  <Link href={""}>
                    <p className="leading-relaxed text-[#6fddfb]  mt-5 hover:underline ">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4  cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/logo/project5.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-2  border-[#6fddfb] focus bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest  title-font text-2xl font-medium text-[#6fddfb] mb-1">
                    Contract Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-500 mb-3">
                    Business
                  </h1>
                  <p className="leading-relaxed text-black line-clamp-2">
                    The gym project features a dynamic interface combining HTML
                    and CSS, offering users a visually engaging platform for
                    fitness management.
                  </p>

                  <Link href={""}>
                    <p className="leading-relaxed text-[#6fddfb]  mt-5 hover:underline ">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4  cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/logo/project6.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-2  border-[#6fddfb] focus bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest  title-font text-2xl font-medium text-[#6fddfb] mb-1">
                    Templates Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-500 mb-3">
                    Business
                  </h1>
                  <p className="leading-relaxed text-black line-clamp-2">
                    The gym project features a dynamic interface combining HTML
                    and CSS, offering users a visually engaging platform for
                    fitness management.
                  </p>

                  <Link href={""}>
                    <p className="leading-relaxed text-[#6fddfb]  mt-5 hover:underline ">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4  cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/logo/project7.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-2  border-[#6fddfb] focus bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest  title-font text-2xl font-medium text-[#6fddfb] mb-1">
                    Logo Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-yellow-500 mb-3">
                    Business
                  </h1>
                  <p className="leading-relaxed text-black line-clamp-2">
                    The gym project features a dynamic interface combining HTML
                    and CSS, offering users a visually engaging platform for
                    fitness management.
                  </p>

                  <Link href={""}>
                    <p className="leading-relaxed text-[#6fddfb]  mt-5 hover:underline ">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
