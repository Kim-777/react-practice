import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for(let i =1; i<= 500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    })
  }

  return array;
}

function App() {

  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(501);

  const onInsert = useCallback(
  text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    setTodos(todos => todos.concat(todo));
  },
  [],
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos => 
        todos.filter(todo => todo.id !== id)
      )
    },
    [],
  )

  const onToggle = useCallback(
    id => {
      setTodos(todos => 
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo)
      )
    },
    [],
  )

  return (
    <div>
      <TodoTemplate>
          <TodoInsert onInsert={onInsert}/>
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
