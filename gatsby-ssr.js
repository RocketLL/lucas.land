import React from "react"
import Layout from "./wrapPageElement"

export const wrapPageElement = Layout
const code = `!function(){var t,e;e=localStorage.getItem("dark"),t="true"===e,document.body.setAttribute("theme",t?"dark":"light"),localStorage.setItem("dark",t?"true":"false")}();`

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<script dangerouslySetInnerHTML={{ __html: code }} />)
}
