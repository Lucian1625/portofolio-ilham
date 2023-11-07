import React from "react";
import imgdesain from "./storage/PortofolioDesgin.jpeg";

const CardDesain = () => {
  return (
      <div className="group relative bg-blue-kc shadow-2xl rounded-lg drop-shadow-2xl  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={imgdesain}
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 translate-y-[80%] items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-24">
          <h1 className="font-dmserif text-3xl font-bold text-white">Design</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolore adipisci placeat.
          </p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
  );
};

export default CardDesain;
