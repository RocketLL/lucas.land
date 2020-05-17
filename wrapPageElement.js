import React from "react"
import { Wrapper } from "./src/components/wrapper"

const wrapPageElement = ({ element, props }) => (
  <Wrapper {...props}>{element}</Wrapper>
)

export default wrapPageElement