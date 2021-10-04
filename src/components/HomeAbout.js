import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../styles/globalStyles"

const HomeAboutStyles = styled.div`
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0px;
  z-index: 1;

  .home-about-container {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    @media (max-width: ${({ theme }) => theme.queries.m}) {
      display: block;
    }
    .about-info {
      width: 400px;
      text-align: left;
      padding: 0 2em 0rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      p {
        margin-bottom: 16px;
      }

      @media (max-width: ${({ theme }) => theme.queries.m}) {
        padding: 3rem 1.5rem;
        max-width: 100%;
        font-size: 1.6rem;
      }
    }
  }
`

const HomeAbout = () => {
  return (
    <HomeAboutStyles>
      <Container nonFluid>
        <div className="home-about-container">
          <StaticImage
            src="../images/hn.JPG"
            alt="Hien Nguyen"
            layout="constrained"
            height={500}
          />
          <div className="about-info">
            <p>
              Just like your business, we see brands as a constant work in
              progress. Always testing. Always building. Always evolving. Always
              Beta. Ours is a constant, iterative and collaborative process of
              research, creation, building, testing building, testing testing.
            </p>
            <button className="btn">Download CV</button>
          </div>
        </div>
      </Container>
    </HomeAboutStyles>
  )
}

export default HomeAbout
