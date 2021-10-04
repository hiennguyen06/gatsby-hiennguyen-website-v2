import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import HomeAbout from "../components/HomeAbout"
import Projects from "../components/Projects"

const Home = () => {
  return (
    <Layout>
      <Hero />
      <HomeAbout />
      <Projects />
    </Layout>
  )
}

export default Home
