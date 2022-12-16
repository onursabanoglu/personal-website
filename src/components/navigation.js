import React from "react"
import { Link } from "gatsby"
import NavbarStyles from "./navigation.module.css"

const Navbar = props => {
  return (
    <nav className={NavbarStyles.navigation}>
      <Link
        className={NavbarStyles.navLink}
        activeClassName={NavbarStyles.active}
        to="/"
      >
        Home
      </Link>
      <Link
        className={NavbarStyles.navLink}
        activeClassName={NavbarStyles.active}
        to="/blog"
      >
        Blog
      </Link>
    </nav>
  )
}

export default Navbar
