import React from 'react'
import layoutStyles from './layout.module.css'
import Header from './header'
import SEO from "./seo"


const Layout = (props) => {
  return (
    <>
      <SEO />
      <main className={layoutStyles.wrapper}>
        <div className={layoutStyles.container}>
          <Header />
          <div className={layoutStyles.content}>
            {props.children}
          </div>
        </div>
      </main>
    </>
  )
}

export default Layout