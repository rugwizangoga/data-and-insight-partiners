'use client'

import React from "react";
import { Button, Input, Textarea, Typography, Select, Option } from "@material-tailwind/react";
import { Map, APIProvider, Marker } from "@vis.gl/react-google-maps";
import Image from "next/image";
import { MdEmail} from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { IoCall } from "react-icons/io5";


const mapContainerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: 51.5033, // Latitude for London Eye
  lng: -0.1195  // Longitude for London Eye
};

const Contact = () => {
  return (
    <section className="bg-white text-black">
      {/* Main Section */}
          {/* Map Section */}
          <div className="hgt w-full">
          <APIProvider apiKey="AIzaSyCMdbCdYlyb_ASfVRgTFoOtxN51rAj3Yrs">
              <Map
                mapContainerStyle={mapContainerStyle}
                center={center}
                defaultZoom={15}
              >
                <Marker position={center} />
              </Map>
            </APIProvider>
          </div>
      <div className="container mx-auto px-8 pb-16">
        <Typography variant="h2" className="text-center text-4xl font-bold mb-2 mt-14">Contact <span className='text-orange-800'>Information</span></Typography>
        <Typography className="text-center text-lg text-gray-500">
          Have questions or inquiries? We can be found here.
        </Typography>        
        {/* Footer Section */}
        <div className="mt-8 flex flex-col gap-8">
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 h-52 flex flex-col gap-4 rounded-lg justify-center items-center">
              <h2 className="text-xl font-bold">Address</h2>
              <div className="flex items-center space-x-4">
                <ImLocation2 className="text-orange-800"/>
                <span>123 Big Data Street, Analytics City, AB 45678</span>
              </div>
            </div>
            <div className="bg-gray-200 h-52 flex flex-col gap-4 rounded-lg justify-center items-center">
              <h2 className="text-xl font-bold">Email</h2>
              <div className="flex items-center space-x-4">
                <MdEmail className="text-orange-800"/>
                <span>info@bigdataanalytics.com</span>
              </div>
            </div>
            <div className="bg-gray-200 h-52 flex flex-col gap-4 rounded-lg justify-center items-center">
              <h2 className="text-xl font-bold">Address</h2>
              <div className="flex items-center space-x-4">
                <IoCall className="text-orange-800"/>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
