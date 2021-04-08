import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColor from './components/SelectColors';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>

  );
}

export default App;
