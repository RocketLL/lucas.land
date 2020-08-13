import React from "react"
import { Helmet } from "react-helmet"

import Bio from "../../src/components/bio"
import Hello from "../../src/components/hello"
import Cards from "../../src/components/cards"

import styles from "../../src/scss/layout.module.scss"

const Index = () => (
  <div className={`${styles.layout} ${styles.large}`}>
    <Helmet
      bodyAttributes={{
        class: "index"
      }}
    />
    <Hello text={"Take a card."} />
    <Cards />
    <Bio to={"/posts"} />
  </div>
)

export default Index
