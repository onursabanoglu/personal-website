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
        <p>I’m a software developer with an  understanding of design. For the last 9 years, I’ve worked on making products for Apple devices.</p>
        <p>Currently, I work for AlTayer Group remotely from Istanbul.</p>
        <p>Offscreen, I'm avid for good tea, coffee and fantasy & science fiction books. I mostly listen to progressive rock and play drums.</p>
        <p>Throughout my career, I've released and maintained more than 10 native iOS apps, many more web apps for clients. Started NSIstanbul iOS Developer Community & Kanvas Design Community.</p>
      </section>
    </Layout>
  )
}

export default IndexPage
