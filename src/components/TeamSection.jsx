import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Vlad',
    role: 'Chief Executive Officer',
    image: '/Images/peo.jpg',
    description: 'Experienced Engineer and Consultant in software development space with profound knowledge and hands-on skills in Computer Science, Cryptography, Steganography and Distributed Ledger Technologies.',
  },
  {
    name: 'Bohdan',
    role: 'Chief Technology Officer',
    image: '/Images/peo.jpg',
    description: 'Experienced Engineer and Consultant in software development space with profound knowledge and hands-on skills in Computer Science, Cryptography, Steganography and Distributed Ledger Technologies.',
  },
  {
    name: 'Anton',
    role: 'Marketing Manager',
    image: '/Images/peo.jpg',
    description: 'Experienced Engineer and Consultant in software development space with profound knowledge and hands-on skills in Computer Science, Cryptography, Steganography and Distributed Ledger Technologies.',
  },
  {
    name: 'Andrew',
    role: 'Lead Blockchain Java Developer',
    image: '/Images/peo.jpg',
    description: 'Experienced Engineer and Consultant in software development space with profound knowledge and hands-on skills in Computer Science, Cryptography, Steganography and Distributed Ledger Technologies.',
  },
];

const TeamSection = () => {
  const [visibleMemberIndex, setVisibleMemberIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState(null);
  const [visibleMembersCount, setVisibleMembersCount] = useState(3);

  const updateVisibleMembersCount = () => {
    if (window.innerWidth >= 1252) {
      setVisibleMembersCount(3);
    } else if (window.innerWidth >= 940) {
      setVisibleMembersCount(2);
    } else {
      setVisibleMembersCount(1);
    }
  };

  useEffect(() => {
    updateVisibleMembersCount();
    window.addEventListener('resize', updateVisibleMembersCount);

    return () => {
      window.removeEventListener('resize', updateVisibleMembersCount);
    };
  }, []);

  const handleNext = () => {
    setVisibleMemberIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setVisibleMemberIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    return teamMembers.slice(visibleMemberIndex, visibleMemberIndex + visibleMembersCount).concat(
      teamMembers.slice(0, Math.max(0, visibleMemberIndex + visibleMembersCount - teamMembers.length))
    );
  };

  return (
    <div className='container m-auto text-center py-16'>
      <h2 className='text-5xl font-bold mb-8'>Who <span className='text-orange-800'>We Are</span></h2>
      <p className='text-dm lg:text-lg w-[250px] md:w-[500px] lg:w-[1000px] m-auto text-left mb-12'>
        Each member of our team brings a wealth of expertise, yet we remain passionately curious, always embracing the latest advancements in technology. 
        This commitment to growth and adaptation defines the projects we bring to life.
      </p>
      
      <div className='flex justify-between items-center gap-4'>
        {/* Left Arrow */}
        <button 
          className='text-orange-800 text-3xl mr-4'
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>

        {/* Visible Members */}
        <div className='flex gap-24'>
          {getVisibleMembers().map((member, index) => (
            <div key={index} className='flex shadow-lg hover:shadow-2xl gap-8 hover:gap-14 items-end'>
              <div className='rounded-lg py-4 pl-4'>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={200} 
                    height={200} 
                  />
                  <h3 className='text-xl font-bold mt-4'>{member.name}</h3>
                  <p className='text-sm'>{member.role}</p>
              </div>
              <button 
                className='h-fit items-end bg-orange-800 p-4 text-white hover:bg-orange-500'
                onClick={() => setSelectedMember(member)}
              >
                <FaPlus />
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          className='text-orange-800 text-3xl ml-4'
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10'>
          <div className='bg-orange-800 w-1/2 text-white p-8 rounded-lg relative'>
            <button 
              className='absolute top-4 right-4'
              onClick={() => setSelectedMember(null)}
            >
              <FaTimes />
            </button>
            <div className='flex items-center gap-12'>
                <Image src={selectedMember.image} alt={selectedMember.name} width={180} height={180} />
                <div>
                    <h3 className='text-2xl font-bold mt-4'>{selectedMember.name}</h3>
                    <p className='mt-2'>{selectedMember.role}</p>
                </div>
            </div>
            <p className='mt-6 text-left'>{selectedMember.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
