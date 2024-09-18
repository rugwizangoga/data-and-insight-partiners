'use client'

import React from 'react';
import Image from 'next/image';
import Services from './../components/services';
import Testimonials from './../components/Testimonials';
import TeamSection from './../components/TeamSection';
import { Introduction } from '../components/Introduction';
function Homepage() {
  return (
    <div>
      <div className='relative w-full h-[800px]'>
        <Image
          src="/Images/main.jpg"
          alt="Description of the image"
          fill={true}
          objectFit="cover"
          className="w-full h-[800px]"
        />
        {/* Dark Overlay with RGBA color */}
        <div className='absolute inset-0 bg-black bg-opacity-60 z-1'></div>
        {/* Text Content */}
        <div className='relative z-5 flex flex-col items-start container h-[800px] m-auto justify-center gap-9'>
          <h1 className='text-4xl font-bold text-white animate-slideInFromTop animation-delay-100 transition-transform duration-500 ease-in-out hover:scale-110'>
            WELCOME TO DATA & INSIGHT PARTNERS
          </h1>
          <p className='text-md text-white animate-slideInFromRight animation-delay-300 transition-transform duration-500 ease-in-out hover:scale-110'>
            Unlock the full potential of your data with our expert solutions.<br />
            Drive strategic growth with actionable insights and tailored data strategies.<br />
            Transform your business with our comprehensive data services.
          </p>
          <button className='bg-orange-800 text-white font-bold px-12 py-3 rounded-3xl
            hover:bg-orange-500
            transition-transform duration-500 ease-in-out hover:scale-110 
            animate-slideInFromBottom animation-delay-500'>
            Learn More
          </button>
        </div>
      </div>
      <div>
        {/* Add the Services component below the main section */}
        <Services />
      </div>
      <div>
        {/* Add the TeamSection component below the Services section */}
        <TeamSection />
      </div>
        {/* Add the Testimonials component below the Services component */}
      <div>
        <Testimonials />
      </div>
      <div>
        {/* Add the Introduction component below the Testimonials component */}
        <Introduction />
      </div>
    </div>
  );
}

export default Homepage;
