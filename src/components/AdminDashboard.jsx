import React, { useState } from 'react';

const AdminDashboard = () => {
  const [view, setView] = useState('companies'); // Toggle between views

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <div>
        <button onClick={() => setView('companies')}>Manage Companies</button>
        <button onClick={() => setView('employees')}>Manage Employees</button>
        <button onClick={() => setView('attendance')}>View Attendance</button>
      </div>

      {view === 'companies' && <ManageCompanies />}
      {view === 'employees' && <ManageEmployees />}
      {view === 'attendance' && <AttendanceCalendar />}
    </div>
  );
};

const ManageCompanies = () => {
  return (
    <div>
      <h2>Manage Companies</h2>
      <p>Company management functionality goes here...</p>
    </div>
  );
};

const ManageEmployees = () => {
  return (
    <div>
      <h2>Manage Employees</h2>
      <p>Employee management functionality goes here...</p>
    </div>
  );
};

const AttendanceCalendar = () => {
  return (
    <div>
      <h2>Attendance Calendar</h2>
      <p>Attendance calendar functionality goes here...</p>
    </div>
  );
};

export default AdminDashboard;
