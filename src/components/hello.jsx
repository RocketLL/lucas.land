import React, { useContext } from "react"

import styles from "../../src/scss/hello.module.scss"

import { LocaleContext } from "./wrapper"
import { PostsSpring } from "./bio"

const Hello = ({ text }) => {
  const { locale } = useContext(LocaleContext)

  return (
    <div>
      <h1 className={styles.name}>
        Hi, I'm Lucas.
        <PostsSpring>{text}</PostsSpring>
      </h1>
    </div>
  )
}

export default Hello
