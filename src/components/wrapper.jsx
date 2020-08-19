import React, { useState, useEffect, createContext } from "react"

import SEO from "./seo"
import Logo from "./logo"
import styles from "../scss/wrapper.module.scss"
import "../scss/styles.global.scss"

const LocaleContext = createContext()
const ThemeContext = createContext()

const Header = () => (
  <div className={styles.header}>
    <Logo />
  </div>
)

const Wrapper = ({ children, pageContext: { locale, type }, location }) => {
  const [dark, rawSetDark] = useState(false)

  const setDark = val => {
    rawSetDark(val)
    document.body.setAttribute("theme", val ? "dark" : "light")
    localStorage.setItem("dark", val ? "true" : "false")
  }

  useEffect(() => {
    rawSetDark(document.body.getAttribute("theme") === "dark")
  }, [])

  return (
    <>
      <SEO location={location} />
      <LocaleContext.Provider value={{ locale, location, type }}>
        <ThemeContext.Provider value={{ dark, setDark }}>
          <div className={`${styles.wrapper}`}>
            <Header />
            {children}
          </div>
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    </>
  )
}

export { Wrapper, LocaleContext, ThemeContext }
