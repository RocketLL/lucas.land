import React, { useContext } from "react"
import { ThemeContext } from "./wrapper"
import Emoji from "./emoji"

import styles from "../scss/controls.module.scss"

const ThemeToggler = () => {
  const { dark, setDark } = useContext(ThemeContext)

  return (
    <button
      className={styles.theme}
      onClick={() => setDark(!dark)}
      title="toggle dark mode"
    >
      {dark ? (
        <Emoji className={styles.emoji} type="sun" />
      ) : (
        <Emoji className={styles.emoji} type="moon" />
      )}
    </button>
  )
}

export default ThemeToggler
