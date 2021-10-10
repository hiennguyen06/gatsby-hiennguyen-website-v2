import React from "react"
import Layout from "../components/Layout"
import { Container } from "../styles/globalStyles"
import SEO from "../components/SEO"

const PageNotFound = () => {
  return (
    <Layout>
      <SEO title="404" />
      <Container>Sorry, nothing to see here</Container>
    </Layout>
  )
}

export default PageNotFound
