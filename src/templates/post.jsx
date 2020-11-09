import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/layout"

import "katex/dist/katex.min.css"

const shortcodes = { Link }

const StyledArticle = styled.article`
  line-height: 1.5;
  width: 100%;

  & > :first-child {
    margin-top: 0;
  }
`

const StyledTitle = styled.h1`
  font-size: 2.4em;
  font-weight: 700;
  margin: 0;
`

const StyledSubtitle = styled.span`
  font-size: 1rem;
`

const PostMeta = ({ mdx }) => (
  <>
    <StyledTitle>{mdx.frontmatter.title}</StyledTitle>
    <StyledSubtitle>{mdx.frontmatter.subtitle}</StyledSubtitle>
  </>
)

const PostContent = ({ mdx }) => (
  <StyledArticle>
    <MDXProvider components={shortcodes}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </MDXProvider>
  </StyledArticle>
)

const PostTemplate = ({ data: { mdx } }) => (
  <Layout
    left={<PostMeta mdx={mdx} />}
    right={<PostContent mdx={mdx} />}
  />
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
        mdx(id: {eq: $id }) {
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
