import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';

const Hero = () => {
  return (
    //Hero
    <div className='md:container flex justify-center flex-col md:flex-row lg:flex-row items-center gap-5 mt-6 lg:mt-9 bg-blog-black text-white py-9'>
      <div className='flex items-center -space-x-3'>
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className='w-14 h-14 md:w-24 md:h-24 overflow-hidden rounded-full bg-center bg-no-repeat bg-cover cursor-pointer'
        >
          {/* <img src={img1} className='w-72' alt='img' /> */}
        </div>
        <div className='z-10 w-16 h-16 md:w-28 md:h-28 overflow-hidden rounded-full bg-center bg-no-repeat bg-cover cursor-pointer'>
          <img src={img2} className='w-72' alt='img' />
        </div>
        <div className='z-20 w-20 h-20 md:w-32 md:h-32 overflow-hidden rounded-full bg-center bg-no-repeat bg-cover cursor-pointer'>
          <img src={img3} className='w-72' alt='img' />
        </div>
        <div className='z-10 w-16 h-16 md:w-28 md:h-28 overflow-hidden rounded-full bg-center bg-no-repeat bg-cover cursor-pointer'>
          <img src={img4} className='w-72' alt='img' />
        </div>
        <div className='w-14 h-14 md:w-24 md:h-24 overflow-hidden rounded-full bg-center bg-no-repeat bg-cover cursor-pointer'>
          <img src={img5} className='w-72' alt='img' />
        </div>
      </div>

      <div className='flex flex-col items-center text-left'>
        <h2 className='text-3xl font-bold md:text-4 text-center lg:text-left mb-3'>
          Top music artist for you
        </h2>
        <p className='text-bookmark-grey text-lg text-center lg:text-left mb-6'>
          We will create an experience just for you
        </p>
      </div>
      {/* <div className='flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10'>
          <img
            className='w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full'
            src={hero}
            alt='hero'
          />
        </div> */}
    </div>
  );
};

export default Hero;
