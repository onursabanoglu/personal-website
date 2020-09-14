import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"



const NotFound = () => {
  return (
    <Layout>
      <SEO title="404" />
      <div>
        <h1>Page Not Found</h1>
      </div> 
    </Layout>
  )
}

export default NotFound
