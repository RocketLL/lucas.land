import React from "react"

import { LocaleContext } from "./wrapper"

import styles from "../../src/scss/projects.module.scss"
import { header } from "../../src/scss/layout.module.scss"

const Project = ({ title, desc }) => (
  <div className={styles.project}>
    <h3 className={styles.title}>{title}</h3>
    <span className={styles.desc}>{desc}</span>
  </div>
)

const Projects = () => {
  const { locale } = React.useContext(LocaleContext)

  if (locale === "en")
    return (
      <>
        <h2 className={header}>projects</h2>
        <Project
          title="linalg" desc="pure python linear algebra"
        />
        <Project
          title="ramen" desc="🍜 Rust Algorithms for Mathematically Efficient Numerics "
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
