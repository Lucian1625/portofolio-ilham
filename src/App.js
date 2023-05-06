import React from "react";
import About from "./component/About";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import Skils from "./component/Skils";
import Blog from "./component/Blog";
import Works from "./component/Works";
import Contact from "./component/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
// import { render } from "@testing-library/react";

function App() {
  AOS.init();
  AOS.refresh();
  // render()
  return (
    <>
      <div className="snap-y bg-rose-white scroll-smooth snap-mandatory h-screen overflow-scroll">
        <div className="snap-always snap-start">
          <NavBar />
          <Hero />
        </div>
        <div className="snap-always snap-center">
          <About />
        </div>
        <div className="snap-always snap-center">
          <Skils />
        </div>
        <div className="snap-always snap-center">
          <Blog />
        </div>
        <div className="bg-blue-kc">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            className="fill-rose-white lg:from-blue-kc lg:via-blue-kc lg:to-cyan-700 bottom-0 z-50"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
        <div className="snap-always snap-center">
          <Works />
        </div>
        <div className="bg-rose-white">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            className="fill-blue-kc lg:from-blue-kc lg:via-blue-kc lg:to-cyan-700 bottom-0 z-50"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
        <div className="snap-always snap-start">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
