import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Layout, { AniLink } from "../../src/components/layout"

const Name = styled.h1`
  font-size: 1em;
  font-weight: 700;
  margin: 0;
`

const Mail = styled.a`
  text-decoration: none;
  color: inherit;
`

const StyledLink = styled(AniLink)`
  text-decoration: none;
  color: inherit;
`

const Left = () => (
  <>
    <Name>Lucas Lee</Name>
    <Mail href="mailto:me@lucas.land">me@lucas.land</Mail>
  </>
)

const Right = () => (
  <>
    Attending Hana Academy Seoul
    <StyledLink to="/posts">posts</StyledLink>
  </>
)

const Index = () => (
  <>
    <Helmet
      bodyAttributes={{
        class: "index home",
      }}
    />
    <Layout
      left={<Left />}
      right={<Right />}
    />
  </>
)

export default Index
