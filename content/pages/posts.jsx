import React from "react"
import { Helmet } from "react-helmet"

import Hello from "../../src/components/hello"
import TransitionLink from "gatsby-plugin-transition-link"
import Bio from "../../src/components/bio"
import Posts from "../../src/components/posts"
import { PostsSpring } from "../../src/components/bio"

import styles from "../../src/scss/layout.module.scss"

const Index = () => (
  <div className={`${styles.layout} ${styles.large}`}>
    <Hello text={"Read my posts."} />
    <TransitionLink
      to={"/"}
      exit={{
        length: 1
      }}
      entry={{
        delay: 0.6
      }}
      className={styles.link}
    >
      home
      </TransitionLink>
    <Bio to="/" />
  </div>
)

export default Index
