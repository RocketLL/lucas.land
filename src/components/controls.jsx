import React from "react"
import { LocaleContext } from "./wrapper"

import LangToggler from "./langtoggle"
import ThemeToggler from "./themetoggler"

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
  else return null
}

export default Controls
