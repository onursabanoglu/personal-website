import React from "react"


import Layout from '../components/layout'
import SocialLink from '../components/socialLink'
import SEO from '../components/seo'


import '../styles/global.css'




const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h2 className="page-title">Home</h2>
        <SocialLink />
      </div>
      <section className="hero-wrapper">
        <p className="hero-subheading">Metin Gelicek</p>
      </section>
    </Layout>
  )
}

export default IndexPage
