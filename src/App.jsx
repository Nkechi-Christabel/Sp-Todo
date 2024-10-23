import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todos from './app/Todos';
import Edit from './app/EditTodo';
import './App.css';
import { AppContext } from './hooks/app-context';
import { useState } from 'react';

const defaultTodos = [
  { title: 'Tarining at the gym', id: crypto.randomUUID(), checked: true },
  {
    title: 'Play Paddle with friends',
    id: crypto.randomUUID(),
    checked: false,
  },
  { title: 'Burger BBQ with family', id: crypto.randomUUID(), checked: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  return (
    <AppContext.Provider value={{ todos, setTodos }}>
      <Router>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
