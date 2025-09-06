import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import AdminPanel from './routes/AdminPanel';
import Navbar from './components/navbar';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import Footer from './components/footer';
import Courses from './routes/Courses';
import UniversityAdmin from './routes/Universities';

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    country: '',
    name: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const emailLink = `mailto:omifodforeignlinkeducation@gmail.com?subject=Admission Inquiry - ${formData.country || "International Student"}&body=${encodeURIComponent(
      `Name: ${formData.name || "[Not provided]"}\nEmail: ${formData.email || "[Not provided]"}\nPhone: ${formData.phone || "[Not provided]"}\nCountry: ${formData.country || "[Not provided]"}\n\nI am interested in receiving biweekly updates about admission opportunities abroad.`
    )}`;
    
    // Open email client
    window.location.href = emailLink;
    
    // Close popup after a short delay
    setTimeout(() => setShowPopup(false), 1000);
  };

  return (
    <>
      {/* Admission Updates Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">📚 Stay Updated on Admissions!</h2>
            <p className="text-gray-700 text-base mb-6">
              Subscribe to our biweekly admission updates to receive the latest opportunities for studying abroad at your dream university.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Full Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+1234567890"
                />
              </div>
              
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country of Residence*</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Country"
                />
              </div>
              
              <div className="flex space-x-4 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Subscribe Now
                </button>
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="flex-1 bg-gray-200 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-300 transition duration-300"
                >
                  Maybe Later
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/courses-and-duration" element={<Courses />} />
        <Route path="/universities" element={<UniversityAdmin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;