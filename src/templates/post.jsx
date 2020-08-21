import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import styles from "../scss/post.module.scss"
import Layout from "../components/layout"
import Left from "../components/left"


import "../scss/syntax.global.scss"
import "katex/dist/katex.min.css"

const shortcodes = { Link }

const PostTemplate = ({ data: { mdx } }) => (
  <Layout
    left={<Left title={mdx.frontmatter.title} subtitle={mdx.frontmatter.title} />}
    right={
      <div className={`${styles.post} ${mdx.fields.locale}`}>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>}
  />
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      fields {
        locale
      }
    }
  }
`

export default PostTemplate