import React from 'react';
// Component
import { ClockIcon } from '../../icons/ClockIcon';
// Styles
import './Loading.css'

const Loading = () => {
  return (
    <div className='Loading'>
      <div className='Loading__wrapper'>
        <ClockIcon width={150} height={150}/>
        <p className='Loading__text'>Loading, please wait...</p>
      </div>
    </div>
  );
};


export default Loading;
