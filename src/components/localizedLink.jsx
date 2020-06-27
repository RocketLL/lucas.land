import React from "react"
import { Link } from "gatsby"
import { LocaleContext } from "./wrapper"
import locales from "../../i18n.json"

const LocalizedLink = ({ to, ...props }) => {
  const { locale } = React.useContext(LocaleContext)

  const isIndex = to === `/`

  const path = locales[locale].default
    ? to
    : `${locales[locale].path}${isIndex ? `` : `${to}`}`

  return <Link {...props} to={path} />
}

export default LocalizedLink