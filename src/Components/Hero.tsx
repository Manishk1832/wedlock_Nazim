"use client";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import '../app/globals.css';
import heroImg from './Hero.png';

function Hero() {
 


  return (
    <div className="relative hero_section bg-black h-auto overflow-hidden  bg-center  top-0 py-0   sm:py-0 3xl:h-[69rem]  xl:h-[40rem]  5xl:h-[57rem]   4xl:h-[62rem]  "  style={{ backgroundImage: `url(${heroImg.src})`,width:'100%',  // Zoom effect (adjust percentage as needed)
  }}
>




      <div className="absolute inset-0 ">
        
        {/*  
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-1 md:gap-2 rotate-12 sm:rotate-12 h-full scale-[1.39] bg-black">
          {imagePaths.map((path, index) => (
            <div key={index} className="relative w-full h-full bg-black">
              <Image src={path} layout="fill" objectFit="cover" alt={`Image ${index + 1}`}  />
            </div>
          ))}
        </div>

        */}
      </div>

      
      <div className="relative 3xl:pl-30   bg-black bg-opacity-60 text-white h-full md:pl-16 md:flex md:pt-32 pt-16 md:px-10 gap-80 ">
        <div className="space-y-20 xl:pt-10 lg:relative lg:bottom-10 5xl:pt-40 2xl:px-20 2xl:pt-60">
          <div className="flex flex-col justify-center gap-5 w-full ml-7    sm:gap-10 sm:ml-10  mt-5 sm:mt-10 3xl:pt-12 hero_content" >
            <h1
              className="text-[48px]  md:text-4xl mt-10 md:mt-0 xl:text-8xl font-bold"
              style={{ fontFamily: 'Proxima-Nova-Bold, sans-serif', letterSpacing: '2px' }}
            >
              Love At <br /> First Swipe
            </h1>
            <p
              className="sm:text-[36px]  text-white text-[20px] sm:leading-[50.4px]"
              style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif', letterSpacing: '2%' }}
            >
              Australia's most trusted Matrimony <br /> Website and Mobile
              Application
            </p>
          </div>
          <div className="absolute top-[60px] right-[130px] backdrop-blur backdrop-brightness-125 rounded-3xl w-[25%] h-[73%]   border-8 border-white-2 flex items-center justify-center hidden  md:block 3xl:mr-[5%] lg:hidden" ></div>
         
          <Link
            href={"/questions"}
            className="flex items-center justify-between bg-[#009BDA] rounded-full w-56 h-12 px-5 text-lg ml-10 relative xl:relative bottom-2 xl:bottom-5"
          >
            <div className="flex items-center gap-6 ">
              <span>Start free today</span>
              <span className="text-xl">
                <IoMdArrowForward />
              </span>
            </div>
          </Link>
        </div>
        <div
          className="absolute bottom-0 right-0 sm:pt-40 md:bottom-0 xl:bottom-40 xl:left-[70rem] 2xl:left-[80rem] hidden md:block 3xl:ml-[18%]  "
          style={{ transform: 'translateY(50%)' }}
        >
          <div className="flex flex-col items-center gap-2 w-40   xl:absolute xl:bottom-[6%]">
            <Image src="/veri.png" width={50} height={50} alt="logo" />
            <p
              className="text-center md:text-[14px]"
              style={{ fontFamily: 'Proxima-Nova-Bold, sans-serif' }}
            >
              #1 matrimony <br /> website and mobile <br /> app
            </p>
            <p
              className="text-[6px] md:text-[10px] mt-1"
              style={{ fontFamily: 'Proxima-Nova-Thin, sans-serif' }}
            >
              All photos are used for illustrative purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
