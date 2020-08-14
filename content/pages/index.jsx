import React from "react"
import { Helmet } from "react-helmet"

import Bio from "../../src/components/bio"
import Layout from "../../src/components/layout"
import Right from "../../src/components/right"

const Index = () => (
  <>
    <Helmet
      bodyAttributes={{
        class: "index"
      }}
    />
    <Layout
      left={<Bio />}
      right={<Right />}
    />
  </>
)

export default Index
