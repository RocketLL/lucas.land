import React, { useContext } from "react"
import styles from "./_right.module.scss"
import { LocaleContext } from "../../src/components/wrapper"
import Link from "../../src/components/link"

const Links = () => {
  return (
    <div className={styles.links}>
      <Link to={"/posts"}>posts</Link>
      <Link to={"https://github.com/rocketll"} i={1}>github</Link>
      <Link to={"https://behance.net/rocketll"} i={2}>behance</Link>
    </div >
  )
}

const Right = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <div className={styles.right}>
      <p className={styles.desc}>
        Seoul (KR) based developer and computer science student with a keen interest in design.
        Specializing in full-stack web development and computational science.
        <span className={styles.emph}> Available for projects.</span>
      </p>
      <Links />
    </div>
  )
}

export default Right