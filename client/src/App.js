import React, {useState} from 'react';
import './App.scss';
import CheckBox from './components/views/CheckBox/CheckBox';
import EventPractice from './components/views/EventPractice/EventPractice';

function App() {

  
  const [check, setCheck] = useState(false);

  const onChange = event => {
    setCheck(event.target.checked);
  }

    
  return (
      <div>

        {/* <CheckBox onChange={onChange} checked={check}>
          다음 약관에 모두 동의
        </CheckBox>
        <p>
          <b>check : </b>
          {check ? 'true' : 'false'}
        </p> */}
        <EventPractice />
      </div>

  );
}

export default App;


