import React from "react"

import Bio from "../../src/components/bio"
import Story from "../../src/components/story"
import Projects from "../../src/components/projects"
import Posts from "../../src/components/posts"
import Vis from "../../src/components/vis"

import styles from "../../src/scss/layout.module.scss"

const Index = () => (
  <div className={`${styles.layout} ${styles.large}`}>
    <Bio />
    <Vis />
  </div>
)

export default Index
