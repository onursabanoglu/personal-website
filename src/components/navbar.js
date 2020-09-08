import React from 'react'
import { Link } from 'gatsby'

import NavbarStyles from './navbar.module.css'

const Navbar = (props) => {
  return (
    <nav className={NavbarStyles.navbarWrapper}>
      <Link className={NavbarStyles.navbarLink} activeClassName={NavbarStyles.active} to="/">Home</Link>
      <Link className={NavbarStyles.navbarLink} activeClassName={NavbarStyles.active} to="/blog">Blog</Link>
    </nav> 
  )
}

export default Navbar

