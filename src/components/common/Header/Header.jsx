import React from 'react'
import { Container } from 'react-grid-system'
// Components
import { Logo } from '../Logo/index'
// Style
import './Header.css'

const Header = () => {
  return (
    <header className='Header'>
      <Container>
        <Logo />
      </Container>
    </header>
  )
}

export default Header
