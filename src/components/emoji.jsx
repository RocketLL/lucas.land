import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "../scss/emoji.module.scss"

const Emoji = ({ type, className }) => {
  const data = useStaticQuery(graphql`
    fragment emojiImage on File {
      childImageSharp {
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    query {
      kr: file(relativePath: { eq: "emoji/kr.png" }) {
        ...emojiImage
      }
      us: file(relativePath: { eq: "emoji/us.png" }) {
        ...emojiImage
      }
      coder: file(relativePath: { eq: "emoji/coder.png" }) {
        ...emojiImage
      }
      email: file(relativePath: { eq: "emoji/email.png" }) {
        ...emojiImage
      }
      wave: file(relativePath: { eq: "emoji/wave.png" }) {
        ...emojiImage
      }
      sun: file(relativePath: { eq: "emoji/sun.png" }) {
        ...emojiImage
      }
      moon: file(relativePath: { eq: "emoji/moon.png" }) {
        ...emojiImage
      }
    }
  `)
  return (
    <Img
      className={`${styles.emoji} ${className}`}
      style={{ width: "none", height: "none" }}
      fixed={data[type].childImageSharp.fixed}
      Tag="span"
    />
  )
}

export default Emoji
