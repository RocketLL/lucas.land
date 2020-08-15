import React from "react"

import Bio from "../../src/components/bio"

import styles from "../../src/scss/layout.module.scss"

const Index = () => (
  <div className={`${styles.layout} ${styles.large}`}>
    <Bio />
  </div>
)

export default Index
