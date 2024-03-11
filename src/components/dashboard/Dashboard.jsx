import React from 'react';
import Navbar from '../Navbar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-div'>
      <Navbar />
      <div className="content">

        <h2>Welcome to the Smart Tech Event Management System!</h2>
      </div>
    </div>
  );
};

export default Dashboard;