import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Info from './components/Info';
import Average from './components/Average';

function App() {

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Counter />
      <hr />
      <button onClick={
        () => setVisible(!visible)
      }
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
      <hr />
      <Average />
    </>
  );
}

export default App;
