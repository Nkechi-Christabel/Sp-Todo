import { createContext, useContext } from 'react';

interface ITodo {
  title: string;
  id: string;
  checked: boolean;
}
export const AppContext = createContext<{
  todos: ITodo[];
  setTodos(todos: ITodo[]): void;
}>({ todos: [], setTodos: () => [] });
export const useAppContext = () => useContext(AppContext);
