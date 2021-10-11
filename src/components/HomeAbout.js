import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../styles/globalStyles"

const HomeAboutStyles = styled.div`
  background: ${({ theme }) => theme.colors.navy};
  padding: 12rem 0;
  width: 100%;
  height: auto;
  max-height: 900px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  position: sticky;
  top: 0px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.queries.m}) {
    display: block;
    padding: 6rem 0;
    height: auto;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
  }

  .home-about-container {
    width: 100%;
    margin: 0 auto;

    display: flex;
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.white};
    @media (max-width: ${({ theme }) => theme.queries.l}) {
      display: flex;
      flex-direction: column-reverse;
    }
    .about-info {
      flex-basis: 95%;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 2rem 2rem 0 0;

      @media (max-width: ${({ theme }) => theme.queries.l}) {
        width: 400px;
      }

      @media (max-width: ${({ theme }) => theme.queries.s}) {
        width: 100%;
      }

      p {
        font-size: 1.6rem;
      }

      @media (max-width: ${({ theme }) => theme.queries.m}) {
        padding: 2rem 0rem 2rem 0rem;
      }
    }
  }
`

const HomeAbout = () => {
  return (
    <HomeAboutStyles id="about">
      <Container nonFluid>
        <div className="home-about-container">
          <div className="about-info">
            <h2>About Me.</h2>
            <p>
              Hello! My name is Hien Nguyen and I like creating joyful and
              interactive experiences for the internet. My interest in front-end
              web development started in 2019 with some basic HTML & CSS.
              Recently, I have been learning React, Gatsby, Style Components and
              building simple projects on Webflow. I hope you enjoy scrolling
              through my website.
            </p>
          </div>
          <StaticImage
            src="../images/hn.JPG"
            alt="Hien Nguyen"
            layout="constrained"
          />
        </div>
      </Container>
    </HomeAboutStyles>
  )
}

export default HomeAbout
