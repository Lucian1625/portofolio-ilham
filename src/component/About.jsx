import React from "react";
import CardDesain from "./CardDesain";
import CardCoders from "./CardCoders";
import Image1 from "./storage/AboutAsset2.png";
import Image2 from "./storage/AboutAsset.png";
import LinkedIn from "./storage/svg.js";
// import TwitterIcon from "./storage/svg1";
// import FacebookIcon from "./storage/svg2";
// import AOS from "aos";
import "aos/dist/aos.css";
// import aos from "aos";

const About = () => {
  
  // let sectionAbout = "About Me";
  // let dectipsidiri =
  //   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere placeat nobis ipsa ipsam iure quaerat est eveniet, numquam vero et totam hic molestiae ut. Id esse omnis sint saepe inventore?";

  return (
    <>
      <div
        id="About"
        className="grid-rows-3 relative grid-flow-col top-0 w-full lg:h-128 h-96 z-40 bg-blue-kc grid grid-cols-3"
      >
        {/* <div className="bg-rose-white relative w-full">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" className='absolute fill-blue-kc z-50' preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div> */}
        <div className="row-span-3 col-span-2 absolute z-0 h-full bg-blue-kc/10">
          <div className="h-full p-0 z-0 rounded-none">
            <div className="h-full  py-0 w-full">
              <img src={Image2} alt="" className="h-full w-full" />
            </div>
          </div>
        </div>
        <div className="row-span-3 right-0 col-start-3  absolute z-0 h-full bg-blue-kc/10">
          <div className="h-full p-0 mr-0 z-0 rounded-none">
            <div className="h-full py-0 w-full">
              <img src={Image1} alt="" className="h-full w-full" />
            </div>
          </div>
        </div>
        {/* description bio */}
        <div className="lg:col-span-1  invisible lg:visible lg:row-span-3">
          <div className="flex px-0 mt-16 items-center justify-center">
            <CardDesain />
          </div>
        </div>
        <div className="lg:col-span-1 lg:row-span-2 z-40 text-black col-end-1 mt-[-6%] row-span-3">
          <p className="ml-[38%] lg:invisible mt-20 mr-6 text-shushime text-1xl">
            Bio
          </p>
          <p className="lg:text-center lg:mt-20 lg:text-2xl lg:ml-0 ml-[38%] mr-6 text-2xl text-rose-white">
            About
          </p>
          <p className="lg:text-center lg:mt-0 lg:text-1xl lg:ml-0 ml-[38%] mt-2 mr-6 text-1xl text-rose-white">
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            placeat nobis ipsa ipsam iure quaerat est eveniet, numquam vero et
            totam hic molestiae ut."
          </p>
          <div className="flex ml-[38%] mt-2 gap-4">
            <div>
              <LinkedIn />
            </div>
            <div>
              <LinkedIn />
            </div>
            <div>
              <LinkedIn />
            </div>
          </div>
        </div>
        <div className="lg:row-span-1 gap-5 grid grid-cols-2 mt-10">
          <div className="text-left">
            <div>I'am as Designer</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 ml-0 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </div>
          <div className="text-right">
            <div>I'am as Coders</div>
            <div className="ml-[90%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>  
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 invisible lg:visible lg:row-span-3">
          <div className="flex mt-16 items-center justify-center">
            <CardCoders />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
