import React from 'react';
import fslogo from '../../fsprojects.png';
import gllogo from '../../glennludszuweit.png';
import gnglablogo from '../../gnglab.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <a
        href='https://glennludszuweit.de/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={gllogo} alt='Glenn Ludszuweit Logo' />
      </a>
      <a href='https://gnglab.de/' target='_blank' rel='noopener noreferrer'>
        <img src={gnglablogo} alt='gnglab Logo' />
      </a>
      <a href='http://fsprojects.de/' target='_blank' rel='noopener noreferrer'>
        <img src={fslogo} alt='FSProjects Logo' />
      </a>
    </div>
  );
};

export default Footer;
