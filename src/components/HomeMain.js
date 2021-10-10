import React from "react"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import FunProjects from "./FunProjects"
import WebLinks from "./WebLinks"
import styled from "styled-components"

const HomeMainStyles = styled.div`
  width: 100vw;
  padding: 0rem 0 0rem 0;
  background: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0px;
  z-index: 1;
`

const HomeMain = () => {
  return (
    <HomeMainStyles>
      <Projects />
      <FunProjects />
      <WebLinks />
      <Contact />
    </HomeMainStyles>
  )
}

export default HomeMain
