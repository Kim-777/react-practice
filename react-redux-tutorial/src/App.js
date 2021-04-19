import React from 'react';
import CounterContainer from './containers/CounterContainer';
import './App.css';
import TodosContainer from './containers/TodosContainer';
function App() {
  return (
    <div className="App">
      <CounterContainer number={0} />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
