import React from "react"


import Layout from '../components/layout'
import Header from '../components/header'
import SocialLink from '../components/socialLink'
import Footer from '../components/footer'

import '../styles/global.css'



const IndexPage = () => {
  return (
    <Layout>
      <div className="container">
        <section className="hero">
          <Header />
          <div className="hero-content">
            <p className="job-title">Programmer of boxes</p>
            <h2 className="hero-heading">Hello 🤙</h2>
            <p className="hero-subheading">Hey, I’m Onur Şabanoğlu.</p>
          </div>
          <SocialLink />
          <Footer />
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
