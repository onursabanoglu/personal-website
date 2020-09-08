import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'


const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
              description
            }
            fields {
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
      <h1>Blog</h1>
      <div>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <div>
              <h3>{edge.node.frontmatter.title}</h3>
              <div>
                <span>{edge.node.fields.readingTime.text}</span>
                <span>{edge.node.frontmatter.date}</span>
              </div>
            </div>

          )
        })}
      </div>
    </Layout>
  )
}

export default Blog
