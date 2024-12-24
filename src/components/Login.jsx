import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('admin'); // admin or employee
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulated login
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/employee');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
