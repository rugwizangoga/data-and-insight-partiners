'use client'

import Image from 'next/image';

import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaTiktok } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full">
        <div className="bg-gray-200 py-12">
            <div className="px-8 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <div className="mb-6">
            <a href="/">
        <Image
          className='pb-2'
            src="/logo-no-background.png" // Update this path as per your file location
            width={200}
            height={200}
            alt="logo image"
          />
        </a>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <ul>
                <p className="mb-3 text-lg font-semibold text-black-900">Services</p>
                {['Overview', 'Features', 'Solutions', 'Tutorials'].map((item, index) => (
                    <li key={index}>
                    <a href="#" className="block py-1.5 text-base text-gray-700 transition-colors hover:text-blue-gray-900">
                        {item}
                    </a>
                    </li>
                ))}
                </ul>
                <ul>
                <p className="mb-3 text-lg font-semibold text-black">Company</p>
                {['About us', 'Careers', 'Press', 'News'].map((item, index) => (
                    <li key={index}>
                    <a href="#" className="block py-1.5 text-base text-gray-700 transition-colors hover:text-blue-gray-900">
                        {item}
                    </a>
                    </li>
                ))}
                </ul>
                <ul>
                <p className="mb-3 text-lg font-semibold text-black">Resource</p>
                {['Blog', 'Newsletter', 'Events', 'Help center'].map((item, index) => (
                    <li key={index}>
                    <a href="#" className="block py-1.5 text-base text-gray-700 transition-colors hover:text-blue-gray-900">
                        {item}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        <div className="bg-black">
            <div className="px-8 mx-auto max-w-7xl flex items-center justify-between w-full pt-4 border-t border-blue-gray-50 md:flex-row">
                <p className="mb-4 text-sm font-normal leading-normal text-center text-white md:mb-0">
                © 2024 Data&insights Partners. All Rights Reserved.
                </p>
                <div className="flex gap-4 py-4 text-white justify-center text-xl">
                    <RiInstagramFill />
                    <FaFacebook />
                    <BsTwitterX />
                    <FaYoutube />
                    <AiFillTikTok />
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
