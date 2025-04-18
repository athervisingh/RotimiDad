import React from 'react';
import { FaGlobe, FaUserGraduate, FaUniversity, FaClock } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    {
      icon: <FaGlobe className="text-2xl text-blue-800" />,
      number: '10+',
      label: 'Countries',
    },
    {
      icon: <FaUserGraduate className="text-2xl text-blue-800" />,
      number: '1,000+',
      label: 'Graduates',
    },
    {
      icon: <FaUniversity className="text-2xl text-blue-800" />,
      number: '500+',
      label: 'Universities',
    },
    {
      icon: <FaClock className="text-2xl text-blue-800" />,
      number: '7+',
      label: 'Years of experience',
    },
  ];

  return (
    <div className="bg-blue-50 py-10 px-4 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-2 relative px-4 py-4 ${
              index < stats.length - 1 ? 'md:border-r md:border-orange-500' : ''
            }`}
          >
            {stat.icon}
            <h3 className="text-xl font-bold text-blue-900">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
