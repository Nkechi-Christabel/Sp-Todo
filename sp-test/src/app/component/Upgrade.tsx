import React from 'react';

export const Upgrade = () => {
  return (
    <div className='flex items-center space-x-5 bg-[#CDE53D] py-4 px-8 relative'>
      {' '}
      <img src='/public/cup.svg' alt='A cup' />
      <p className=''>Go Pro Upgrade Now</p>
      <span className='absolute right-5 top-0 bg-secondary p-4 text-[#F2C94C]'>
        $1
      </span>
    </div>
  );
};
