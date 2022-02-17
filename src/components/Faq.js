import React from 'react';

const Faq = () => {
  return (
    <section className='bg-bookmark-white py-20'>
      <div className='container'>
        <div className='sm:w-3/4 lg:w-5/12 mx-auto px-2'>
          <h1 className='text-3xl text-center text-bookmark-blue'>
            Frequently Asked Questions
          </h1>
          <p className='text-center text-bookmark-grey mt-4'>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>

        <div className='flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto'>
          <div className='flex items-center border-b py-4'>
            <span className='flex-1'>What is a Bookmark?</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <div className='flex items-center border-b py-4'>
            <span className='flex-1'>How can I request a new browser?</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <div className='flex items-center border-b py-4'>
            <span className='flex-1'>Is there a mobile app?</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <div className='flex items-center border-b py-4'>
            <span className='flex-1'>What about other Chromium browsers?</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <button
            type='button'
            class='flex self-center mt-12 btn btn-purple hover:bg-white hover:text-black'
          >
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
