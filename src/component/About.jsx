import React from 'react'
import Image2 from "./storage/me2.jpg"
import LinkedIn from "./storage/svg.js"
import TwitterIcon from "./storage/svg1"
import FacebookIcon from "./storage/svg2"


const About = () => {
  let sectionAbout = "About Me"
  let dectipsidiri = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere placeat nobis ipsa ipsam iure quaerat est eveniet, numquam vero et totam hic molestiae ut. Id esse omnis sint saepe inventore?"
  let name = "Ilham Ahsan Saputra"
  let noPhone = "+62 822-9895-7911"
  let mail = "ilhamahsansaputra@gmail.com"

  return (
    <>
    <div id="About" className='grid-rows-3 grid-flow-col top-0 w-full h-auto lg:h-screen z-40 bg-blue-kc grid grid-cols-3'>
    {/* <div className="bg-rose-white relative w-full">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" className='absolute fill-blue-kc z-50' preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div> */}
      <div className='row-span-3 h-full bg-rose-white'>
        <img src={Image2} alt="" className='h-full bg-cover'/>
      </div>
      {/* description bio */}
      <div className="row-span-3 px-6 py-16 text-rose-white col-span-2 lg:p-16 place-items-center">
        <div className='lg:mt-12 mt-0 bold text-2xl text-shushime'>Bio</div>
        <div className='text-5xl my-4'>{sectionAbout}</div>
        <div className="text-xl mt-2">{dectipsidiri}</div>
          <div className="grid mr-10 grid-cols-3 mt-10 lg:mr-16">

          <LinkedIn  />
          <TwitterIcon />
          <FacebookIcon />

          </div>
        <div className="hidden p-6 mt-12">
          <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-shushime mr-4 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="">Name</div>
            <div className="ml-[67px] mr-16">:</div>
            <div className="">{name}</div>
          </div>
          <div className="my-4 flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-shushime mr-4 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <div className="">Phone</div>
            <div className=" mx-16">:</div>
            <div className="">{noPhone}</div>
          </div>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-shushime mr-4 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
            </svg>

            <div className="">Mail</div>
            <div className="ml-[78px] mr-16">:</div>
            <div className="">{mail}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About