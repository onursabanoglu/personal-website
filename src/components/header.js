import React from 'react'
import { Link } from 'gatsby'

import Footer from './footer'
import headerStyles from './header.module.css'
import Logo from '../images/logo.png'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logoWrapper}>
        <Link className={headerStyles.logo} to="/">
        <h1 className={headerStyles.logoTitle}>10ur</h1>
        </Link>
      </div>
      <div className={headerStyles.headerContent}>
        
      </div>
      <Footer />
    </header>
  )
}

export default Header