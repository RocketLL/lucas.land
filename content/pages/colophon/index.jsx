import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../../../src/components/layout"
import styles from "./_right.module.scss"
import LeftTemplate from "../../../src/components/left"

const Left = () => (
  <LeftTemplate title="Colophon" subtitle="Site information" />
)

const Right = () => {
  return (
    <div className={styles.right}>
      <p className={styles.desc}>Built with GatsbyJS</p>
    </div>
  )
}

const Index = () => (
  <>
    <Helmet
      bodyAttributes={{
        class: "index",
      }}
    />
    <Layout left={<Left />} right={<Right />} />
  </>
)

export default Index
