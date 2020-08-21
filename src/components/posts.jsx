import React, { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { LocaleContext } from "./wrapper"

import styles from "../../src/scss/posts.module.scss"
import { header } from "../../src/scss/layout.module.scss"
import { link, important } from "../../src/scss/text.module.scss"

const PostLink = ({ post, locale }) => (
  <div className={styles.post}>
    <span className={styles.date}>{post.frontmatter.date}</span>
    <Link className={`${styles.title} ${link} ${important}`} to={locale === "en" ? "/post/" + post.frontmatter.slug : `kr/${post.frontmatter.slug}`} >
      {post.frontmatter.title}
    </Link>
  </div>
)

const Posts = () => {
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
                date(formatString: "YYYY/MM/DD")
                slug
                title
              }
            }
          }
        } 
      }
    `
  )
  const posts = {}

  posts.kr = data.allMdx.edges
    .filter(post => !!post.node.frontmatter.date && post.node.fields.locale === "kr")
    .map(post => <PostLink key={post.node.id} post={post.node} locale={post.node.fields.locale} />)

  posts.en = data.allMdx.edges
    .filter(post => !!post.node.frontmatter.date && post.node.fields.locale === "en")
    .map(post => <PostLink key={post.node.id} post={post.node} locale={post.node.fields.locale} />)

  return (
    <>
      <div>{posts[locale]}</div>
    </>
  )
}

export default Posts
