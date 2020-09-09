import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import SEO from "./seo"
import GlobalStyle from "./globalStyle"
import { lightTheme, darkTheme, rem } from "./themes"
import Header from "./header"

import "../fonts.css"

const Container = styled.div`
  display: block;
  max-width: ${({ theme }) => rem(theme.maxWidth)};
  height: 100%;
  
  @media only screen and (min-width: ${({ theme }) => theme.breakpointLarge}) {
    margin: 20rem 0 0 0;
  }
)}
`

const Wrapper = ({
  children,
  pageContext: { locale, type, title, desc },
  location,
}) => {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <SEO
        location={location}
        title={title}
        lang={locale}
        desc={desc}
        type={type}
      />
      <Header location={location} toggleTheme={toggleTheme} />
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

export default Wrapper
