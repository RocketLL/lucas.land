import React from "react"

import { LocaleContext } from "./wrapper"

import styles from "../../src/scss/projects.module.scss"
import { header } from "../../src/scss/layout.module.scss"
import { link, important } from "../../src/scss/text.module.scss"

const Project = ({ title, desc, url }) => (
  <div className={styles.project}>
    <div className={styles.linkWrapper}>
      <a href={url} className={`${link} ${important}`}>
        {title}
      </a>
    </div>
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
          title="linalg"
          desc="Pure Python3 linear algebra"
          url="https://github.com/rocketll/linalg"
        />
      </>
    )
  else
    return (
      <>
        <h2 className={header}>Projects</h2>
        <Project
          title="hmm."
          desc="하나고등학교 학생 매거진"
          url="https://hashmm.com"
        />
        <Project
          title="linalg"
          desc="순수 Python3 선형대수학 패키지"
          url="https://github.com/rocketll/linalg"
        />
      </>
    )
}

export default Projects
