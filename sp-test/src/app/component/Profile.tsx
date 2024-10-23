import React from 'react';
import { Header } from './Header';

export const Profile = () => {
  return (
    <Header>
      <div className='h-[123px] flex items-center space-x-5 px-8'>
        <img
          src={'/public/profile-pic.png'}
          alt='John'
          className='w-[50px] h-[50px]'
        />
        <div className='text-white text-left'>
          <span>Hello John</span>
          <p className=''>What are your plans for today</p>
        </div>
      </div>
    </Header>
  );
};
