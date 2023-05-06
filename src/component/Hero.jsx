import React from 'react';
import img1 from './storage/me1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    AOS.init();
    AOS.refresh();
    let DeskripsiDiri = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere placeat nobis ipsa ipsam iure quaerat est eveniet, numquam vero et totam hic molestiae ut. Id esse omnis sint saepe inventore?";
    return (
        <div id='Home' className='grid h-screen bg-fixed z-10 drop-shadow-lg grid-flow-row-dense grid-cols-3 grid-rows-3 place-items-center bg-rose-white'>
            <div data-aos="fade-right" data-aos-duration="700" className='col-span-2 items-center z-10 row-span-3 mb-10 ml-7'>
                <div className='font-bold text-shushime'>- Hi I'am -</div>
                <p className='flex mt-2 text-blue-kc gap-6 text-2xl md:text-4xl'>ILHAM AHSAN SAPUTRA</p>
                <div className="mt-2 text-blue-kc">{DeskripsiDiri}</div>
                <div className='-z-10 flex'>

                    <button className='rounded-lg drop-shadow-lg mt-6 w-26  sborder-solid border-2 hover:border-shushime text-white hover:bg-rose-white bg-shushime hover:text-shushime'>
                        <div className='mx-2 flex my-1'>
                            Contact Me
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 mt-1 ml-1.5 h-4">
                                <path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v12.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V2.75A.75.75 0 0110 2z" clipRule="evenodd" />
                            </svg>

                        </div>
                    </button>
                    <button className='rounded-lg ml-4 mt-6 w-26 drop-shadow-lg sborder-solid border-2 border-shushime text-shushime hover:text-rose-white bg-rose-white hover:bg-shushime '>
                        <div className='mx-2 flex my-1'>
                            Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 mt-0.5 ml-2 h-5">
                                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                            </svg>


                        </div>
                    </button>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="600" className="-z-50 lg:z-30 hidden lg:flex row-span-3 w-full">
                <img src={img1} alt="it's me" className='row-span-3 z-20 mb-[-6px] w-full h-screen'/>
            </div>
        </div>

    )
}

export default Hero