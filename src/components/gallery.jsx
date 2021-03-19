import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, animated } from "react-spring"

const Container = styled(animated.div)`
  max-width: 80vh;
  width: 100%;
  height: 100%;
`

const Title = styled.h2`
  font-family: "Inter", serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1em;
  margin: 0;
  text-align: right;
  color: #aaa;
`

const StyledImg = styled(Img)`
  margin: 0 0 1em 0;

  @media only screen and (max-width: 1000px) {
    margin: 0 -1em 0 0;
  }
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

  return <StyledImg fluid={data.file.childImageSharp.fluid} objectPosition="center bottom" />
}

const Gallery = ({ ...props }) => {
  const spring = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    config: { tension: 200, friction: 30 }
  })

  return (
    <Container {...props} style={spring}>
      <Title>KdV Equation</Title>
      <Photo />
    </Container>
  )
}

export default Gallery