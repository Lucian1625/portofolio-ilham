import React from "react";

const Hamburger = () => {
  return (
    <div className="dropdown dropdown-bottom bg-rose-white  dropdown-end">
      <label tabIndex={0} className="border-transparent m-1">
        <label className=" btn-circle bg-rose-white border-transparent swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          {/* hamburger icon */}
          <svg
            className="swap-off  fill-blue-kc"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          {/* close icon */}
          <svg
            className="swap-on fill-blue-kc"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-blue-kc rounded-box w-52"
      >
        <li>
          <a rel="stylesheet" href="#Home">
            Home
          </a>
        </li>
        <li>
          <a rel="stylesheet" href="#About">
            About
          </a>
        </li>
        <li>
          <a rel="stylesheet" href="#Skils">
            Skils
          </a>
        </li>
        <li>
          <a rel="stylesheet" href="#Blog">
            Blog
          </a>
        </li>
        <li>
          <a rel="stylesheet" href="#Service">
            Service
          </a>
        </li>
        <li>
          <a rel="stylesheet" href="#Contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
