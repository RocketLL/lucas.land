import React from "react"

import Bio from "../../src/components/bio"
import Story from "../../src/components/story"

import styles from "../../src/scss/layout.module.scss"

const Index = () => (
  <div className={`${styles.layout} ${styles.large}`}>
    <div className={`${styles.container} ${styles.left}`}>
      <Bio />
    </div>
    <div className={`${styles.container} ${styles.right}`}>
      <Story />
    </div>
  </div>
)

export default Index
