import React from 'react';
import LeftSidbarDasboard from '../components/LeftSidbar_dashboard';
import Navbar_dashboard from '../components/Navbar_dashboard';

const Dashboard = ({ Nav }) => {
  Nav();
  return (
    <div>
      <LeftSidbarDasboard />
      <div>
        <Navbar_dashboard />
      </div>
    </div>
  );
};

export default Dashboard;
