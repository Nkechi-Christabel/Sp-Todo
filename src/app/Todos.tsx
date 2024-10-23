import React from 'react';
import { Tasks } from './component/Tasks';
import { Upgrade } from './component/Upgrade';
import { Profile } from './component/Profile';
import { AddTodo } from './component/AddTodo';

const Todos = () => {
  return (
    <div className='h-screen container m-auto max-w-[414px] bg-[#F3F3F3] relative'>
      <Profile />
      <Upgrade />
      <Tasks />
      <AddTodo />
    </div>
  );
};

export default Todos;
