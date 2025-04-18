import React, { useState } from "react";

const services = [
  {
    title: "Academic orientation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M12 2L1 9l11 7 9-5.91V20h2V8L12 2z" />
      </svg>
    ),
    content:
      "Get familiar with the education system, campus life, and your new schedule to ease your transition.",
  },
  {
    title: "University Admission",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M3 9v11h18V9L12 4 3 9zm16 9H5v-7l7-4 7 4v7z" />
      </svg>
    ),
    content:
      "We guide you through every step of the admission process—from application to enrollment.",
  },
  {
    title: "Visa procedure",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M17 10h-1V9a6 6 0 00-12 0v1H3a1 1 0 000 2h1v7a2 2 0 002 2h10a2 2 0 002-2v-7h1a1 1 0 000-2zM7 9a4 4 0 018 0v1H7V9zm2 6a1 1 0 01-2 0v-2a1 1 0 012 0v2zm8 2H9a1 1 0 010-2h8a1 1 0 010 2z" />
      </svg>
    ),
    content:
      "We handle all visa paperwork and guide you through the process to ensure timely approval.",
  },
  {
    title: "University accommodation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    content:
      "We help secure safe, comfortable accommodation and connect you to on-campus facilities.",
  },
  {
    title: "Can foreigners open bank accounts?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M12 2L2 7v2h20V7l-10-5zM2 10v10h20V10H2zm6 3h8v2H8v-2z" />
      </svg>
    ),
    content:
      "Yes. Foreigners can open bank accounts depending on visa type—resident or non-resident.",
  },
  {
    title: "What account types are allowed?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M4 4h16v2H4V4zm0 6h16v10H4V10zm6 2v6h4v-6h-4z" />
      </svg>
    ),
    content:
      "NRE, NRO, FCNR, RFC, and Resident accounts are available based on your visa and status.",
  },
  {
    title: "What documents are needed?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M6 2h9l5 5v13a2 2 0 01-2 2H6V2zm7 7V3.5L17.5 9H13z" />
      </svg>
    ),
    content:
      "Passport, visa, address proof, photos, and other documents based on your purpose (study/work).",
  },
  {
    title: "Can tourists open bank accounts?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4 11H8v-2h8v2z" />
      </svg>
    ),
    content:
      "No. Tourists on short-term visas can't open regular accounts but may use forex cards.",
  },
  {
    title: "Which banks are best?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h10v2H4v-2zm0 4h10v2H4v-2z" />
      </svg>
    ),
    content:
      "SBI, HDFC, ICICI, Axis, and Kotak offer services for foreigners. Private banks are smoother.",
  },
  {
    title: "Can I open an account online?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM7 10h10v4H7v-4z" />
      </svg>
    ),
    content:
      "Usually no. Most banks require in-person KYC, though some offer partial online steps for NRIs.",
  },
  {
    title: "Is there a minimum balance?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M12 6a6 6 0 100 12 6 6 0 000-12zm-2 9v-6h4v6h-4z" />
      </svg>
    ),
    content:
      "Yes. Most banks need ₹1,000–₹10,000 average monthly balance depending on account type.",
  },
  {
    title: "Can I send money abroad?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M20 12a8 8 0 10-7.446 7.973v-2.022a6 6 0 115.446-5.951zm-9-3h4v1h-4v2h5v-5h-5v2z" />
      </svg>
    ),
    content:
      "Yes. NRE/NRO accounts allow international transfers; NRO may need tax clearance.",
  },
  {
    title: "Are there tax implications?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M8 2h8a2 2 0 012 2v16l-6-3-6 3V4a2 2 0 012-2z" />
      </svg>
    ),
    content:
      "Income in NRO is taxable. NRE and FCNR accounts are tax-free if you're an NRI.",
  },
  {
    title: "How long to open an account?",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-blue-500">
        <path d="M12 8v5l4 2 .5-.87-3.5-1.75V8h-1z" />
      </svg>
    ),
    content:
      "It usually takes 1–3 working days after all documents are submitted and verified.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContentItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mt-16 sm:mt-20 md:mt-24 lg:mt-32 flex flex-col justify-center items-center mb-10 md:mb-20 px-4">
      <h1 
        className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center" 
        style={{ fontFamily: 'Imperial Script, cursive' }}
      >
        Study In Best Destinations
      </h1>
      
      <div className="w-full sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white mt-8 md:mt-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center text-black mb-8 md:mb-16 mt-4 md:mt-6">
          Complete Services to Empower Your Success
        </h2>
        
        <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 max-h-[50vh] sm:max-h-[60vh] md:max-h-[65vh] lg:max-h-[70vh] overflow-y-auto pr-2 pl-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <button
                className="flex items-center justify-between w-full p-3 sm:p-4 md:p-5 bg-blue-50 hover:bg-blue-100 rounded-lg transition-all duration-300"
                onClick={() => toggleContentItem(index)}
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                  {service.icon}
                  <span className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl">
                    {service.title}
                  </span>
                </div>
                <span
                  className={`text-blue-600 font-bold text-lg sm:text-xl md:text-2xl transform transition duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-white text-gray-700 text-xs sm:text-sm md:text-base transition-all duration-500">
                  {service.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;