import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Austin Cesar',
    company: 'ThemeTags',
    text: 'Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything energistically underwhelm proactive.',
    rating: 3,
    img: '/Images/peo.jpg' // Replace with actual image path
  },
  {
    name: 'Pirtle Karol',
    company: 'ThemeTags',
    text: 'Intrinsically facilitate functional imperatives without next-generation meta-services. Compellingly revolutionize worldwide users vis-a-vis enterprise best practices.',
    rating: 5,
    img: '/Images/peo.jpg' // Replace with actual image path
  },
  {
    name: 'Aminul Islam',
    company: 'ThemeTags',
    text: 'Interactively grow backend scenarios through one paradigms. Distinctively and communicate efficient information without effective meta-services.',
    rating: 5,
    img: '/Images/peo.jpg' // Replace with actual image path
  },
  {
    name: 'John Doe',
    company: 'TechCorp',
    text: 'Enthusiastically scale enterprise networks and compellingly maintain seamless internal or "organic" sources.',
    rating: 4,
    img: '/Images/peo.jpg' // Replace with actual image path
  }
];

const Testimonials = () => {
  const [visibleTestimonialIndex, setVisibleTestimonialIndex] = useState(0);
  const [visibleTestimonialsCount, setVisibleTestimonialsCount] = useState(3);

  const updateVisibleTestimonialsCount = () => {
    if (window.innerWidth >= 1024) {
      setVisibleTestimonialsCount(3);
    } else if (window.innerWidth >= 768) {
      setVisibleTestimonialsCount(2);
    } else {
      setVisibleTestimonialsCount(1);
    }
  };

  useEffect(() => {
    updateVisibleTestimonialsCount();
    window.addEventListener('resize', updateVisibleTestimonialsCount);

    return () => {
      window.removeEventListener('resize', updateVisibleTestimonialsCount);
    };
  }, []);

  const handleNext = () => {
    setVisibleTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setVisibleTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    return testimonials.slice(visibleTestimonialIndex, visibleTestimonialIndex + visibleTestimonialsCount).concat(
      testimonials.slice(0, Math.max(0, visibleTestimonialIndex + visibleTestimonialsCount - testimonials.length))
    );
  };

  return (
    <div className="text-center bg-gray-100 pt-14 pb-24">
      <h2 className="text-5xl font-bold mb-12">Customer <span className='text-orange-800'>Testimonials</span></h2>
      
      <div className=" container mx-auto flex justify-center items-center gap-4">
        {/* Left Arrow */}
        <button 
          className='text-orange-800 text-3xl mr-4'
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>

        {/* Visible Testimonials */}
        <div className="flex justify-center container gap-24 flex-wrap">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div key={index} className="testimonial p-6 border bg-white border-gray-200 rounded-lg shadow-lg max-w-xs">
              <p className="mb-4">{testimonial.text}</p>
              <div className="flex justify-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-orange-800" />
                ))}
              </div>
              <div className='flex gap-4 mt-8 justify-center'>
                <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full mb-2" />
                <div>
                  <p className="name font-bold">{testimonial.name}</p>
                  <p className="company text-gray-500">{testimonial.company}</p>
                </div>
              </div>
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
    </div>
  );
};

export default Testimonials;
