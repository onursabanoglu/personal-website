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
        <SocialLink />
      </aside>
      <section>
        <p> <strong> Hello!</strong></p>
      </section>
    </Layout>
  )
}

export default IndexPage
