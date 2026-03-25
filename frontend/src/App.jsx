import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      
      <nav style={{ textAlign: 'center', marginBottom: '30px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <h2>My Secure App</h2>
        <Link to="/register" style={{ margin: '0 15px', textDecoration: 'none', color: 'blue' }}>Register</Link>
        <Link to="/login" style={{ margin: '0 15px', textDecoration: 'none', color: 'blue' }}>Login</Link>
      </nav>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </div>
  );
}

export default App;