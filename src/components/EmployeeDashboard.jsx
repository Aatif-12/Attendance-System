import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EmployeeDashboard = () => {
  const [date, setDate] = useState(new Date());
  const [attendance, setAttendance] = useState({
    // Sample attendance data
    '2024-12-24': 'Present',
    '2024-12-25': 'Absent',
  });

  const handlePunchIn = () => {
    alert('Punched In Successfully!');
  };

  const handlePunchOut = () => {
    alert('Punched Out Successfully!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Employee Dashboard</h1>
      <div>
        <button onClick={handlePunchIn}>Punch In</button>
        <button onClick={handlePunchOut}>Punch Out</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Attendance Calendar</h2>
        <Calendar
          value={date}
          tileContent={({ date }) => {
            const formattedDate = date.toISOString().split('T')[0];
            return (
              <div style={{ textAlign: 'center', color: attendance[formattedDate] === 'Present' ? 'green' : 'red' }}>
                {attendance[formattedDate]}
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
