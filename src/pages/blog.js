import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'


const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
            fields {
              slug
              readingTime {
                text
              }
            }
          }
        }
      }
    }
  `)


  return (
    <Layout>
      <div className="blog-post-wrapper">
        <h1 className="blog-title">Blog</h1>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <div className="blog-post">
                <h3 className="blog-post-title">
                  <Link  to={`${edge.node.fields.slug}`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </h3>
                <div className="post-summary">
                  {edge.node.frontmatter.description}
                </div>
                <div className="post-meta">
                  <span>{edge.node.frontmatter.date}</span>
                  &nbsp; | &nbsp;
                  <span>{edge.node.fields.readingTime.text}</span>
                </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog
