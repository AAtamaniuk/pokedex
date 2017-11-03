import React from 'react'
import PropTypes from 'prop-types'

const LogoIcon = ({width = 30, height = 30}) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 126.334 126.334'>
      <circle cx='63.167' cy='63.166' r='61.667' fill='#FF1A1A' />
      <ellipse cx='63.167' cy='63.166' fill='#D60909' rx='61.667' ry='47.232' />
      <path fill='#FFF' d='M1.5 63.166c0 34.06 27.61 61.668 61.667 61.668s61.667-27.607 61.667-61.668H1.5z' />
      <path fill='#D8E5EA' d='M63.167 110.398c34.058 0 61.667-21.148 61.667-47.232H1.5c0 26.084 27.61 47.232 61.667 47.232z' />
      <path fill='#33363A' d='M63.167 0C28.337 0 0 28.336 0 63.166s28.336 63.168 63.167 63.168 63.167-28.337 63.167-63.168C126.334 28.336 97.998 0 63.167 0zm0 3c32.673 0 59.328 26.183 60.13 58.666H3.036C3.84 29.183 30.495 3 63.168 3zm0 120.334c-32.673 0-59.328-26.184-60.13-58.668h120.26c-.802 32.484-27.457 58.668-60.13 58.668z' />
      <circle cx='63.167' cy='68.868' r='16.764' fill='#A7BBC1' />
      <circle cx='63.167' cy='63.167' r='16.764' fill='#FFF' />
      <path fill='#D8E5EA' d='M51.313 75.02c-6.547-6.546-6.546-17.16 0-23.708 6.547-6.546 17.16-6.546 23.707 0' />
      <path fill='#33363A' d='M63.167 81.432c-4.878 0-9.465-1.9-12.915-5.35-7.12-7.12-7.12-18.707 0-25.83 7.122-7.12 18.708-7.12 25.83 0 3.45 3.45 5.35 8.038 5.35 12.916s-1.9 9.465-5.35 12.915c-3.45 3.45-8.036 5.35-12.915 5.35zm0-33.522c-3.91 0-7.817 1.487-10.793 4.463-5.95 5.953-5.95 15.637 0 21.588 2.883 2.884 6.716 4.472 10.793 4.472 4.077 0 7.91-1.588 10.792-4.47 2.882-2.884 4.47-6.717 4.47-10.794 0-4.077-1.587-7.91-4.47-10.794-2.975-2.976-6.884-4.464-10.793-4.464z' />
      <path fill='#FFF' d='M68.87 68.87c-3.148 3.146-8.256 3.146-11.403 0-3.15-3.15-3.148-8.255 0-11.403 3.148-3.15 8.255-3.148 11.403 0 3.15 3.148 3.15 8.253 0 11.403z' />
      <path fill='#D8E5EA' d='M57.467 57.467c3.148-3.15 8.255-3.148 11.403 0 3.148 3.148 3.148 8.253 0 11.403' />
      <path fill='#33363A' d='M63.168 72.725c-2.45 0-4.898-.93-6.762-2.794-3.73-3.73-3.73-9.796 0-13.524 1.805-1.807 4.207-2.802 6.76-2.802 2.556 0 4.958.996 6.764 2.802 3.728 3.727 3.728 9.794 0 13.524-1.864 1.864-4.313 2.795-6.762 2.795zm0-16.12c-1.754 0-3.402.682-4.64 1.922-2.56 2.56-2.56 6.723 0 9.282 2.557 2.556 6.722 2.556 9.282 0 2.558-2.56 2.557-6.725 0-9.283-1.24-1.24-2.89-1.922-4.643-1.923z' />
    </svg>
  )
}

LogoIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

export default LogoIcon
