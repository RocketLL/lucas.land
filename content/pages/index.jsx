import React from "react"

import Bio from "../../src/components/bio"
import Story from "../../src/components/story"
import Projects from "../../src/components/projects"
import PostList from "../../src/components/postList"

import styles from "../../src/scss/layout.module.scss"

const Index = () => (
  <div className={`${styles.layout} ${styles.large}`}>
    <div className={`${styles.container} ${styles.left}`}>
      <Bio />
    </div>
    <div className={`${styles.container} ${styles.right}`}>
      <Story />
      <Projects />
      <PostList />
    </div>
  </div>
)

export default Index
