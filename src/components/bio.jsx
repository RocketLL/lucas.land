import React, { useState } from "react"

import styles from "../../src/scss/bio.module.scss"

import { BsArrowRightShort } from "react-icons/bs"
import Emoji from "./emoji"
import { LocaleContext } from "./wrapper"

const Bio = () => {
  const [shownLink, setShownLink] = useState("");

  const { locale } = React.useContext(LocaleContext)
  return (
    <div className={styles.bio}>
      <h1 className={styles.name}>{locale === "en" ? "Lucas Lee" : "이윤규"}</h1>
      <h2 className={styles.job}>{locale === "en" ? "~/rocketll" : "~/rocketll"}</h2>
      <div className={styles.links}>
        <a
          className={styles.link}
          href="https://github.com/rocketll"
          onMouseEnter={() => setShownLink("github")}
          onMouseLeave={() => setShownLink("")}>
          <Emoji className={styles.emoji} type="coder" />
          {/* <AiFillGithub size="1.3em" /> */}
          <span className={styles.title}>github</span>
          <BsArrowRightShort
            size="1.3em"
            style={{
              transition: "0.3s",
              marginLeft: shownLink === "github" ? 0 : -20,
              opacity: shownLink === "github" ? 1 : 0
            }}
          />
        </a>
        <a
          className={styles.link}
          href="mailto:luc4sl33@gmail.com"
          onMouseEnter={() => setShownLink("mail")}
          onMouseLeave={() => setShownLink("")}
        >
          <Emoji className={styles.emoji} type="email" />
          {/* <AiFillMail size="1.3em" /> */}
          <span className={styles.title}>mail</span>
          <BsArrowRightShort
            size="1.3em"
            style={{
              transition: "margin-left 0.3s, opacity 0.3s",
              marginLeft: shownLink === "mail" ? 0 : -20,
              opacity: shownLink === "mail" ? 1 : 0
            }}
          />        </a>
      </div>
      {/* <span className={styles.shown}>{shownLink}</span> */}
    </div>
  )
}

export default Bio