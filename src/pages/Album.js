import React from 'react';
import { Link } from 'react-router-dom';
import album from '../images/album2.jpg';
import './Album.module.css';

const Album = () => {
  const albums = [
    {
      img: album,
      title: 'Hallelujah Challenge Praise Medley',
      desc: 'Track • Nathaniel Bassey',
    },
    {
      img: album,
      title: 'Hallelujah Challenge Worship Medley',
      desc: 'Track • Nathaniel Bassey',
    },
    {
      img: album,
      title: 'What A Saviour',
      desc: 'Track • Nathaniel Bassey',
    },
    {
      img: album,
      title: 'Yahweh Yahweh',
      desc: 'Track • Nathaniel Bassey',
    },
    {
      img: album,
      title: 'Hungry For You',
      desc: 'Track • Nathaniel Bassey',
    },
    {
      img: album,
      title: 'I Remember',
      desc: 'Track • Nathaniel Bassey',
    },
    {
      img: album,
      title: 'Righteous One',
      desc: 'Track • Nathaniel Bassey',
    },
    {
      img: album,
      title: 'Sound the Trumpet – Intro',
      desc: 'Track • Nathaniel Bassey',
    },
  ];

  return (
    <div className='container flex flex-col lg:flex-row md:space-x-9 py-9 mt-6 lg:mt-9 px-5 lg:px-0'>
      <div className='flex-1'>
        <img className='w-full mb-12' src={album} alt='' />
        <div className='flex w-full flex-col border rounded p-6 md:p-9'>
          <h3 className='items-center text-base md:text-3xl text-center text-blog-black font-bold mb-9'>
            Hallelujah Again - Nathaniel Bassey
          </h3>
          <button className='bg-blog-red py-4 w-5/6 rounded text-sm md:text-xl mx-auto text-white mb-9'>
            Download All
          </button>
          <hr className='bg-blog-lightgrey w-full mb-9'></hr>

          <p className='text-bookmark-grey mb-9 text-sm md:text-base'>
            Talented and award-winning gospel Artist Nathaniel Bassey has come
            in with yet another powerful gospel album which he titles Hallelujah
            Again.
          </p>

          <hr className='bg-blog-lightgrey w-full mb-6'></hr>
          <ul className='flex justify-center text-bookmark-grey text-xs md:text-sm space-x-3 md:space-x-9 mb-6 flex-wrap'>
            <li className='border rounded py-3 px-5 mt-3'>
              <Link to='/search/gospel'>Gospel</Link>
            </li>
            <li className='border rounded py-3 px-5 mt-3'>
              <Link to='/search/gospel'>Gospel</Link>
            </li>
            <li className='border rounded py-3 px-5 mt-3'>
              <Link to='/search/gospel'>Gospel</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex-1 mt-9 lg:mt-0'>
        <div className='sm:w-3/4 lg:w-5/12 text-left'>
          <h1 className='md:text-3xl font-bold text-blog-black'>14 Tracks</h1>
        </div>

        <div className='flex flex-col md:gap-y-11 gap-x-9 mt-6 md:mt-11 lg:mt-12 relative'>
          {albums.map((album, i) => (
            <div key={i} className='flex items-center gap-x-4 md:gap-x-9'>
              <div className='text-base text-bookmark-grey'>{i}</div>
              <div className='w-20 h-20'>
                <Link to={`/album/track/${i}`}>
                  <img className='w-full rounded' src={album.img} alt='' />
                </Link>
              </div>

              <div className='flex items-center'>
                <div className='flex flex-col w-full'>
                  <div className='text-xs md:text-xl font-medium'>
                    <Link to={`/album/track/${i}`}>{album.title}</Link>
                  </div>
                  <p className='text-xs md:text-base text-bookmark-grey'>
                    <Link to={`/album/track/${i}`}>{album.desc}</Link>
                  </p>
                </div>

                <div className='absolute right-0 text-right bg-blog-red p-3 rounded text-white cursor-pointer'>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
