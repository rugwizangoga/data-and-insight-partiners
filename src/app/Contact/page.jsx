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
  height: '400px'
};

const center = {
  lat: 51.5033, // Latitude for London Eye
  lng: -0.1195  // Longitude for London Eye
};

const Contact = () => {
  return (
    <section className="bg-white text-black">
      {/* Main Section */}
      <div className="container mx-auto px-8 py-16">
        <Typography variant="h2" className="text-center text-4xl font-bold mb-2">Get in Touch with Us</Typography>
        <Typography className="text-center text-lg text-gray-500 mb-10">
          Have questions or inquiries? We're here to help! Reach out to us for any queries related to big data and analytics solutions.
        </Typography>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
            <Image
              className='rounded-lg shadow-lg'
              src="/call.jpg" // Update this path as per your file location
              width={600}
              height={500}
              alt="logo image"
            />
          
          {/* Form Section */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Name" />
              <Input label="Email" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Phone" />
              <Input label="Company Name" />
            </div>
            <Select label="Select Service">
              <Option>Data Analytics</Option>
              <Option>Consulting</Option>
              <Option>Support</Option>
            </Select>
            <Textarea label="Message" rows={6} />
            <Button color="blue" className="w-full">Send</Button>
          </form>
        </div>
        
        {/* Footer Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="h-64">
            <APIProvider apiKey="AIzaSyCMdbCdYlyb_ASfVRgTFoOtxN51rAj3Yrs">
              <Map
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </Map>
            </APIProvider>
          </div>
          
          {/* Contact Information */}
          <div className="bg-gray-200 rounded-lg ">
            <div className="flex justify-center  h-full w-3/4 m-auto flex-col space-y-4">

              <div className="flex items-center space-x-4">
                <ImLocation2 />
                <span>123 Big Data Street, Analytics City, AB 45678</span>
              </div>
              <div className="flex items-center space-x-4">
                <MdEmail />
                <span>info@bigdataanalytics.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <IoCall />
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
