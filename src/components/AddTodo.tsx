import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../hooks/app-context';

export const AddTodo = () => {
  const navigate = useNavigate();
  const { todos, setTodos } = useAppContext();
  return (
    <button
      onClick={() => {
        const newTodo = {
          id: crypto.randomUUID(),
          title: 'Untitled todo',
          checked: false,
        };
        setTodos([...todos, newTodo]);
        navigate(`/${newTodo.id}/edit`);
      }}
      className='absolute right-3 bottom-3  bg-primary border-2 border-[#123EB1] rounded-full w-14 h-14 shadow-xl'
    >
      <div className='flex justify-center items-center'>
        {' '}
        <span className=' text-white text-xl font-bold'>+</span>
      </div>
    </button>
  );
};
