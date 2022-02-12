import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.css'
import Navbar from './navigation'


const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link to="/">
        <h1 class={headerStyles.title}>Onur Şabanoğlu</h1>
        <span className={headerStyles.job}>boxes designer and developer</span>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header