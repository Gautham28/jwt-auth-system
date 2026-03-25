import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from '../api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); 
    
    try {
      
      const response = await api.post('/auth/login', {
        username: username,
        password: password
      });
      
      const token = response.data.jwt; 
      localStorage.setItem('jwt', token); 
      
      navigate('/dashboard'); 
      
    } catch  {
      setError("Invalid username or password!");
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Login</h2>
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
          style={{ padding: '10px' }}
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ padding: '10px' }}
        />
        
        <button type="submit" style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
          Login
        </button>
      </form>

      {error && <p style={{ marginTop: '20px', color: 'red', fontWeight: 'bold' }}>{error}</p>}
    </div>
  );
}

export default Login;