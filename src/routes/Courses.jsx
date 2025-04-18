import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = '/api/courses';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await axios.get(API);
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-20">
      {/* Hero Section */}
      <div className="relative sm:h-96 w-full mb-32">
        <img
          src="/images/course.webp"
          alt="Courses Hero"
          className="w-[100vw] h-[50vh] rounded-b-2xl shadow-md"
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">Explore Our Courses</h1>
        </div>
      </div>

      {/* Courses Section */}
      <div className="px-4 py-8 mt-20 mb-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Available Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course._id} className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">{course.category}</h3>
              <ul className="space-y-2">
                {course.courses.map((sub, i) => (
                  <li key={i} className="text-gray-700">
                    <span className="font-medium">{sub.name}</span> - <span className="italic">{sub.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
