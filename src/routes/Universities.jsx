import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight, Globe, School, Map } from 'lucide-react';

const API = '/api/universities';

const Universities = () => {
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sliderRefs = useRef({});

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(API);
      setUniversities(res.data);
    } catch (error) {
      console.error("Error fetching universities:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scroll = (country, direction) => {
    const container = sliderRefs.current[country];
    if (container) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-20">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0  z-10"></div>
        <img 
          src="/images/university.jpg" 
          alt="University Campus" 
          className="w-[100vw] h-64 md:h-[100vh] "
        />
        {/* <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Discover Global Universities</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Explore prestigious institutions around the world and find your perfect academic destination
          </p>
        </div> */}
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-4 p-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Globe size={24} className="text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{universities.length}</h3>
                <p className="text-gray-600">Countries</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <School size={24} className="text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  {universities.reduce((acc, item) => acc + item.universities.length, 0)}
                </h3>
                <p className="text-gray-600">Universities</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Map size={24} className="text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Worldwide</h3>
                <p className="text-gray-600">Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center my-8 text-gray-800">Universities By Country</h2>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="space-y-16">
            {universities.map((item) => (
              <div key={item._id} className="mb-8">
                <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Globe size={24} className="text-blue-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-blue-800">{item.country}</h2>
                  </div>
                  <div className="flex space-x-2 items-center">
                    {item.universities.length > 0 && (
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                        {item.universities.length} {item.universities.length === 1 ? 'university' : 'universities'}
                      </span>
                    )}
                    {item.universities.length > 3 && (
                      <>
                        <button
                          onClick={() => scroll(item._id, 'left')}
                          className="bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition-colors"
                          aria-label="Scroll left"
                        >
                          <ChevronLeft size={20} className="text-blue-800" />
                        </button>
                        <button
                          onClick={() => scroll(item._id, 'right')}
                          className="bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition-colors"
                          aria-label="Scroll right"
                        >
                          <ChevronRight size={20} className="text-blue-800" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                
                {item.universities.length > 0 ? (
                  <div
                    ref={el => sliderRefs.current[item._id] = el}
                    className="flex overflow-x-auto scrollbar-hide gap-6 pb-6 snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {item.universities.map((uni) => (
                      <div
                        key={uni._id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 w-full sm:w-72 md:w-80 snap-start border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="relative h-48 overflow-hidden group">
                          <img
                            src={uni.image || '/api/placeholder/400/320'}
                            alt={uni.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold text-xl text-blue-800 mb-2">{uni.name}</h3>
                          <div className="flex items-center text-gray-600 mb-3 text-sm">
                            <Map size={16} className="mr-1" />
                            <p>{uni.address}</p>
                          </div>
                          <p className="text-gray-700 line-clamp-3 mb-4">{uni.description}</p>
                          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                            Learn more
                            <ChevronRight size={16} className="ml-1" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
                    No universities available for this country
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Banner */}
      {/* <div className="bg-blue-800 text-white mt-16 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Begin Your Academic Journey?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore these prestigious institutions and take the first step toward your educational goals.
          </p>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors">
            Contact Admissions
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Universities;