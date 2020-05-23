import React from "react"

import { LocaleContext } from "./wrapper"

import styles from "../../src/scss/projects.module.scss"
import { header } from "../../src/scss/layout.module.scss"
import { link } from "../../src/scss/text.module.scss"

const Project = ({ title, desc, url }) => (
  <div className={styles.project}>
    <a href={url} className={styles.link}>
      <span className={`${styles.title} ${link}`}>{title}</span>
    </a>
    <span className={styles.desc}>{desc}</span>
  </div>
)

const Projects = () => {
  const { locale } = React.useContext(LocaleContext)

  if (locale === "en")
    return (
      <>
        <h2 className={header}>Projects</h2>
        <Project
          title="hmm."
          desc="Hana Academy Seoul student magazine"
          url="https://hashmm.com"
        />
        <Project
          title="ramen"
          desc="🍜 Rust Algorithms for Mathematically Efficient Numerics"
          url="https://github.com/rocketll/ramen"
        />
      </>
    )
  else
    return (
      <>
        <h2 className={styles.header}>projects</h2>
      </>
    )
}

export default Projects
