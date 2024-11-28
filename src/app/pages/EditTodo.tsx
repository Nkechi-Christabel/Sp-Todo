import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../../hooks/app-context';
import { Header } from '../../components/Header';

const EditTodo = ({}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { todos, setTodos } = useAppContext();
  const todo = todos.find(({ id: todoId }) => todoId === id);

  return todo ? (
    <div className='h-screen container m-auto max-w-[635px] flex flex-col'>
      <Header>
        <h1 className='h-20 flex items-center justify-center text-white font-bold text-2xl'>
          Edit Task
        </h1>
      </Header>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();

          const formData = new FormData(ev.currentTarget);
          const title = (formData.get('title') ?? '') as string;
          setTodos(
            todos.map((todo) =>
              todo.id === id && todo.title !== title ? { ...todo, title } : todo
            )
          );
          navigate('/');
        }}
        className='flex-1 flex flex-col bg-[#F3F3F3] px-5'
      >
        <div className='flex-1'>
          <p className='text-left py-3'>Task Name</p>
          <input
            type='text'
            name='title'
            defaultValue={todo.title}
            className='bg-white border-2 border-[#CBCBCB] text-[#0D2972] w-full h-[69px] rounded-[9px] text-xl p-3'
          />
        </div>
        <div className='flex items-end space-x-3 pb-4'>
          <button
            onClick={() => {
              setTodos(todos.filter((todo) => todo.id !== id));
              navigate('/');
            }}
            type='button'
            className='h-[61px] border-2 border-[#720D0D] bg-[#AB3535] text-white rounded-md leading-10 px-6 shadow'
          >
            Delete
          </button>
          <button
            type='submit'
            className='h-[61px] flex-1 border-2  border-[#0D2972] bg-primary text-white rounded-md leading-10 shadow'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className='flex justify-center items-center h-screen font-bold text-lg text-primary'>
      Todo not found
    </div>
  );
};

export default EditTodo;
