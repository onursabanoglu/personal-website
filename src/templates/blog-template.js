import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Disqus } from 'gatsby-plugin-disqus'





export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark

 


  let disqusConfig = {
    
    identifier: post.id,
    title: post.title,
  }



  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="post-wrapper">
        <div className="post-header">
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <div className="post-meta">
            <span className="avatar"></span>
            <div className="meta-group">
              <span className="meta-item">{post.frontmatter.date}</span>
              <span class="meta-item">/</span>
              <span className="meta-item">{post.fields.readingTime.text}</span>
            </div>
          </div>
        </div>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="post-comment"><Disqus config={disqusConfig} /></div>
      </div>
    </Layout>
  )
}