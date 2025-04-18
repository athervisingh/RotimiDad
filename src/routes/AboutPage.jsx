import React from 'react';
import { Download } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">About Our Company</h1>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          At <b>OMIFOD FOREIGN LINKS EDUCATION CONSULT LTD</b>, we specialize in guiding students toward the right educational opportunities around the world. With a commitment to trust, quality, and personalized guidance, we make your journey to international education smooth, informed, and successful.
          </p>
        </div>

        {/* Mission and Owner Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="bg-white p-10 rounded-2xl shadow-xl transform transition-all hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-gray-900 border-b border-gray-200 pb-4">Our Mission</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At OMIFOD FOREIGN LINKS EDUCATION CONSULT LTD, our mission is to empower students by providing reliable, personalized, and forward-thinking educational consultancy services. We are dedicated to building strong foundations for academic success through transparency, trust, and a deep understanding of global education pathways—while championing access, opportunity, and lifelong growth.            </p>
            
            <h3 className="mt-10 text-2xl font-bold text-gray-900">Core Values</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              {['Integrity and Transparency', 'Student-Centered Approach', 'Commitment to Excellence', 'Innovation in Guidance',"Global Expertise","Trust and Dependability","Equity and Opportunity","Collaborative Success","Responsive Support"].map((value, index) => (
                <li key={index} className="flex items-center">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                    <span className="h-3 w-3 bg-indigo-500 rounded-full"></span>
                  </span>
                  <span className="text-lg">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Owner's Section */}
          <div className="bg-white p-10 rounded-2xl shadow-xl transform transition-all hover:shadow-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-indigo-100 shadow-lg">
                  <img
                    src="/images/CEO.jpeg"
                    alt="Prof Omisakin FD"
                    className="w-full h-full object-cover transform transition-all hover:scale-105"
                  />
                </div>
              </div>
              <div className="text-center md:text-left leading-[1.8] ">
                <h2 className="text-3xl font-bold text-gray-900">Prof Omisakin FD</h2>
                <p className="text-xl text-indigo-600 font-semibold">Founder & CEO</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                <p><em>
                <b>Prof. Omisakin F.D</b>, founder of<b> OMIFOD FOREIGN LINKS EDUCATION CONSULT LTD</b>, has over 10 years of experience in international education consulting. He has helped many students gain admission to top institutions worldwide.  </em></p>
  <p><em>
  He is passionate about guiding students and is committed to providing honest, personalized support to help them achieve their academic goals.
  </em></p>
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
            With a strong background in international education, Prof. Omisakin F.D has developed expertise in student counseling, university placement, and academic advisory services. He is passionate about helping students find the right study opportunities and is committed to delivering guidance with transparency, trust, and care.            </p>

            {/* Certifications */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certificate of Incorporation</h3>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h4 className="text-xl font-semibold text-gray-900">Download Certificate</h4>
                  </div>
                  <a 
                    href="/certificate.pdf" 
                    download
                    className="flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <Download size={20} className="mr-2" />
                    Download PDF
                  </a>
                </div>
              </div>
              
              <div className="mt-6 ">
              OMIFOD FOREIGN LINKS EDUCATION CONSULT LTD is officially registered with the Corporate Affairs Commission of the Federal Republic of Nigeria under the Companies and Allied Matters Act, 2020. Our company registration number is <b>7979029</b>, and we are committed to upholding the highest standards of professionalism, integrity, and transparency in all our educational consulting services.              </div>
            </div>

            {/* Experience */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3">Experience</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
              With over a decade of experience in international education consulting, Prof. Omisakin F.D has helped numerous students secure admission into top universities across the globe. His expertise spans student assessment, academic advising, and streamlined application processes, making him a trusted guide in the field of global education.            
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
     {/* Team Section */}
<div className="mt-20 text-center">
  <h2 className="text-4xl font-bold text-gray-900">Our Team</h2>
  <div className="h-1 w-24 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
  <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
    Meet our dedicated team members who work tirelessly to make your experience exceptional.
  </p>

  {/* Team Members */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
    {/* Team Member 1 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg mb-4">
        <img
          src="/images/m2.jpeg"
          alt="Name One"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">Tobi</h3>
      <p className="text-indigo-600 font-medium">Admissions Coordinator UK</p>
    </div>

    {/* Team Member 2 */}
    <div className="flex flex-col items-center text-center">
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg mb-4">
        <img
          src="/images/m1.jpeg"
          alt="Name Two"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">omisakinrotimi</h3>
      <p className="text-indigo-600 font-medium">Student Advisor India</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default AboutPage;