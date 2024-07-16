import Image from 'next/image'
import React from 'react'
import '../app/font.css';

const YouTube = () => {
  return (
  
  
  <div className='w-100 h-auto bg-[#E6F2F7] pb-10 pt-10'>
 <div className='relative overflow-hidden container m-auto sm:px-6 px-6 w-100' >
       <img
        src="/curvesm.svg"
        alt="arw"
        className="absolute  w-[52rem] -right-56 top-2 z-10"
      />
    <div className=' md:py-24 md:space-y-14  sm:px-14'>
       
        <h1 className='md:text-[60px]  text-[#007EAF] text-[1.7rem]' style={{fontFamily: 'Proxima-Nova-Bold, sans-serif', lineHeight: '50.6px'}}>Introducing: A new wedlock experience
        </h1>
        <p className='text-[18px] sm:text-xl text-[#101828E5] pt-10' style={{fontFamily: 'Proxima-Nova-Regular, sans-serif', lineHeight: '30px', letterSpacing:'2px'}}>Your search for a great relationship has never been easier with <br /> groundbreaking overhaul of the eharmony you know and trust.
        </p>
        <h4 className='xl:text-[28px] text-[#007EAF] pt-10 text-[1.5rem]' style={{fontFamily: 'Proxima-Nova-ExtraBold, sans-serif',letterSpacing:'3px', lineHeight: '39.2px'}}>Get a sneek peek:</h4>
        <Image src="/YT.svg" width={1224} height={665} alt='yt' className='relative left-2 z-0 mt-8'/>
    </div>
    
    
    </div>

  </div>
 
  )
}

export default YouTube