import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidbar_dasboard = () => {
  return (
    <div className='container bg-white'>
      <Link to='/'>
        <h1 className='font-black text-2xl'>LOGO.</h1>
      </Link>

      <ul>
        <li>Dashboard</li>
      </ul>
    </div>
  );
};

export default LeftSidbar_dasboard;
