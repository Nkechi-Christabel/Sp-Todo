import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../hooks/app-context';

interface Props {
  title: string;
  checked: boolean;
  id: string;
}

const Task = ({ title, id, checked }: Props) => {
  const { todos, setTodos } = useAppContext();

  return (
    <div className='bg-white shadow-lg my-3 ml-4 px-8 rounded-md flex items-center justify-between text-secondary w-[382px] h-[91px]'>
      <label className='flex items-center space-x-4 cursor-pointer '>
        <span
          className={`block h-8 w-8 rounded-full border-2 ${
            checked ? 'bg-[#53DA69] border-[#49C25D]' : 'border-secondary'
          }`}
        >
          {' '}
          {checked && (
            <div className=' flex justify-center items-center h-full'>
              {' '}
              <Icon icon='quill:checkmark' className='w-6 text-[#399649]' />
            </div>
          )}
        </span>

        <input
          type='checkbox'
          checked={checked}
          onChange={(ev) => {
            setTodos(
              todos.map((todo) =>
                todo.id === id ? { ...todo, checked: ev.target.checked } : todo
              )
            );
          }}
          className='rounded-full sr-only'
        />

        <span
          className={`flex-1 text-left font-medium ${
            checked ? 'line-through text-[#8D8D8D]' : ''
          }`}
        >
          {title}
        </span>
      </label>
      <button
        type='button'
        className='border border-secondary p-2 rounded font-medium'
      >
        <Link to={`/${id}/edit`}>Edit</Link>
      </button>
    </div>
  );
};

export default Task;
