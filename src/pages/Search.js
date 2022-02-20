import React from 'react';
import song1 from '../images/song1.jpg';
import song2 from '../images/song2.png';
import song3 from '../images/song3.jpg';
import album1 from '../images/album1.jpeg';
import { Link } from 'react-router-dom';

const Search = () => {
  const albums = [
    {
      img: album1,
      title: 'The Gospel of The Kingdom',
      desc: 'Album • Dusin Oyekan',
      date: 'Jan 20, 22',
    },
  ];

  const releases = [
    {
      img: song1,
      title: 'Dunsin Oyekan – One On One',
      desc: 'Song • Dusin Oyekan',
      date: 'Jan 20, 22',
    },
    {
      img: song2,
      title: 'Kennedy - I must praise you', // eslint-disable-next-line
      desc: 'Song • Kenndy Nkem',
      date: 'Jan 20, 22',
    },
    {
      img: song3,
      title: 'Your Spirit (feat. Kierra Sheard) ', // eslint-disable-next-line
      desc: 'Song • Tasha Cobbs Leonard',
      date: 'Jan 20, 22',
    },
  ];

  return (
    <div className='container p-5 md:px-16 w-full md:w-2/3 mb-11'>
      <div className=''>
        <div className='sm:w-3/4 lg:w-5/12 text-left'>
          <h1 className='md:text-3xl font-bold text-blog-black md:mt-11'>
            Albums & Eps
          </h1>
        </div>

        <div className='flex flex-col lg:flex-row gap-x-9 mt-6 md:mt-11 lg:mt-12'>
          <div className='flex flex-col md:gap-y-11'>
            {albums.map((album, i) => (
              <div
                key={i}
                className='flex w-full align-middle gap-x-4 md:gap-x-9'
              >
                <div className='w-20 h-20 md:w-32 md:h-32 md:mb-0'>
                  <Link to='/album/album'>
                    <img className='w-full' src={album.img} alt='' />
                  </Link>
                </div>

                <div className='flex flex-col w-full md:w-2/3'>
                  <div className='text-xs md:text-xl font-medium'>
                    <Link to='/album/album'>{album.title}</Link>
                  </div>
                  <p className='text-xs md:text-base text-bookmark-grey mt-1 lg:mt-4'>
                    <Link to='/album/album'>{album.desc}</Link>
                  </p>
                  <p className='text-xs md:text-base text-bookmark-grey mt-1 lg:mt-4'>
                    <Link to='/album/album'>{album.date}</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-9'>
        <div className='sm:w-3/4 lg:w-5/12 text-left'>
          <h1 className='md:text-3xl font-bold text-blog-black md:mt-11'>
            Releases
          </h1>
        </div>

        <div className='flex flex-col lg:flex-row gap-x-9 mt-6 md:mt-11 lg:mt-12'>
          <div className='flex flex-col md:gap-y-11'>
            {releases.map((release, i) => (
              <div
                key={i}
                className='flex w-full align-middle gap-x-4 md:gap-x-9'
              >
                <div className='w-20 h-20 md:w-32 md:h-32 md:mb-0'>
                  <Link to='/single/search'>
                    <img className='w-full' src={release.img} alt='' />
                  </Link>
                </div>

                <div className='flex flex-col w-full md:w-2/3'>
                  <div className='text-xs md:text-xl font-medium'>
                    <Link to='/single/search'>{release.title}</Link>
                  </div>
                  <p className='text-xs md:text-base text-bookmark-grey mt-1 lg:mt-4'>
                    <Link to='/single/search'>{release.desc}</Link>
                  </p>
                  <p className='text-xs md:text-base text-bookmark-grey mt-1 lg:mt-4'>
                    <Link to='/single/search'>{release.date}</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
