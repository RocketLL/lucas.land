import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ location: { pathname }, title, lang, desc, type }) {
  const {
    site: {
      siteMetadata: { title: siteTitle, description, image, url },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  )

  console.log(title)

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      defaultTitle={"lucas.land"}
      htmlAttributes={{ lang: lang === "kr" ? "ko" : "en" }}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: `${title}${title ? " | " : ""}${siteTitle}`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:description`,
          content: desc || description,
        },
        {
          property: `og:type`,
          content: type === "page" ? `website` : "article",
        },
        {
          property: `og:url`,
          content: `${url}${pathname.replace(/^\/|\/$/g, "")}`,
        },
      ]}
    >
      {type === "post" &&
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": ${title},
            "author": ${lang === "kr" ? "이윤규" : "Lucas Lee"}
          }
         `}
        </script>}
    </Helmet>
  )
}

export default SEO
