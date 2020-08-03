import React from "react"

import Bio from "../../src/components/bio"
import Name from "../../src/components/name"
import Vis from "../../src/components/vis"

import styles from "../../src/scss/layout.module.scss"

const Index = () => (
  <div className={`${styles.layout} ${styles.large}`}>
    <Name />
    <Bio />
    <Vis />
  </div>
)

export default Index
