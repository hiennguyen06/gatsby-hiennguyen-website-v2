import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ title, description }) => {
  const data = useStaticQuery(query)
  const metaDescription = description || data.site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${data.site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDescription }]}
    ></Helmet>
  )
}

export const query = graphql`
  {
    site(siteMetadata: {}) {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default SEO
