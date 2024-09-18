import React from 'react'
import Image from 'next/image';
import { AboutUs } from '../../components/About Us/AboutUs';
const About = () => {
  return (
    <div>  
      <section className="relative w-full h-[800px]">
        <Image
            src="/Images/business.jpg"
            alt="Description of the image"
            fill={true}
            objectFit="cover"
            className="w-full h-[800px]"
          />
        <div className='absolute inset-0 bg-black bg-opacity-75 z-1'></div>
        <div className="relative z-5 flex flex-col items-start container md:w-7/12 lg:w-5/12 h-[800px] m-auto justify-center gap-2">
          <h1 className="text-6xl font-bold text-white relative inline-block">
            ABOUT US
            <span className="absolute left-0 bottom-0 -ml-1 -mb-1 h-2 w-full bg-orange-800"></span>
          </h1>
          <h2 className="text-3xl font-extrabold text-white mt-8 mb-4">
            DATA & INSIGHT PARTNERS IS NOT JUST A DATA ANALYTICS COMPANY
          </h2>
          <p className="text-lg text-white">
            Our custom solutions become our projects for life — we build them from scratch, help to launch and promote them on the market, and offer ongoing support and maintenance.
          </p>
        </div>
      </section>
      <AboutUs />
    </div>
  );
}

export default About
