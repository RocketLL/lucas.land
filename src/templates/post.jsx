import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { rem } from "../components/themes"
import Layout from "../components/layout"

import "katex/dist/katex.min.css"

const shortcodes = { Link }

const StyledArticle = styled.article`
  line-height: 1.5;
`

const StyledTitle = styled.h1`
  font-size: 2em;
  font-weight: 700;
`

const PostContent = ({ mdx }) => (
  <StyledArticle>
    <MDXProvider components={shortcodes}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </MDXProvider>
  </StyledArticle>
)

const PostTemplate = ({ data: { mdx } }) => (
  <Layout
    left={<StyledTitle>{mdx.frontmatter.title}</StyledTitle>}
    right={<PostContent mdx={mdx} />}
  />
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
      }
      fields {
        locale
      }
    }
  }
`

export default PostTemplate
