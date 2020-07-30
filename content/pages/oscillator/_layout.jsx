import React, { memo } from "react"

import { layout } from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layout}>
      {children}
    </div>
  )
}

export default memo(Layout)
