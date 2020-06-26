import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import PostHeader from "../components/postHeader"
import styles from "../scss/post.module.scss"
import { typography } from "../scss/text.module.scss"

import "../scss/syntax.global.scss"
import "katex/dist/katex.min.css"

const shortcodes = { Link }

const PostTemplate = ({ data: { mdx } }) => (
  <div className={`${styles.post} ${mdx.fields.locale}`}>
    <PostHeader />
    <div className={typography}>
      <h1 className={styles.title}>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  </div>
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