import React, { useContext } from "react"
import styles from "../scss/left.module.scss"
import { LocaleContext } from "./wrapper"

const Left = ({ title, subtitle }) => {
  const { locale } = useContext(LocaleContext)

  return (
    <div className={styles.left}>
      <h1 className={styles.title}>
        {title}
      </h1>
      <span className={styles.subtitle}>
        {subtitle}
      </span>
    </div>
  )
}
export default Left
