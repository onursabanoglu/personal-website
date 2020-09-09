import React from "react"


import Layout from '../components/layout'
import SocialLink from '../components/socialLink'


import '../styles/global.css'



const IndexPage = () => {
  return (
    <Layout>
      <section className="hero-wrapper">
        <p className="job-title">Programmer of boxes</p>
        <h2 className="hero-heading">Hello 🤙</h2>
        <p className="hero-subheading">Hey, I’m Onur Şabanoğlu. I live in Istanbul.</p>
        <SocialLink />
      </section>
    </Layout>
  )
}

export default IndexPage
