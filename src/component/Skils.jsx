import React from 'react'

const Skils = () => {
  return (
    <>
      <div id="Skills" className="h-screen w-full grid grid-cols-2 grid-rows-6 top-0 bg-rose-white">
        <div className='grid col-span-2 mb-0 justify-items-center'>
          <div className="mt-auto text-shushime text-lg font-bold">why choose me?</div>
        </div>
        <div className='grid text-blue-kc text-3xl font-bold px-0 lg:px-0 text-center col-span-2 lg:justify-items-center lg:text-6xl'>My Experieance Area</div>
        <div className='p-8 py-0 lg:py-4 col-span-2 lg:col-span-1'>
          <label className='text-shushime text-xl ml-4' htmlFor="">Desgin</label>
          <div className='relative'>
            <div className="static mt-4 top-0 w-full rounded-full z-10 bg-slate-400">
              <div className='bg-blue-kc w-[75%] text-blue-kc rounded-full'>I</div>
            </div>
          </div>
        </div>
          <div className='p-8 py-0 lg:py-4 col-span-2 lg:col-span-1'>
            <label className='text-shushime text-xl ml-4' htmlFor="">MongoDB</label>
            <div className='relative'>
              <div className="static mt-4 top-0 w-full rounded-full z-10 opacity-100 bg-slate-400">
                <div className='bg-blue-kc w-[40%] shadow-lg opacity-100 text-blue-kc rounded-full'>I</div>
              </div>
            </div>
        </div>
        <div className='p-8 py-0 lg:py-4 col-span-2 lg:col-span-1'>
          <label className='text-shushime text-xl ml-4' htmlFor="">React JS</label>
          <div className='relative'>
            <div className="static mt-4 top-0 w-full rounded-full z-10  bg-slate-400">
              <div className='bg-blue-kc w-[65%] text-blue-kc rounded-full'>I</div>
            </div>
          </div>
        </div>
        <div>

          <div className='lg:px-8 lg:py-4 hidden lg:block '>
            <label className='text-shushime text-xl ml-4' htmlFor="">HTML</label>
            <div className='relative'>
              <div className="static mt-4 top-0 w-full rounded-full z-10  bg-slate-400">
                <div className='bg-blue-kc w-[90%] text-blue-kc rounded-full'>I</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:px-8 lg:py-4 hidden lg:block">
          <label className='text-shushime text-xl ml-4' htmlFor="">Tailwind CSS</label>
          <div className='relative'>
            <div className="static mt-4 top-0 w-full rounded-full z-10  bg-slate-400">
              <div className='bg-blue-kc w-[85%] text-blue-kc rounded-full'>I</div>
            </div>
          </div>
        </div>
          <div className="lg:px-8 lg:py-4 hidden lg:block">
            <label className='text-shushime text-xl ml-4' htmlFor="">Animation Web</label>
            <div className='relative'>
              <div className="static mt-4 top-0 w-full rounded-full z-10  bg-slate-400">
                <div className='bg-blue-kc w-[50%] text-blue-kc rounded-full'>I</div>
              </div>
            </div>
          </div>
      </div>

    </>
  )
}

export default Skils