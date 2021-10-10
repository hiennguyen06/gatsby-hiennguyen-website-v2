import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import HomeAbout from "../components/HomeAbout"
import HomeMain from "../components/HomeMain"
import SEO from "../components/SEO"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <HomeAbout />
      <HomeMain />
    </Layout>
  )
}

export default Home
