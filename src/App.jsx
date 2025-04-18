import { useEffect, useState } from 'react';
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

  // useEffect(() => {
  //   // const timer = setTimeout(() => setShowPopup(false), 1000000); // auto-close after 8 seconds
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      {/* 🎉 Birthday Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">🎉 Happy Birthday Dad! 🎂</h2>
            <p className="text-gray-700 text-base mb-6">
              Thank you for your love, strength, and endless support. Today is your day, and I hope it's filled with joy and blessings. ❤️
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition duration-300"
            >
              Love you, Dad ❤️
            </button>
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
