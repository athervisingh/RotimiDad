import React from "react";

const University = () => {
  return (
    <div className="w-full min-h-[70vh] pt-10 md:pt-20 px-4 mb-20">
      <div>
        <h1
          className="text-4xl md:text-6xl lg:text-8xl text-center"
          style={{ fontFamily: "Imperial Script, cursive" }}
        >
          Our <b>Top Ranked</b> Partners
        </h1>
        <h1 className="text-base md:text-xl mt-2 md:mt-4 text-center mx-auto max-w-3xl px-4">
          Our partners are trusted experts, committed to providing reliable and
          top-quality education.
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 md:mt-12">
          {/* Partners Grid */}
          <div className="mt-4 md:mt-16 gap-6 md:gap-10 flex flex-col md:ml-0 lg:ml-10 w-full max-w-xl">
            <div className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center">
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-56 h-auto sm:h-24 rounded-xl border-2 border-gray-950 justify-center bg-gray-300 p-3 md:p-4">
                <img src="/images/c1.png" className="w-16 h-16 md:w-20 md:h-20 mb-2 sm:mb-0" alt="Crimea University Logo" />
                <h1 className="text-center sm:text-left text-sm md:text-base ml-0 sm:ml-2">Crimea federal university</h1>
              </div>
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-56 h-auto sm:h-24 rounded-xl border-2 border-gray-950 justify-center bg-gray-300 p-3 md:p-4">
                <img src="/images/c2.png" className="w-16 h-16 md:w-20 md:h-20 mb-2 sm:mb-0" alt="Samara University Logo" />
                <h1 className="text-center sm:text-left text-sm md:text-base ml-0 sm:ml-2">Samara state university</h1>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center">
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-56 h-auto sm:h-24 rounded-xl border-2 border-gray-950 justify-center bg-gray-300 p-3 md:p-4">
                <img
                  src="/images/c3.webp"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-2 sm:mb-0"
                  alt="Ural University Logo"
                />
                <h1 className="text-center sm:text-left text-sm md:text-base ml-0 sm:ml-2">Ural state university</h1>
              </div>
              <div className="flex flex-col sm:flex-row items-center w-full sm:w-56 h-auto sm:h-24 rounded-xl border-2 border-gray-950 justify-center bg-gray-300 p-3 md:p-4">
                <img
                  src="/images/c4.png"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-2 sm:mb-0"
                  alt="Siberian University Logo"
                />
                <h1 className="text-center sm:text-left text-sm md:text-base ml-0 sm:ml-2">Siberian state medical university</h1>
              </div>
            </div>
          </div>
          
          {/* Video Section */}
          <div className="mt-10 md:mt-16 lg:mt-10 w-full md:w-auto flex justify-center">
            {/* Uncomment when HeroVideoDialog is available */}
            {/* <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="/video/v2.mp4"
              thumbnailSrc="/images/thumb2.jpg"
              thumbnailAlt="Hero Video"
            /> */}
            
            {/* Placeholder for the video dialog */}
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg h-64 bg-gray-200 flex items-center justify-center rounded-lg">
              <div className="text-gray-500 text-center p-4">Video Player Placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default University;