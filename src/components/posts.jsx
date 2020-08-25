import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { LocaleContext } from "./wrapper"

import styles from "../../src/scss/posts.module.scss"
import { link, important } from "../../src/scss/text.module.scss"

import Link from "./link"

const PostLink = ({ post, locale }) => (
  <div className={styles.post}>
    <span className={styles.meta}>
      {post.frontmatter.date}
      <span className={styles.sep}></span>
      {post.frontmatter.tags}
    </span>
    <Link
      className={`${styles.title} ${styles.link}`}
      to={
        locale === "en"
          ? "/post/" + post.frontmatter.slug
          : `kr/${post.frontmatter.slug}`
      }
    >
      {post.frontmatter.title}
    </Link>
  </div>
)

const Posts = () => {
  const { locale } = useContext(LocaleContext)

  const data = useStaticQuery(
    graphql`
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
                date(formatString: "YYYY/MM/DD")
                slug
                title
                tags
              }
            }
          }
        }
      }
    `
  )
  const posts = {}

  posts.kr = data.allMdx.edges
    .filter(
      post => !!post.node.frontmatter.date && post.node.fields.locale === "kr"
    )
    .map(post => (
      <PostLink
        key={post.node.id}
        post={post.node}
        locale={post.node.fields.locale}
      />
    ))

  posts.en = data.allMdx.edges
    .filter(
      post => !!post.node.frontmatter.date && post.node.fields.locale === "en"
    )
    .map(post => (
      <PostLink
        key={post.node.id}
        post={post.node}
        locale={post.node.fields.locale}
      />
    ))

  return (
    <>
      <div>{posts[locale]}</div>
    </>
  )
}

export default Posts
