import React from 'react';
import PageDrawer from '../layout/PageDrawer';
import Navbar from '../layout/Navbar';

const Dashboard = () => {
  return (
    <div>
      <Navbar name='Dashboard' />
      <PageDrawer />
    </div>
  );
};

export default Dashboard;
