import React, { useState } from "react";
import api from "../api";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const handleRegister = async (e) => {
        e.preventDefault();

        try{
            const response = await api.post('/auth/register', {
                username: username,
                password: password
            });

            setMessage(response.data);
        } catch (error) {
            setMessage(error.response?.data || "an error occured during registeration");
        }
    };

    return (
        <div style={{ maxWidth: '300px', margin: '50px auto', textAlign: 'center' }}>
          <h2>Create an Account</h2>

          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ padding: '10px'}}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ padding: '10px'}}
            />

            <button type="Submit" style={{ padding: '10px', cursor: 'pointer'}}>
                Register
            </button>
          </form>

          {message && <p style={{ marginTop: '20px', fontWeight: 'bold'}}>{message}</p>}
        </div>
    );
}

export default Register;