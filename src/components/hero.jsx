import React, { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="relative top-0 w-full h-screen overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white opacity-10 z-10"></div>
      
      {/* Background image */}
      <img 
        className="absolute inset-0 w-full h-full object-cover" 
        src="/images/Hero.png" 
        alt="Background"
      />
      
      {/* Content container */}
      <div className="relative z-30 w-full h-full flex flex-col justify-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* Hero headings */}
          <div data-aos="fade-right" className="mb-6 md:mb-8">
            <img 
              src="/images/HeroHeading.png" 
              className="h-12 sm:h-16 md:h-30 lg:h-28 object-contain" 
              alt="Main heading" 
            />
            <img 
              src="/images/HeroText2.png" 
              className="h-6 sm:h-10 md:h-8 lg:h-10 mt-4 object-contain" 
              alt="Sub heading" 
            />
          </div>
          
          {/* Feature list */}
          <ul
            data-aos="fade-right"
            className="flex flex-col text-white gap-2 sm:gap-3 md:gap-4 max-w-full md:max-w-2xl lg:max-w-3xl"
          >
            <li className="flex gap-2 text-left text-sm sm:text-lg md:text-xl lg:text-2xl items-start">
              <IoMdCheckmarkCircleOutline
                className="text-green-500 flex-shrink-0 mt-1"
                size={30}
              />
              <span>100% Guidance for Admission to Top International Universities</span>
            </li>
            <li className="flex gap-2 text-left text-sm sm:text-lg md:text-xl lg:text-2xl items-start">
              <IoMdCheckmarkCircleOutline
                className="text-green-500 flex-shrink-0 mt-1"
                size={30}
              />
              <span>Courses Recognized by Leading Global Education Authorities</span>
            </li>
            <li className="flex gap-2 text-left text-sm sm:text-lg md:text-xl lg:text-2xl items-start">
              <IoMdCheckmarkCircleOutline
                className="text-green-500 flex-shrink-0 mt-1"
                size={30}
              />
              <span>Explore 100+ Handpicked Universities Across Various Fields</span>
            </li>
            <li className="flex gap-2 text-left text-sm sm:text-lg md:text-xl lg:text-2xl items-start">
              <IoMdCheckmarkCircleOutline
                className="text-green-500 flex-shrink-0 mt-1"
                size={30}
              />
              <span>Full Support from Experienced Counselors and Alumni Abroad</span>
            </li>
          </ul>
          
          {/* CTA Button */}
          <div data-aos="fade-right" className="mt-6 md:mt-8 lg:mt-10">
            <a
              type="button"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-300 to-lime-300 hover:bg-gradient-to-l text-gray-900 rounded-xl px-6 sm:px-8 md:px-10 py-3 font-medium text-sm sm:text-base transition-all duration-300 focus:ring-4 focus:ring-lime-300"
              href="https://wa.me/+2348066181821"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={18} />
              <span>Connect With WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;