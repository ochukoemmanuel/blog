import React from 'react';
import Albums from '../components/Albums';
import Hero from '../components/Hero';
import Releases from '../components/Releases';

const index = () => {
  return (
    <div>
      <Hero />
      <div className='bg-bookmark-white '>
        <Albums />
        <Releases />
      </div>
    </div>
  );
};

export default index;
