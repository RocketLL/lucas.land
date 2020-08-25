import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../../../src/components/layout"
import styles from "./_right.module.scss"
import LeftTemplate from "../../../src/components/left"

const Left = () => <LeftTemplate title="Colophone" subtitle="사이트 정보" />

const Right = () => {
  return (
    <div className={styles.right}>
      <p className={styles.desc}>GatsbyJS를 이용함.</p>
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
