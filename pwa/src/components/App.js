import React, {useEffect}  from 'react';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';
import {v4 as uuid } from 'uuid';

function App() {
  const [userID, setID] = useLocalStorage('userID');

  useEffect(() => {
    if(!userID){
      setID(uuid());
    }
  }, [userID, setID])

  return (
    <Dashboard userID={userID} />
  );
}

export default App;
