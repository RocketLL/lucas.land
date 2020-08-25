import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../../../src/components/layout"
import Link from "../../../src/components/link"
import LeftTemplate from "../../../src/components/left"
import styles from "./_right.module.scss"
import Posts from "../../../src/components/posts"

const Left = () => (
  <LeftTemplate
    title="Posts"
    subtitle={
      <Link to="mailto:me@lucas.land" size="1em">
        me@lucas.land
      </Link>
    }
  />
)

const Right = () => {
  return (
    <div className={styles.right}>
      <p className={styles.desc}>
        <Posts />
      </p>
    </div>
  )
}

const Index = () => (
  <>
    <Helmet
      bodyAttributes={{
        class: "index kr",
      }}
    />
    <Layout left={<Left />} right={<Right />} />
  </>
)

export default Index
