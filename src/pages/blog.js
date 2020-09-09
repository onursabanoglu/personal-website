import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'


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
      <div>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <Link to={`${edge.node.fields.slug}`}>
                <h3>{edge.node.frontmatter.title}</h3>
                  <span>{edge.node.fields.readingTime.text}</span>
                  <span>{edge.node.frontmatter.date}</span>
              </Link>
            </li>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog
