import './App.css';
// import EventPractice from './components/EventPractice';
// import ValidationSamplefrom from './components/ValidationSample';
// import ScrollBox from './components/ScrollBox'
import React, { Component } from 'react';
import IteraionSample from './components/IteraionSample'


class App extends Component {
  
  render() {
    return (
      // <div>
      //   <EventPractice />
      //   <ValidationSamplefrom />
      //   <hr />
      //   <ScrollBox ref={(ref) => this.scrollBox = ref}/>
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨 앞으로
      //   </button>
      // </div>
      <IteraionSample />
    )
  }

}

export default App;
