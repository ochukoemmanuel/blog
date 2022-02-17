import React from 'react';
import song1 from '../images/song1.jpg';
import song2 from '../images/song2.png';
import song3 from '../images/song3.jpg';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Releases = () => {
  const releases = [
    {
      img: song1,
      title: 'Dunsin Oyekan – One On One',
      desc: "As Faces are Different So our Needs are We have a Father Who's Capable of Reaching Us ONE ON ONE",
    },
    {
      img: song2,
      title: 'Kennedy - I must praise you', // eslint-disable-next-line
      desc: 'must praise you is a song that was baited in a place of\
      intense worship that moment when the enemy try to give me no\
      reason to praise God then I ....',
    },
    {
      img: song3,
      title: 'Your Spirit (feat. Kierra Sheard) Song • Tasha Cobbs Leonard', // eslint-disable-next-line
      desc: 'Highlight your hottest new singles, best albums, and favorite\
      playlists to your Audiomack profile, making sure fans never\
      miss a release! Try it now',
    },
  ];

  return (
    <div className='container mt-6 lg:mt-9 mb-9 px-5 lg:px-0'>
      <div className='sm:w-3/4 lg:w-5/12 text-left'>
        <h1 className='text-3xl font-bold text-blog-black'>New Releases</h1>
      </div>

      <div className='flex flex-col lg:flex-row justify-center mx-auto gap-x-9 mt-11 lg:mt-12'>
        <div className='flex flex-col justify-between items-center gap-y-11'>
          {releases.map((release, i) => (
            <div key={i} className='md:flex items-center gap-x-9'>
              <div className='w-full h-full md:w-60 md:h-60 mb-9 md:mb-0'>
                <Link to='/'>
                  <img className='w-full' src={release.img} alt='' />
                </Link>
              </div>

              <div className='flex flex-1 flex-col'>
                <div className='text-lg md:text-xl font-medium'>
                  <Link to='/'>{release.title}</Link>
                </div>
                <p className='text-bookmark-grey mt-4'>
                  <Link to='/'>{release.desc}</Link>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='bg-blog-lightgrey w-0.5'></div>

        <div className='mt-9 lg:mt-0 flex justify-center'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Releases;
