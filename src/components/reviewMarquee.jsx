import React from 'react';
import Marquee from 'react-fast-marquee';

const reviews = [
  {
    name: 'Priya Mehta',
    username: '@priya',
    message: 'Thanks to this site, I was able to compare colleges effectively and make an informed decision about my future.',
  },
  {
    name: 'Amit Verma',
    username: '@amit',
    message: 'I found the perfect college through this site. The filters and reviews are very well-organized and useful.',
  },
  {
    name: 'Rahul Sharma',
    username: '@rahul',
    message: 'This platform is extremely helpful for finding the best MBBS colleges. The detailed insights saved me a lot of research time!',
  },
  {
    name: 'Rohit Singh',
    username: '@rohit',
    message: 'This site made the overwhelming task of finding the right MBBS college much easier. Highly recommended!',
  },
  {
    name: 'Neha Patel',
    username: '@neha',
    message: 'I appreciated the genuine reviews and accurate information provided about MBBS colleges. It was a lifesaver during my admission process.',
  },
  {
    name: 'Anjali Gupta',
    username: '@anjali',
    message: 'The college recommendations here are spot on. I really liked how it includes key information like rankings and admission details.',
  },
];

const ReviewCard = ({ name, username, message }) => (
  <div className="min-w-[280px] max-w-xs bg-white rounded-xl shadow-md p-4 mx-2 flex-shrink-0">
    <div className="flex items-center space-x-3 mb-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500" />
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-gray-500">{username}</p>
      </div>
    </div>
    <p className="text-sm text-gray-700">{message}</p>
  </div>
);

const ReviewMarquee = () => {
  return (
    <div className="py-20 bg-gray-50 mt-20">

<h1 className="text-8xl text-center mb-20 max-sm:text-4xl " style={{ fontFamily: 'Imperial Script, cursive' }}>
        Student Reviews
      </h1>
      {/* Top Marquee */}
      <Marquee speed={40} gradient={false} className='h-[20vh]'>
        {reviews.map((r, i) => (
          <ReviewCard key={`top-${i}`} {...r} />
        ))}
      </Marquee>

      {/* Bottom Marquee - reverse direction */}
      <Marquee speed={40} gradient={false} direction="right" className="mt-6 h-[20vh]">
        {reviews.map((r, i) => (
          <ReviewCard key={`bottom-${i}`} {...r} />
        ))}
      </Marquee>
    </div>
  );
};

export default ReviewMarquee;
