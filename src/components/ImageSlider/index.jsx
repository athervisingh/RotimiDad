import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import axios from "axios";

const Index = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const [slider1, setSlider1] = useState([]);
  const [slider2, setSlider2] = useState([]);
  
  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const [res1, res2] = await Promise.all([
          axios.get('/api/sliders/slider1'),
          axios.get('/api/sliders/slider2'),
        ]);
        setSlider1(res1.data.slides || []);
        setSlider2(res2.data.slides || []);
      } catch (err) {
        console.error('Failed to load sliders', err);
      }
    };
    fetchSliders();
  }, []);
  
  return (
    <div className="mt-20 md:mt-28 lg:mt-36">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center" style={{ fontFamily: 'Imperial Script, cursive' }}>
        Study In Best Destinations
      </h1>
      
      <div ref={container} className={styles.slidingImages}>
        {/* First Slider */}
        <motion.div style={{ x: x1 }} className={styles.slider}>
          {slider1.map((project, index) => (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <img
                  src={project.src}
                  alt="destination"
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
                <div className={styles.projectInfo}>
                  <img
                    className="rounded-full border-2 border-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                    src={project.src2}
                    alt=""
                  />
                  <div className="bg-gray-500 bg-opacity-70 px-2 py-1 sm:px-3 md:px-4 lg:px-5 md:py-2 rounded-full">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-bold">Study In {project.text}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Second Slider */}
        <motion.div style={{ x: x2 }} className={styles.slider}>
          {slider2.map((project, index) => (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <img
                  src={project.src}
                  alt="destination"
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
                <div className={styles.projectInfo}>
                  <img
                    className="rounded-full border-2 border-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                    src={project.src2}
                    alt=""
                  />
                  <div className="bg-gray-500 bg-opacity-70 px-2 py-1 sm:px-3 md:px-4 lg:px-5 md:py-2 rounded-full">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-bold">Study In {project.text}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;