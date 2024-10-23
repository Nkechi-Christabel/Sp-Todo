import React, { useState } from 'react';
import Task from './Task';
import { useAppContext } from '../../hooks/app-context';

export const Tasks = () => {
  const { todos } = useAppContext();
  return (
    <div className=' p-3'>
      {todos.map((todo) => (
        <Task key={todo.id} {...todo} />
      ))}
    </div>
  );
};
