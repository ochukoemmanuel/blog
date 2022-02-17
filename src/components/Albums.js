import React from 'react';
import album1 from '../images/album1.jpeg';
import album2 from '../images/album2.jpg';
import album3 from '../images/album3.jfif';
import album4 from '../images/album4.jpg';
import album5 from '../images/album5.jpg';
import './Albums.module.css';
import Slider from 'react-slick';
import RightArrow from './RightArrow';
import { Link } from 'react-router-dom';

const Albums = () => {
  const settings = {
    dots: !true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    // prevArrow: <L_arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: 'linear',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 5000,
          cssEase: 'linear',
        },
      },
    ],
  };

  const images = [
    { album: album1, title: 'The Gospel of The Kingdom', desc: 'Album' },
    { album: album2, title: 'Hallelujah Again', desc: 'Album' },
    { album: album5, title: 'Man Of Galilee', desc: 'Album' },
    { album: album3, title: 'Greatest Lord', desc: 'Album' },
    { album: album4, title: 'Too Faithful', desc: 'Album' },
    { album: album5, title: 'Man Of Galilee', desc: 'Album' },
  ];

  return (
    <div className='relative container py-9 mt-6 lg:mt-9 px-5 lg:px-0'>
      <div className='sm:w-3/4 lg:w-5/12 text-left'>
        <h1 className='text-3xl font-bold text-blog-black'>Albums & Eps</h1>
      </div>

      <div className='relative mt-11 lg:mt-12'>
        <div className='relative flex flex-1 justify-center gap-x-4'>
          <Slider className='slide z-0' {...settings}>
            {images.map((img, i) => (
              <div
                key={i}
                className='w-full md:w-full md:h-full md:-ml-6 outline-none'
              >
                <Link to='/single/1'>
                  <img
                    key={i}
                    className='img md:w-52 md:mx-6'
                    src={img.album}
                    alt=''
                  />
                </Link>
                <Link to='/single/1'>
                  <div className='mt-4 font-medium text-base md:text-lg md:mx-6'>
                    {img.title}
                  </div>
                </Link>
                <Link to='/single/1'>
                  <p className='text-bookmark-grey md:mx-6'>{img.desc}</p>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Albums;
