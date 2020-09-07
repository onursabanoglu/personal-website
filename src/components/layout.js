import React from 'react'


import Header from './header'
import Footer from './footer'
import layoutStyles from './layout.module.css'



const Layout = (props) => {
  return (
    <div className={layoutStyles.wrapper}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout