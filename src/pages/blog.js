import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"

import BlogStyles from './blog.module.css'



const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
      <SEO title="Blog" />
      <div className={BlogStyles.blogPostWrapper}>
        <h1 className={BlogStyles.blogTitle}>Blog</h1>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <div className={BlogStyles.blogPost}>
                <h3 className={BlogStyles.blogPostTitle}>
                  <Link  to={`${edge.node.fields.slug}`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </h3>
                <div className={BlogStyles.postSummary} >
                  {edge.node.frontmatter.description}
                </div>
                <div className={BlogStyles.postMeta}>
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
