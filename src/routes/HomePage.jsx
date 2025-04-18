import React from 'react';
import EducationConsultant from "../components/educationConsultant"
import ImageSlider from '../components/ImageSlider';
import Hero from '../components/hero';
import StatsSection from '../components/statsSection';
import ContactForm from '../components/contactfrom';
import University from '../components/university';
import Features from '../components/features';
import ServicesSection from '../components/servicesSection';
import ReviewMarquee from '../components/reviewMarquee';
import Faq from '../components/faq';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      {/* <Navbar />   */}
      
      {/* Main content */}
      <main>
        {/* Hero section */}
        <section className="relative top-0 z-50">
          <Hero />
        </section>
        
        {/* Stats section */}
        <section className="relative">
          <StatsSection />
          <EducationConsultant/>
          <ImageSlider/>
          <ContactForm/>
          <University/>
          <Features/>
          <ServicesSection/>
          <ReviewMarquee/>
          <Faq/>
     
        </section>
      </main>
    </div>
  );
};

export default HomePage;