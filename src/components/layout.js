import React from 'react'


import Header from './header'

import layoutStyles from './layout.module.css'



const Layout = (props) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      {props.children}
    </div>
  )
}

export default Layout