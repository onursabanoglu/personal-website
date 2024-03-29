import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

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


  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="post-wrapper">
        <div className="post-header">
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <div className="post-meta">
            <span>{post.frontmatter.date}</span>
            <span> • </span>
            <span>{post.fields.readingTime.text}</span>
          </div>
        </div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}
