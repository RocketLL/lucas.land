import React from "react"
import LocalizedLink from "./localizedLink"
import { RiArrowGoBackLine } from "react-icons/ri"
import styles from "../scss/post-header.module.scss"

const PostHeader = () => (
  <div className={styles.header}>
    <LocalizedLink to="/" className={styles.home}>
      <RiArrowGoBackLine className={styles.icon} size="1.2em" />
      <span className={styles.title}>Home</span>
    </LocalizedLink>
  </div>
)

export default PostHeader

