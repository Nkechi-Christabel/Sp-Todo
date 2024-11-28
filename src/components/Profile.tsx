import React from 'react';
import { Header } from './Header';

export const Profile = () => {
  return (
    <Header>
      <div className='h-[123px] flex  items-center  px-8'>
        <div className='flex space-x-5'>
          <img
            src={'/profile-pic.png'}
            alt='John'
            className='w-[50px] h-[50px]'
          />
          <div className='text-white text-left'>
            <span className='font-bold'>Hello, John</span>
            <p className='max-w-48 text-[25px] font-thin italic leading-7 opacity-75'>
              What are your plans for today?
            </p>
          </div>
        </div>
      </div>
    </Header>
  );
};
