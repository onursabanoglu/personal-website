import React from 'react'

import layoutStyles from './layout.module.css'
import Header from './header'
import Footer from './footer'
import SEO from "./seo"


const Layout = (props) => {
  return (
    <>
      <SEO />
      <main>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.wrapper}>
            <Header />
            <div className={layoutStyles.content}>
              {props.children}
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  )
}

export default Layout