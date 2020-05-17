import React from "react"
import { LocaleContext, ThemeContext } from "./wrapper"

import LocalizedLink from "./localizedlink"
import LangToggler from "./langtoggle"
import ThemeToggler from "./themetoggler"

import styles from "../scss/controls.module.scss"

const Controls = () => {
  const { type } = React.useContext(LocaleContext)
  if (type === "page") return (
    <div className={styles.controls}>
      <LangToggler />
      <ThemeToggler />
    </div>
  )
  else return null
}

export default Controls