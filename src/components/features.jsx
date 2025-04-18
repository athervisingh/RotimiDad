import React from 'react';
import {
  FaClipboardList,
  FaMousePointer,
  FaHeadphones,
  FaThumbsUp,
} from 'react-icons/fa';

const steps = [
  {
    icon: <FaClipboardList />,
    title: 'ENQUIRE',
    description:
      'Enquire now to receive your first complimentary consultation with our expert, absolutely free! Get all the guidance you need about the admission process.',
  },
  {
    icon: <FaMousePointer />,
    title: 'CHOOSE',
    description:
      'We connect you with the ideal medical school aligned with your aspirations, support you through every step, and secure your admission with assurance!',
  },
  {
    icon: <FaHeadphones />,
    title: 'SUPPORT',
    description:
      'Experience dedicated on-ground support with guidance from medical students and experienced doctors right on campus!',
  },
  {
    icon: <FaThumbsUp />,
    title: 'PRACTICE',
    description:
      'Gain hands-on hospital practice and real-life exposure to patients. Upon graduation, our doctors will assist you in registering in the UK or other EU countries.',
  },
];

const Features = () => {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-purple-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
          >
            <div className="text-4xl text-blue-700 mb-4 flex justify-center">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-3 tracking-wide">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
