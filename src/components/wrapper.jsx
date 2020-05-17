import React, { useState, useEffect } from "react"

import Controls from "./controls"

import styles from "../scss/wrapper.module.scss"
import "../scss/styles.global.scss"

const LocaleContext = React.createContext()
const ThemeContext = React.createContext()


const Wrapper = ({ children, pageContext: { locale, type }, location }) => {
  const [dark, rawSetDark] = useState(false)

  const setDark = (val) => {
    rawSetDark(val)
    document.body.setAttribute("theme", val ? "dark" : "light")
    localStorage.setItem("dark", val ? "true" : "false")
  }

  useEffect(
    () => {
      rawSetDark(document.body.getAttribute("theme") === "dark")
    }, []
  )

  return (
    <LocaleContext.Provider value={{ locale, location, type }}>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <Controls />
        <div className={`${styles.wrapper}`}>
          {children}
        </div>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  )
}

export { Wrapper, LocaleContext, ThemeContext }
