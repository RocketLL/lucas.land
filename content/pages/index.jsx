import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Link from "../../src/components/links"
import Gallery from "../../src/components/gallery"

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 8fr 2fr 1fr;
  grid-template-rows: 1fr 5fr 1fr;
  grid-template-areas:
    ". name . links ."
    ". . gallery . ."
    ". . gallery contact .";
  margin: 1rem 1rem 0 1;
  height: 100vh;
  column-gap: 3rem;

  @media only screen and (max-width: 1000px) {
    margin: 2em 1em 1em 1em;
    grid-template-columns: 1fr;
    grid-template-rows: 1.2em 1.2em 5fr auto;
    row-gap: 2rem;
    grid-template-areas:
      "name"
      "contact"
      "links"
      "gallery";
  }
`

const Name = styled.h1`
  font-size: 1.2em;
  font-weight: 700;
  margin: 0;
  grid-area: name;
  justify-self: start;
  align-self: center;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1em; 
  grid-area: links;
  align-items: flex-end;
  justify-self: end;
  align-self: center;

  @media only screen and (max-width: 1000px) {
    align-items: flex-start;
    align-self: start;
    justify-self: start;
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
  align-self: center;

  @media only screen and (max-width: 1000px) {
    align-self: center;
    justify-self: start;
  }
`

const StyledGallery = styled(Gallery)`
  grid-area: gallery;
  justify-self: center;
  align-self: end;
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
        <StyledLink to="/posts">posts</StyledLink>
        <StyledLink to="https://github.com/rocketll">github</StyledLink>
      </Links>
      <StyledGallery />
      <Mail href="mailto:me@lucas.land">me@lucas.land</Mail>
    </Layout>
  </>
)

export default Index
