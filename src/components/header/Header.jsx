import React from 'react';
import jslogo from '../../fsprojects.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={jslogo} alt='JSProjects Logo' />
    </div>
  );
};

export default Header;
