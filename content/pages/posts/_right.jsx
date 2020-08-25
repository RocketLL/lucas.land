import React, { useContext } from "react"
import styles from "./_right.module.scss"
import { LocaleContext } from "../../../src/components/wrapper"
import Link from "../../../src/components/link"
import { LayoutLink } from "../../../src/components/layout"
import Posts from "../../../src/components/posts"

const Links = () => {
  return (
    <div className={styles.links}>
      <LayoutLink to={"/"}>home</LayoutLink>
      <Link to={"https://github.com/rocketll"}>github</Link>
      <Link to={"https://behance.net/rocketll"}>behance</Link>
    </div>
  )
}

const Right = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <div className={styles.right}>
      <p className={styles.desc}>
        <Posts />
      </p>
    </div>
  )
}

export default Right
