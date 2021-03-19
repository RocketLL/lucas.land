import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Link from "../../src/components/links"
import Gallery from "../../src/components/gallery"

const Layout = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr 3fr 10fr 3fr 1fr;
  grid-template-columns: 0rem 2fr 10fr 2fr 0rem;
  -ms-grid-rows: 1fr 1fr 8fr 1fr 1fr;
  grid-template-rows: 0rem 1fr 8fr 1fr 0rem;
  grid-template-areas:
    ". . . . ."
    ". name . links ."
    ". . gallery . ."
    ". info . contact ."
    ". . . . .";
  height: 100vh;
  padding: 5rem;

  @media only screen and (max-width: 1000px) {
    padding: 2em 1em 1em 1em;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
    -ms-grid-rows: 1.2em 1.2em 4rem auto auto;
    grid-template-rows: 2rem 5rem 4rem 100vw 5rem;
    grid-template-areas:
      "name"
      "contact"
      "links"
      "gallery"
      "info";
  }
`

const Name = styled.h1`
  font-size: 1.2em;
  font-weight: 700;
  margin: 0;
  grid-area: name;
  justify-self: start;
  align-self: start;

  -ms-grid-row: 2;
  -ms-grid-column: 2;
  -ms-grid-column-align: start;
  -ms-grid-row-align: start;
`

const Info = styled.p`
  font-size: 0.9em;
  font-family: "JetBrains Mono", monospace;
  color: #aaa;
  grid-area: info;
  justify-self: start;
  align-self: end;
  max-width: 19vw;
  margin: 0;

  -ms-grid-row: 3;
  -ms-grid-row-span: 2;
  -ms-grid-column: 2;
  -ms-grid-column-align: start;
  -ms-grid-row-align: end;

  @media only screen and (max-width: 1000px) {
    align-self: start;
    justify-self: start;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em; 
  grid-area: links;
  align-items: flex-end;
  justify-self: end;
  align-self: start;

  -ms-grid-row: 2;
  -ms-grid-column: 4;
  -ms-grid-column-align: end;
  -ms-grid-row-align: start;

  @media only screen and (max-width: 1000px) {
    align-items: flex-start;
    justify-self: start;
    align-self: start;

    -ms-grid-column-align: start;
    -ms-grid-row-align: start;
  }
`

const StyledLink = styled(Link)`
  margin: 0 1em 0 0;
`

const Mail = styled.a`
  text-decoration: none;
  font-size: 1em;
  color: inherit;
  grid-area: contact;
  justify-self: end;
  align-self: end;

  -ms-grid-row: 4;
  -ms-grid-column: 4;

  -ms-grid-column-align: end;
  -ms-grid-row-align: end;

  @media only screen and (max-width: 1000px) {
    align-self: start;
    justify-self: start;
  }
`

const StyledGallery = styled(Gallery)`
  grid-area: gallery;
  justify-self: center;
  align-self: center;

  -ms-grid-row: 3;
  -ms-grid-column: 3;

  -ms-grid-column-align: center;
  -ms-grid-row-align: center;

  @media only screen and (max-width: 1000px) {
    align-self: start;
    justify-self: center;
  }
`

const Index = () => (
  <>
    <Helmet
      bodyAttributes={{
        class: "index home",
      }}
    />
    <Layout>
      <Name>Lucas Lee</Name>
      <Links>
        <StyledLink to="/posts">Posts</StyledLink>
        <StyledLink to="https://github.com/rocketll">Github</StyledLink>
      </Links>
      <StyledGallery />
      <Mail href="mailto:me@lucas.land">me@lucas.land</Mail>
      <Info>
        {/* KdV equation (u<sub>t</sub> + uu<sub>x</sub> + au<sub>xxx</sub> = 0) solution.
        x-axis is spatial, y-axis is temporal.
        solved through spectral method with rk4 time-stepping. */}
        KdV equation solution
      </Info>
    </Layout>
  </>
)

export default Index
