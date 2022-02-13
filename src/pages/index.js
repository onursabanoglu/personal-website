import React from "react"


import Layout from '../components/layout'
import SocialLink from '../components/socialLink'
import SEO from '../components/seo'



import '../styles/main.css'




const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="main">
        <p>👋 Hi, I'm Onur </p>
        <p>I'm a UI Developer, loves to design, CSS enthusiast, following frontend technologies closely and generally developing UI architectures, living in Istanbul, Turkey. I’m currently developing design system architecture at <a href="https://www.parasut.com/" target="_blank">Paraşüt</a>.</p>
        <p>In my remaining time from software, I watch movies and TV shows(I'm a fan of <a href="https://www.imdb.com/name/nm0136797/" target="_blank">Steve Carell</a>), play games, play the ukulele and driving the skateboard.</p>
      </section>
      <footer className="social-group">
        <h4 className="social-title">Get in Touch:</h4>
        <SocialLink />
      </footer>
    </Layout>
  )
}

export default IndexPage
