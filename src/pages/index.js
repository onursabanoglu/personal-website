import React from "react"


import Layout from '../components/layout'
import SocialLink from '../components/socialLink'
import SEO from '../components/seo'



import '../styles/global.css'




const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <aside>
        <h2 className="page-title">Home</h2>
        <div className="social-group">
          <h4 className="social-title">Get in Touch:</h4>
          <SocialLink />
        </div>
      </aside>
      <section className="home">
        <p><strong> Hello!</strong></p>
        <p>I am Onur, I live in Istanbul Turkey. Currently, I'm working as a frontend developer at <a href="https://modaltrans.com/">modaltrans</a>.</p>
        <p>Apart from software, my biggest hobby is watching movies. My favorite actresses are <a href="https://www.imdb.com/name/nm0001191/?ref_=nv_sr_srsg_0" target="_blank">Adam Sandler</a> , <a href="https://www.imdb.com/name/nm0136797/?ref_=nv_sr_srsg_0">Steve Carell</a>, and <a href="https://www.imdb.com/name/nm0005562/?ref_=nv_sr_srsg_0">Owen wilson</a>.</p>
      </section>
    </Layout>
  )
}

export default IndexPage
