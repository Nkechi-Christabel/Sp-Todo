import React from 'react';

export const Upgrade = () => {
  return (
    <div className='flex items-center space-x-5 bg-[#CDE53D] h-[116px] mb-5 px-8 relative shadow-md'>
      {' '}
      <img src='/cup.svg' alt='A cup' />
      <p className='font-bold'>Go Pro Upgrade Now</p>
      <span className='flex justify-center items-center absolute right-4 top-0 bg-secondary w-[61.11px] h-[71px] text-[#F2C94C]'>
        $1
      </span>
    </div>
  );
};
