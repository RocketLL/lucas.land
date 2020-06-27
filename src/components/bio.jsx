import React, { useContext } from "react"

import styles from "../../src/scss/bio.module.scss"

import { LocaleContext } from "./wrapper"

const Bio = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <div className={styles.bio}>
      <h1 className={styles.name}>
        {locale === "en" ? "Lucas\nLee." : "이윤규."}
      </h1>
      <div className={styles.about}>
        <div className={styles.col}>
          <span>~/rocketll</span>
          <span>HAS</span>
        </div>
        <div className={styles.col}>
          <a href="mailto:me@lucas.land" className={styles.link}>me@lucas.land</a>
          <a href="https://github.com/rocketll" className={styles.link}>github</a>
        </div>
      </div>
    </div>
  )
}

export default Bio
