import React from 'react';
// Components
import { LogoIcon } from '../../icons/LogoIcon';
// Style
import './Logo.css';

const Logo = () => {
  return (
    <span className='Logo'>
        <span className='Logo__icon'>
          <LogoIcon/>
        </span>
       <span className='Logo__text'>Pokedex</span>
    </span>
  );
};

export default Logo;
