import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.css'
import Logo from '../images/logo.png'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.logo} to="/">
      <img src={Logo} alt="Logo" />
      </Link>
    </header>
  )
}

export default Header