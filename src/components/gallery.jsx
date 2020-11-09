import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  max-width: 55rem;
  width: 100%;
`

const Photo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "plot.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} objectPosition="center bottom" />
}

const Gallery = ({ ...props }) => (
  <Container {...props}>
    <Photo />
  </Container>
)

export default Gallery