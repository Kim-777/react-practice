import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import './App.scss';
import Counter from './components/views/Counter/Counter';
import UserList from './components/views/UserList/UserList';
import CreateUser from './components/views/CreateUser/CreateUser';
import useInputs from './hooks/useInputs';
import Button from './components/views/Button/Button';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중 ...');
  return users.filter(user => user.active).length;
}

const initialState = {

  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: 'kim',
      email: 'kim@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ] 
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT' :
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name] : action.value
        }
      };
    case 'CREATE_USER' :
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER' :
      return {
        ...state,
        users: state.users.map(user => user.id === action.id ? {...user, active: !user.active} : user)
      };
    case 'REMOVE_USER' :
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default :
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {

  const [{username, email}, onChange, onReset] = useInputs({
    username: '',
    email: ''
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;




  const onCreate = useCallback(
    () => {
      dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    onReset();
    nextId.current += 1;
    },[username, email, onReset]
  )


  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <div className="App">
        {/*
        <Counter />

        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <UserList users={users}/>
        <div> 활성사용자 수 : {count} </div>

        <br />
        */}
        <div className="buttons">
          <Button size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="gray">BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button size="small" color="gray">BUTTON</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="pink">BUTTON</Button>
          <Button color="pink">BUTTON</Button>
          <Button size="small" color="pink">BUTTON</Button>
        </div>
        <div className="buttons">
          <Button size="large" outline>BUTTON</Button>
          <Button color="gray" outline>BUTTON</Button>
          <Button size="small" color="pink" outline>BUTTON</Button>
        </div>
        <div className="buttons">
          <Button size="large" fullWidth>BUTTON</Button>
          <Button size="large" color="gray" fullWidth>BUTTON</Button>
          <Button size="large" color="pink" fullWidth>BUTTON</Button>
        </div>
        
      </div>
    </UserDispatch.Provider>
  );
}

export default App;
