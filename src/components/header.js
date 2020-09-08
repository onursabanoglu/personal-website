import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.css'

import Navbar from './navbar'


const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.logo} to="/">
        <h1 className={headerStyles.logoTitle}>10ur.</h1>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header