import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../../../src/components/layout"
import Left from "./_left"
import Right from "./_right"


const Index = () => (
  <>
    <Helmet
      bodyAttributes={{
        class: "index"
      }}
    />
    <Layout
      left={<Left />}
      right={<Right />}
    />
  </>
)

export default Index
