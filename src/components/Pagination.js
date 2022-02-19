import React from 'react';

const Pagination = () => {
  const pages = ['1', '2', '3', '4'];
  return (
    <div className='flex justify-start text-left justify-items-start'>
      <div className='flex align-middle space-x-6'>
        {pages.map((page, i) => (
          <div key={i} className={`border py-1.5 px-4`}>
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
