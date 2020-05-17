import React from "react"
import { LocaleContext } from "./wrapper"
import Emoji from "./emoji"

import styles from "../scss/controls.module.scss"

import { Link } from "gatsby"

const LangToggler = () => {
  const { locale, location } = React.useContext(LocaleContext)
  const to = locale === "en" ? `/kr${location.pathname}` : location.pathname.split("/kr").pop()
  return (
    <Link to={to} className={styles.lang} title="toggle language">
      {locale === "en"
        ? <Emoji className={styles.emoji} type="kr" />
        : <Emoji className={styles.emoji} type="us" />}
    </Link>
  )
}

export default LangToggler
