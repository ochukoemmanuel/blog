import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';

const Lyrics = () => {
  const [copied, setCopied] = useState(false);

  const lyrics =
    'Am counting back your love and mercies cause they are ever new lord I  have a reason to praise your name no matter what am going through as long as I live lord I have a reason to lift my hand in praise no matter what am going through lord as long as I breath';

  const alert = () => {
    setCopied(true);
    window.alert('copied');
  };

  return (
    <>
      <div className='flex justify-between items-center mb-9 flex-wrap'>
        <h3 className='font-bold md:text-3xl'>LYRICS</h3>
        <CopyToClipboard text={lyrics} onCopy={() => alert()}>
          <div className='border border-bookmark-grey py-2 px-4 text-xs md:text-base rounded cursor-pointer hover:shadow-md'>
            COPY LYRICS
          </div>
        </CopyToClipboard>
        <div className='border border-bookmark-grey py-2 px-4 text-base rounded cursor-pointer hover:shadow-md'>
          <svg
            className='w-3 h-3 md:w-6 md:h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z' />
          </svg>
        </div>
      </div>
      <p className='text-bookmark-grey text-sm md:text-lg'>{lyrics}</p>
    </>
  );
};

export default Lyrics;
