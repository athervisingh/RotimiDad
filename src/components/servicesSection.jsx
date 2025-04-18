import React from "react";
import { MessageCircle, BookOpen, Award, Globe, FileText, Home } from "lucide-react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-blue-500 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "Career Counseling",
      description: "One on one Guidance Sessions for making your best career choice"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Course Preparation",
      description: "Preparation Classes for IELTS, TOEFL, PTE, SAT, GMAT and GRE"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Admission Guidance",
      description: "Choosing University, Admission Forms, Academic Certificates and more"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Travel Assistance",
      description: "Advance flight booking for ideal departure dates, routes and discounts"
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Visa Assistance",
      description: "From application forms to preparing financial and other relevant Documents"
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Accommodation Assistance",
      description: "Different types of accommodation which fit your needs and budget"
    }
  ];

  return (
    <div className="w-full py-12 px-4 mt-20 mb-20">
      <div className="max-w-6xl mx-auto">
      <h1 className="text-8xl text-center max-sm:text-4xl " style={{ fontFamily: 'Imperial Script, cursive' }}>
      Our Services
      </h1>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto max-sm:text-xs">
          Comprehensive support for your international education journey
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;