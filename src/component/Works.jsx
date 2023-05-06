import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const Works = () => {
  AOS.init();
  AOS.refresh();  
  return (
    <div id="work" className='h-screen bg-rose-white'>
      <div className="lg:text-5xl text-2xl lg:py-14 text-black py-16 text-center">Service.</div>
      <div className="grid grid-cols-2 lg:grid-cols-3 px-6 h-[80%] lg:h-[80%] py-6 gap-6">
        <div className="text-center lg:h-[255px] h-[216px] block bg-white shadow-lg">
          <div className="lg:flex lg:mt-3 lg:justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex shadow-lg lg:justify-items-center w-14 h-14 lg:mt-0 lg:ml-0 mt-6 ml-6 text-black lg:justify-self-center bg-rose-white justify-center rounded-full p-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </div>
          <div className='p-3'>
            <div className='lg:mt-4 py-2 text-center text-xl text-black'>IT Suport</div>
            <div className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div  className="text-center lg:h-[255px] h-[216px] bg-white shadow-lg">
          <div className="lg:flex lg:mt-3 lg:justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex shadow-lg lg:justify-items-center w-14 h-14 lg:mt-0 lg:ml-0 mt-6 ml-6 text-black lg:justify-self-center bg-rose-white justify-center rounded-full p-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </div>
          <div className='p-3'>
            <div className='lg:mt-4 py-2 text-center text-xl text-black'>Web Desgin</div>
            <div className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className="text-center lg:h-[255px] h-[216px] bg-white shadow-lg">
          <div className="lg:flex lg:mt-3 lg:justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex shadow-lg lg:justify-items-center w-14 h-14 lg:mt-0 lg:ml-0 mt-6 ml-6 text-black lg:justify-self-center bg-rose-white justify-center rounded-full p-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </div>
          <div className='p-3'>
            <div className='lg:mt-4 py-2 text-center text-xl text-black'>Creative Desgin</div>
            <div className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className="text-center lg:h-[255px] h-[216px] bg-white shadow-lg">
          <div className="lg:flex lg:mt-3 lg:justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex shadow-lg lg:justify-items-center w-14 h-14 lg:mt-0 lg:ml-0 mt-6 ml-6 text-black lg:justify-self-center bg-rose-white justify-center rounded-full p-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </div>
          <div className='p-3'>
            <div className='lg:mt-4 py-2 text-center text-xl text-black'>Devplopment</div>
            <div className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className="text-center lg:h-[255px] h-[216px] bg-white shadow-lg">
          <div className="lg:flex lg:mt-3 lg:justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex shadow-lg lg:justify-items-center w-14 h-14 lg:mt-0 lg:ml-0 mt-6 ml-6 text-black lg:justify-self-center bg-rose-white justify-center rounded-full p-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </div>
          <div className='p-3'>
            <div className='lg:mt-4 py-2 text-center text-xl text-black'>Branding</div>
            <div className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className="text-center lg:h-[255px] h-[216px] bg-white shadow-lg">
          <div className="lg:flex lg:mt-3 lg:justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex shadow-lg lg:justify-items-center w-14 h-14 lg:mt-0 lg:ml-0 mt-6 ml-6 text-black lg:justify-self-center bg-rose-white justify-center rounded-full p-1 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
            </svg>
          </div>
          <div className='p-3'>
            <div className='lg:mt-4 py-2 text-center text-xl text-black'>Mobile App Desgin</div>
            <div className="text-center text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works