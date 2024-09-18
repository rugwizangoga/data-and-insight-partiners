'use client'

import React from "react";
import { Button, Input, Textarea, Typography, Select, Option } from "@material-tailwind/react";
import Image from "next/image";

const Getintouch = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-20">
      <div className="relative bg-white py-5 px-3 rounded-lg shadow-lg w-10/12 lg:w-11/12 max-w-4xl md:max-w-6xl  transition-transform transform animate-slide-in-top-right">
        <button className="absolute top-1 right-3 text-black z-50 font-extrabold text-lg" onClick={onClose}>
          X
        </button>
        <Typography variant="h2" className="text-center text-2xl lg:text-4xl font-bold mb-2">Get in Touch with Us</Typography>
        <Typography className="text-center text-lg text-gray-500 mb-5">
          Have questions or inquiries? We're here to help!
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Image Section */}
          <div className="relative w-full h-[300px] lg:h-[410px]">
            <Image
              className='rounded-lg shadow-lg'
              src="/Images/new.jpg" // Update this path as per your file location
              layout="fill"
              objectFit="cover"
              alt="logo image"
            />
          </div>

          {/* Form Section */}
          <form className="space-y-3 lg:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Input label="Name" />
              <Input label="Email" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Input label="Phone" />
              <Input label="Company Name" />
            </div>
            <Select label="Select Service">
              <Option>Data Analytics</Option>
              <Option>Consulting</Option>
              <Option>Support</Option>
            </Select>
            <Textarea label="Message" rows={6} />
            <Button color="orange" className="w-full">Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Getintouch;
