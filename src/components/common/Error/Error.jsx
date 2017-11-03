import React from 'react'
// Components
import { BrokenEggIcon } from '../../icons/BrokenEggIcon/index'
// Styles
import './Error.css'

const Error = () => {
  return (
    <div className='Error'>
      <div className='Error__wrapper'>
        <BrokenEggIcon width={150} height={150} />
        <p className='Error__text'>Something goes wrong, <br />try to reload the page...</p>
      </div>
    </div>
  )
}

export default Error
