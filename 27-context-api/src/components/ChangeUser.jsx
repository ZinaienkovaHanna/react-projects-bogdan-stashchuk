import UserContext from '../context/UserContext';
import { useContext } from 'react';

const ChangeUser = () => {
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log('handleClick', user);
  };

  return (
    <>
      <label>
        Username:
        <input
          type="text"
          placeholder="Enter your name..."
          value={user}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleClick} type="submit">
        Change user
      </button>
    </>
  );
};

export default ChangeUser;
