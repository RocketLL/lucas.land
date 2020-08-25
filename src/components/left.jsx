import React from "react"
import styles from "../scss/left.module.scss"

const Left = ({ title, subtitle, className }) => {
  return (
    <div className={`${className} ${styles.left}`}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  )
}
export default Left
