import React, { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
// import PostLink from "../components/postLink"
import { LocaleContext } from "./wrapper"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

const PostList = () => {
  const { locale } = useContext(LocaleContext)

  const data = useStaticQuery(
    graphql`
      query {
        allMdx(sort: {order: DESC, fields: frontmatter___date}) {
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
              }
            }
          }
        }
      }
    `
  )

  const postsKr = data.allMdx.edges
    .filter(post => !!post.node.frontmatter.date && post.node.fields.locale)
    .map(post => <PostLink key={post.node.id} post={post.node} />)

  return <div>{postsKr}</div>
}

export default PostList
