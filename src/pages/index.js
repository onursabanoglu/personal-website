import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <Layout>
      <Link to="/blog">Blog</Link>
    </Layout>
  )
}

export default IndexPage
