import React from "react";
import Hamburger from "./Hamburger";

const NavBar = () => {
  return (
    <>
      <div className="h-16 w-full  z-20 top-0 flex p-2 bg-rose-white justify-between ">
        <p className="font-bold  text-blue-kc mt-2 ml-4 text-3xl'">
          PORTOFÓLIO.
        </p>
        <div className="hidden ml-2 mt-2 text-blue-kc list-none md:flex">
          <li className="hover:text-shushime transition duration-400 ease-in-out">
            <a rel="stylesheet" href="#Home">
              Home
            </a>
          </li>
          <li className="hover:text-shushime transition duration-400 ease-in-out">
            <a rel="stylesheet" href="#About">
              About
            </a>
          </li>
          <li className="hover:text-shushime transition duration-400 ease-in-out">
            <a rel="stylesheet" href="#Skills">
              Skills
            </a>
          </li>
          <li className="hover:text-shushime transition duration-400 ease-in-out">
            <a rel="stylesheet" href="#Blog">
              Blog
            </a>
          </li>
          <li className="hover:text-shushime transition duration-400 ease-in-out">
            <a rel="stylesheet" href="#Work">
              Works
            </a>
          </li>
          <li className="hover:text-shushime transition duration-400 ease-in-out">
            <a rel="stylesheet" href="#Contact">
              Contact
            </a>
          </li>
        </div>
        <div className="lg:hidden    bg-rose-white">
          <div className="">
            <Hamburger />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
