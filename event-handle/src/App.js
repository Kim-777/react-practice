import React, { Component } from 'react';
import EventPractice from './components/EventPractice';
import EventFunction from './components/EventFunction';
import ValidationSample from './components/ValidationSample';
import ScrollBox from './components/ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox = ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          ๋งจ์๋๋ก
        </button>
      </div>
    );
  }
}

export default App;
