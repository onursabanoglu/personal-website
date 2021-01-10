import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.css'
import Navbar from './navigation'


const Header = () => {
  return (
    <header className={headerStyles.header}>
      <Link className={headerStyles.logo} to="/">
        <span class="avatar"></span>
        <div className={headerStyles.title}>
          <h1 class={headerStyles.name}>Onur Şabanoğlu</h1>
          <span className={headerStyles.job}>Programmer of boxes</span>
        </div>
      </Link>
      <Navbar />
    </header>
  )
}

export default Header