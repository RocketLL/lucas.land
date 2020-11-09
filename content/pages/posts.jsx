import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Link from "../../src/components/links"

const PostLink = styled(Link)`
  color: inherit;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 1rem;
  &:hover {
    background: ${({ theme: { colors } }) => colors.sub};
  }
  border-radius: 0.5rem;
  width: 100%;

  @media only screen and (max-width: ${({ theme }) => theme.breakpointLarge}) {
    box-sizing: content-box;
    margin: 0 -1rem;
}
`

const PostTitle = styled.h2`
  font-size: 1.3rem;
  color: inherit;
  margin: 0;
`

const PostSubtitle = styled.span`
  color: ${({ theme: { colors } }) => colors.sub};
`

const Post = ({ post }) => (
  <PostLink
    to={`/post/${post.frontmatter.slug}`}
  >
    <PostTitle>{post.frontmatter.title}</PostTitle>
    <PostSubtitle>{post.frontmatter.subtitle}</PostSubtitle>
    <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
  </PostLink>
)

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`

const Left = () => (
  <>
    <PageTitle>Posts</PageTitle>
  </>
)

const Posts = ({ pageContext: { locale } }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              locale
            }
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              slug
              title
              tags
              subtitle
            }
          }
        }
      }
    }
  `)

  const posts = data.allMdx.edges
    .filter(
      post => !!post.node.frontmatter.date && post.node.fields.locale === "en"
    )
    .map(post => (
      <Post
        key={post.node.id}
        post={post.node}
        locale={post.node.fields.locale}
      />
    ))

  return <div>
    {posts}
  </div>
}

export default Posts
