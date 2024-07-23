"use client";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import '../app/globals.css';
import heroImg from './Hero.png';

function Hero() {



  return (
    <div className="relative hero_section  bg-black  overflow-hidden 7xl:h-[100vh]   top-0 py-0   sm:py-0 3xl:h-[100vh]  xl:h-[100vh]   5xl:h-[100vh]   4xl:h-[100vh]  " style={{
      backgroundImage: `url(${heroImg.src})`, width: '100%',  // Zoom effect (adjust percentage as needed)
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


      <div className="relative 3xl:pl-30   bg-black bg-opacity-60 text-white h-full md:pl-16 md:flex md:pt-32 md:px-10 gap-80 ">
        <div className="space-y-20 xl:pt-5 lg:relative lg:bottom-10 5xl:pt-40 2xl:px-20 2xl:pt-60  xl:w-[100%]">
          <div className=" text-center  xl:w-[100%]     hero_content   xl:pt-12 5xl:relative 5xl:bottom-28 8xl:relative 8xl:bottom-[12rem]" >
            <h1
              className="text-[48px]   xl:text-[123px] font-white-700"
              style={{ fontFamily: 'Proxima-Nova,', lineHeight: '149.81px', letterSpacing: '2%' }}
            >
              Love At First Swipe
            </h1>
            <p
              className="sm:text-[36px]  text-white-400 text-[28px] xl:text-28 sm:leading-[50.4px] xl:pt-8"
              style={{ fontFamily: 'Proxima-Nova-Regular,', lineHeight: '42px', letterSpacing: '2%' }}
            >
              Australia's most trusted Matrimony  Website and  <br />Mobile
              Application
            </p>

            <Link
              href={"/questions"}
              className="flex items-center justify-between xl:mt-16 bg-[#009BDA] rounded-full w-[249px] h-[60.46px] xl:pl-10 text-[20px] xl:m-auto text-white-700" style={{ fontFamily: 'Proxima-Nova-Regular,', lineHeight: '48px', }}
            >
              <div className="flex items-center gap-6 text-white-700">
                <span >Start free today</span>
                <span className="text-xl xl:w-[35px] xl:h-[35]">
                  <IoMdArrowForward  />
                </span>
              </div>
            </Link>
          </div>

          {/* mobile card in hero section 
          <div className="absolute top-[60px] right-[130px] backdrop-blur backdrop-brightness-125 rounded-3xl w-[25%] h-[73%]   border-8 border-white-2 flex items-center justify-center hidden  md:block 3xl:mr-[5%] lg:hidden" ></div>
         */}


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
