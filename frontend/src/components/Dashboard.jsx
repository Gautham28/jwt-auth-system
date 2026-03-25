import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; 

function Dashboard() {
  const [secretData, setSecretData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await api.get('/api/dashboard');
        setSecretData(response.data);
      } catch (error) {
        console.error("Access denied:", error);
        navigate('/login');
      }
    };

    fetchProtectedData();
  }, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem('jwt'); 
    navigate('/login'); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to the VIP Area!</h2>

      {secretData ? (
        <div style={{ padding: '20px', backgroundColor: '#d4edda', color: '#155724', margin: '20px auto', maxWidth: '450px', borderRadius: '8px', border: '1px solid #c3e6cb' }}>
          {secretData}
        </div>
      ) : (
        <p>Checking your VIP wristband...</p>
      )}

      <button onClick={handleLogout} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;