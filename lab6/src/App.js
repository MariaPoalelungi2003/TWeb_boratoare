import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('Mariana');
  const [password, setPassword] = useState('pass1234567');
  const [message, setMessage] = useState('Bine ati venit');
  const [users, setUsers] = useState([]);

  // La inițializarea aplicației, încarcăm datele de utilizatori din localStorage
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verificăm dacă datele introduse de utilizator corespund cu datele din array-ul de utilizatori
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser || (username === 'Mariana' && password === 'pass1234567')) {
      setMessage('Logare reușită!');
    } else {
      setMessage('Nume de utilizator sau parolă incorecte!');
    }
  };


  return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
          <p>{message}</p>
        </header>
      </div>
  );
}

export default App;
