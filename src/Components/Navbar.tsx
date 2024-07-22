"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Login from './model/Login';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const isBlueBgRoute = pathname === "/mission" || pathname === "/advice" || pathname === "/help" || pathname === "/legal" || pathname === "";
  const hiddenRoutes = ["/verification", "/register", "/questions", "/login", "/forgotpassword", "/createpassword"];
  const isHiddenRoute = hiddenRoutes.includes(pathname);

  if (isHiddenRoute) {
    return null;
  }

  return (
    <>
      <div className={`absolute z-10 w-full h-auto 3xl:px-32  xl:px-10 text-white ${isBlueBgRoute ? 'bg-[#007eb0]' : ''}`}>



        <div className={`${isBlueBgRoute ? 'hidden' : 'h-2 xl:h-6 w-full z-10 bg-black xl:blur-[18px] blur-[40px]'}`}></div>

        <div className="flex justify-around items-center  container w-full  m-auto">

        <div className="flex px-3 xl:px-16 items-center justify-between  w-full">
          <div className='text-white '>
            <ul className='hidden md:flex gap-5 sm:mt-7 '>
              <li><Link href="/mission">Mission</Link></li>
              <li><Link href="/advice">Advice</Link></li>
              <li><Link href="/help">Help</Link></li>
            </ul>
          </div>
            <div className=" grid items-center text-center sm:pl-32">

              <div className="flex justify-around  items-center  md:my-0 ">

          
              <Image src="/Logo.svg" alt="logo" width={200} height={100} className="w-40 xl:w-[200px] md:h-[90px]   " />
              <h1 className="-rotate-90 relative top-2 md:top-4 mr-40 right-2 text-sm md:text-xl">.au</h1>
              </div>
            </div>


            <div className='flex gap-5 items-start  justify-center'>
              <button className='hidden md:flex items-center justify-center md:gap-3 text-white md:rounded-full rounded-3xl border-white border xl:w-32 w-20 md:h-10  px-3' onClick={openLogin}>
                Login
                <RiArrowDropDownLine className="text-5xl" />
              </button>
              <Image src="/Aus.svg" width={40} height={50} alt='lang' className='hidden md:block' />
              
              <button className="md:hidden text-1xl" onClick={toggleSidebar}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        <Login isOpen={isLoginOpen} onClose={closeLogin} />
      </div>


      <div className={`fixed top-0 left-0 h-full w-64 bg-[#007eb0] z-20 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-4">
          <Image src="/Logo.svg" alt="logo" width={100} height={50} />
          <button className="text-3xl text-white" onClick={toggleSidebar}>
            <RiCloseLine />
          </button>
        </div>
        <nav className="flex flex-col p-4 ">
          <Link href="/mission" className="py-2 text-white" onClick={toggleSidebar}>Mission</Link>
          <Link href="/advice" className="py-2 text-white" onClick={toggleSidebar}>Advice</Link>
          <Link href="/help" className="py-2 text-white" onClick={toggleSidebar}>Help</Link>
        </nav>
      </div>


      <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>

         </div>  
      
    </>
  );
}

export default Navbar;
