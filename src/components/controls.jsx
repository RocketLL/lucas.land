import React from "react"
import { LocaleContext } from "./wrapper"

import LangToggler from "./langToggle"
import ThemeToggler from "./themeToggle"

import styles from "../scss/controls.module.scss"

const Controls = () => {
  const { type } = React.useContext(LocaleContext)
  if (type === "page")
    return (
      <div className={styles.controls}>
        <LangToggler />
        <ThemeToggler />
      </div>
    )
  else return (
    <div className={styles.controls}>
      <ThemeToggler />
    </div>
  )
}

export default Controls
