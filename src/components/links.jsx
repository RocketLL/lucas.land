import React from "react"

import styles from "../../src/scss/links.module.scss"

const Bio = () => {
  return (
    <div className={styles.links}>
      <div className={styles.row}>
        <div className={`${styles.marquee} ${styles.fast}`}>
          <a className={styles.link} href="">PHYSICS</a>
          <a className={styles.link} href="">CODE</a>
          <a className={styles.link} href="">PHYSICS</a>
          <a className={styles.link} href="">CODE</a>
        </div>
        <div className={`${styles.marquee} ${styles.delayed} ${styles.fast}`}>
          <a className={styles.link} href="">PHYSICS</a>
          <a className={styles.link} href="">CODE</a>
          <a className={styles.link} href="">PHYSICS</a>
          <a className={styles.link} href="">CODE</a>
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.marquee} ${styles.slow}`}>
          <a className={styles.link} href="">POSTS</a>
          <a className={styles.link} href="">ABOUT</a>
          <a className={styles.link} href="">POSTS</a>
          <a className={styles.link} href="">ABOUT</a>
        </div>
        <div className={`${styles.marquee} ${styles.delayed} ${styles.slow}`}>
          <a className={styles.link} href="">POSTS</a>
          <a className={styles.link} href="">ABOUT</a>
          <a className={styles.link} href="">POSTS</a>
          <a className={styles.link} href="">ABOUT</a>
        </div>
      </div>
    </div>
  )
}

export default Bio
