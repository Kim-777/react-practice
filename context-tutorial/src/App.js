import React from 'react';
import {ColorProvider} from './contexts/color';
import SelectColor from './components/SelectColor';
import ColorBox from './components/ColorBox';

function App() {
  return (
    <>

      <ColorProvider>
        <div>
          <SelectColor />
          <br />
          <ColorBox />
        </div>
      </ColorProvider>
    </>
  );
}

export default App;
