import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../styles/globalStyles"

const HomeAboutStyles = styled.div`
  background: ${({ theme }) => theme.colors.navy};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.white};
    @media (max-width: ${({ theme }) => theme.queries.m}) {
      display: block;
    }
    .about-info {
      width: 500px;
      text-align: left;
      padding: 0 2rem 0rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      @media (max-width: ${({ theme }) => theme.queries.s}) {
        width: 100%;
      }

      p {
        margin-bottom: 4rem;
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
          <StaticImage
            src="../images/hn.JPG"
            alt="Hien Nguyen"
            layout="constrained"
            height={500}
          />
          <div className="about-info">
            <p>
              Hello! My name is Hien Nguyen and I like creating joyful and
              interactive experiences for the internet. My interest in front-end
              web development started in 2019 with some basic HTML & CSS.
              Recently, I have been learning React, Gatsby, Style Components and
              building simple projects on Webflow. I hope you enjoy scrolling
              through my website. Please contact me if you want to have a chat.
            </p>
            <a
              href="mailto:info@hiennguyen.com.au"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn">Get in touch</button>
            </a>
          </div>
        </div>
      </Container>
    </HomeAboutStyles>
  )
}

export default HomeAbout
