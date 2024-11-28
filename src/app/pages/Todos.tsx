import React from 'react';
import { Tasks } from '../../components/Tasks';
import { Upgrade } from '../../components/Upgrade';
import { Profile } from '../../components/Profile';
import { AddTodo } from '../../components/AddTodo';

const Todos = () => {
  return (
    <div className='h-screen container m-auto max-w-[414px] bg-[#F3F3F3] relative overflow-auto'>
      <Profile />
      <Upgrade />
      <Tasks />
      <AddTodo />
    </div>
  );
};

export default Todos;
