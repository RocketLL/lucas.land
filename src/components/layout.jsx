import React from "react"

import styles from "../scss/layout.module.scss"

const Layout = ({ left, right }) => (
  <div className={styles.layout}>
    <div className={styles.left}>
      {left}
    </div>
    <div className={styles.right}>
      {right}
    </div>
  </div>
)

export default Layout
