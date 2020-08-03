import React, { useState, useContext } from "react"

import styles from "../../src/scss/name.module.scss"

import { LocaleContext } from "./wrapper"

const Name = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <div>
      <h1 className={styles.name}>
        {locale === "en" ? "LUCAS\nLEE" : "이윤규."}
      </h1>
    </div>
  )
}

export default Name
