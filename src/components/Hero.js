import React from "react"
import styled from "styled-components"
import { Container } from "../styles/globalStyles"
import heroBackground from "../images/hero.jpg"

const HeroStyles = styled.div`
  background: url(${heroBackground});
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0px;
  z-index: 1;

  div {
    max-width: 500px;
    span {
      font-size: 3.2rem;

      @media (max-width: ${({ theme }) => theme.queries.s}) {
        font-size: 3.2rem;
      }
    }
  }
`

const Hero = () => {
  return (
    <HeroStyles>
      <Container></Container>
    </HeroStyles>
  )
}

export default Hero
