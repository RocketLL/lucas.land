import React from "react"

import Emoji from "../../src/components/emoji"
import { LocaleContext } from "./wrapper"

import styles from "../../src/scss/story.module.scss"

const Story = () => {
  const { locale } = React.useContext(LocaleContext)

  if (locale === "en")
    return (
      <>
        <p className={styles.story}>
          <span className={styles.emph}>Hi
          <Emoji className={styles.emoji} type="wave" />, I'm Lucas.</span>
           I'm a student from South Korea attending <a href="/" className={styles.link}>Hana Academy Seoul</a>. I enjoy physics
          and programming.
        </p>
        <p className={styles.story}>
          My areas of interest include Scientific Computation and Web
          Development. I am proficient at Python, Go, JavaScript, MATLAB, and
          more. I am comfortable with modern web technologies including React,
          TypeScript, and GatsbyJS(powering this site!).
        </p>
      </>
    )
  else
    return (
      <p className={`${styles.story} kr`}>
        안녕하세요
        <Emoji className={styles.emoji} type="wave" />, 이윤규입니다. 저는
        하나고등학교에 재학중인 학생입니다. 저는 물리학과 프로그래밍에 관심이
        많습니다.
      </p>
    )
}

export default Story
