import React from "react";
import img1 from "./storage/meNew.png";
import aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  aos.init()
  let DeskripsiDiri =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere placeat nobis ipsa ipsam iure quaerat est eveniet, numquam vero et totam hic molestiae ut. Id esse omnis sint saepe inventore?";
  return (
    <div
      id="Home"
      className="grid h-screen bg-fixed z-10 drop-shadow-lg relative grid-flow-row-dense grid-cols-7 grid-rows-3 place-items-center bg-rose-white"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="col-span-7 lg:col-span-4 items-center z-10 row-span-3 mb-10 ml-7"
      >
        <div className="font-bold text-shushime">- Hi I'am -</div>
        <p className="flex mt-2 text-blue-kc gap-6 text-2xl md:text-4xl">
          ILHAM AHSAN SAPUTRA
        </p>
        <div className="mt-2 text-blue-kc">{DeskripsiDiri}</div>
        <div className="-z-10 flex">
          <button className="rounded-lg drop-shadow-lg mt-6 w-26  sborder-solid border-2 hover:border-shushime text-white hover:bg-rose-white bg-shushime hover:text-shushime">
            <div className="mx-2 flex my-1">
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 mt-1 ml-1.5 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a.75.75 0 01.75.75v12.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
          <button className="rounded-lg ml-4 mt-6 w-26 drop-shadow-lg sborder-solid border-2 border-shushime text-shushime hover:text-rose-white bg-rose-white hover:bg-shushime ">
            <div className="mx-2 flex my-1">
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 mt-0.5 ml-2 h-5"
              >
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 h-[90%]] z-0 right-0">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="-z-50 lg:z-30 hidden lg:flex row-span-3 w-full"
        >
          <img
            src={img1}
            alt="it's me"
            className="row-span-3 z-20 mb-[-6px] w-full h-screen"
          />
        </div>
      </div>

      {/*SVG Sections */}
      <div className="absolute opacity-50 top-[45%] right-20 lg:top-[36%] lg:right-20 ">
        <svg
          data-aos="fade-up"
          data-aos-duration="2400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 fill-shushime stroke-shushime h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
          />
        </svg>
      </div>
      <div className="absolute opacity-50 top-[10%] right-[15%] ">
        <svg
          data-aos="fade-up"
          data-aos-duration="2700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 fill-shushime stroke-shushime h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
          />
        </svg>
      </div>
      <div className="absolute opacity-50 invisible lg:visible top-[40%] right-[38%] ">
        <svg
          data-aos="fade-up"
          data-aos-duration="1000"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 fill-shushime stroke-shushime h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
          />
        </svg>
      </div>
      <div className="absolute opacity-50 top-[18%] lg:top-[25%] left-[10%] ">
        <svg
          data-aos="fade-up"
          data-aos-duration="2600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 fill-shushime stroke-shushime h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
          />
        </svg>
      </div>
      <div className="absolute opacity-50 top-[70%] left-[20%] lg:left-[40%]  ">
        <svg
          data-aos="fade-up"
          data-aos-duration="2300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-10 fill-shushime h-10"
          stroke="orange"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"
          />
        </svg>
      </div>

      {/* Svg Panah */}
      <div className="absolute top-[80%] right-[10%] drop-shadow-2xl lg:top-[80%] lg:right-[30%]  ">
        <svg
        data-aos="fade-down"
          data-aos-duration="2300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-20 stroke-shushime h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div className="absolute invisible lg:visible lg:top-[80%] lg:right-[30%] ">
        <svg
        data-aos="fade-down"
          data-aos-duration="2300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-20  stroke-shushime h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* svg color pallet */}
      <div className="absolute top-[86%] left-[2%] ">
      
      </div>
    </div>
  );
};

export default Hero;