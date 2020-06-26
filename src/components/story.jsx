import React from "react"

import Emoji from "../../src/components/emoji"
import { LocaleContext } from "./wrapper"

import styles from "../../src/scss/story.module.scss"
import { link } from "../../src/scss/text.module.scss"

const Story = () => {
  const { locale } = React.useContext(LocaleContext)

  if (locale === "en")
    return (
      <>
        <span className={`${styles.emph} ${styles.story}`}>Hi
          <Emoji className={styles.emoji} type="wave" />, I'm Lucas.</span>
        <p className={styles.story}>
          I'm a student from South Korea attending <a href="https://hana.hs.kr" className={link}>Hana Academy Seoul</a>.
          I enjoy physics and programming.
        </p>
        <p className={styles.story}>
          I wrangle code and equations every day.
          I love using modern tools to solve my problems, both in physics and programming.
          I am proficient at Python, Go, JS/TS
        </p>
      </>
    )
  else
    return (
      <>
        <p className={`${styles.story} kr`}>
          <span className={styles.emph}>안녕하세요
          <Emoji className={styles.emoji} type="wave" />, 이윤규입니다.</span>
          하나고등학교에 재학중인 학생입니다.
          저는 물리학과 프로그래밍에 관심이 많습니다.
        </p>
        <p className={`${styles.story} kr`}>
          JavaScript, TypeScript
        </p>
      </>
    )
}

export default Story
