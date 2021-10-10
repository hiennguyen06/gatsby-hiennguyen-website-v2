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
    max-width: 600px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 4.8rem;
      font-weight: 400;
      text-align: center;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.orange};
      @media (max-width: ${({ theme }) => theme.queries.s}) {
        font-size: 3.2rem;
      }
    }
  }
`

const Hero = () => {
  return (
    <HeroStyles>
      <Container>
        <div>
          <p>
            Hi I'm Hien. I'm learning to build joyful experiences for the web.
          </p>
        </div>
      </Container>
    </HeroStyles>
  )
}

export default Hero
