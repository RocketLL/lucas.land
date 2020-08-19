import React from "react"
import Link from "../../src/components/link"
import LeftTemplate from "../../src/components/left"

const Left = () => (
  <LeftTemplate title="Lucas Lee" subtitle={<Link to="mailto:me@lucas.land" size="1em">me@lucas.land</Link>} />
)

export default Left
