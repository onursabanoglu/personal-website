import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.css'
import Navbar from './navigation'


const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.logo} to="/">
        <span class="avatar"></span>
        <h1 class={headerStyles.name}>Onur Şabanoğlu</h1>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header