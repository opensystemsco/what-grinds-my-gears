import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [userID, setID] = useLocalStorage('userID');

  return (
    userID ? <Dashboard userID={userID} /> : <Login onIDSubmit={setID}/>
  );
}

export default App;
