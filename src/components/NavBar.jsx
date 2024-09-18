'use client';
import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from 'next/image';
import Getintouch from './Getintouch';

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className={`p-1 font-bold text-base ${isScrolled ? 'text-black' : 'text-white'}`}
      >
        <a href="/" className="flex items-center hover:text-orange-800 hover:text-lg hover:cursor-pointer">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className={`p-1 font-bold text-base ${isScrolled ? 'text-black' : 'text-white'}`}
        >
        <a href="/Services" className="flex items-center hover:text-orange-800 hover:text-lg hover:cursor-pointer">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className={`p-1 font-bold text-base ${isScrolled ? 'text-black' : 'text-white'}`}
          >
        <a href="/About" className="flex items-center hover:text-orange-800 hover:text-lg hover:cursor-pointer">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className={`p-1 font-bold text-base ${isScrolled ? 'text-black' : 'text-white'}`}
      >
        <a href="/Contact" className="flex items-center hover:text-orange-800 hover:text-lg hover:cursor-pointer">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px]">
      <Navbar className={`fixed z-10 h-max max-w-full rounded-none border-none px-4 py-2 lg:px-8 lg:py-4 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-gray-400 bg-opacity-30'}`}>
        <div className="flex items-center justify-between">
          <a href="/">
            <Image
              className='pb-2'
              src="/Images/logo.png" // Update this path as per your file location
              width={220}
              height={220}
              alt="logo image"
            />
          </a>
          <div className="flex gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block transition-transform duration-500 ease-in-out hover:scale-110"
                onClick={() => setShowPopup(true)}
              >
                <span className='text-base'>Get In Touch</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className={`ml-auto h-6 w-6 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex gap-x-1">
            <Button 
              variant="gradient" 
              size="sm" 
              className="transition-transform w-fit ml-1 mb-1 duration-500 ease-in-out hover:scale-110"
              onClick={() => setShowPopup(true)}
            >
              <span>Get In Touch</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
      {showPopup && <Getintouch onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default NavBar;
