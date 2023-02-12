import { useState } from 'react';
import UserContext from './context/UserContext';
import './App.css';
import User from './components/User';
import ChangeUser from './components/ChangeUser';

function App() {
  const [user, setUser] = useState('name');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  );
}

export default App;
