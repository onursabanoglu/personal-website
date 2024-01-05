import React from "react"

import Layout from "../components/layout"
import SocialLink from "../components/socialLink"
import SEO from "../components/seo"

import "../styles/main.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="main">
        <p>👋 Hi, I'm Onur </p>
        <p>
          I'm a UI Developer, loves to design, CSS enthusiast, following
          frontend technologies closely and generally developing UI
          architectures, living in Istanbul, Turkey. I’m currently developing
          design system architecture at{" "}
          <a href="https://www.parasut.com/" target="_blank">
            Paraşüt
          </a>
          .
        </p>
      </section>
      <footer className="social-group">
        <h5 className="social-title">Get in Touch:</h5>
        <SocialLink />
      </footer>
    </Layout>
  )
}

export default IndexPage
