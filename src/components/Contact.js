import React from "react"
import styled from "styled-components"
import { Container } from "../styles/globalStyles"

const ContactStyles = styled.div`
  padding: 12rem 0;
  width: 100%;
  height: 60vh;

  @media (min-width: 1600px) {
    height: 80vh;
  }
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .inner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p {
      width: 60%;
      font-size: 3.2rem;
      font-weight: 400;
      text-align: center;

      @media (max-width: ${({ theme }) => theme.queries.m}) {
        width: 100%;
      }
      @media (max-width: ${({ theme }) => theme.queries.s}) {
        font-size: 2.4rem;
      }
    }
    a {
      border-bottom: 1px solid;
    }
  }
`

const Contact = () => {
  return (
    <ContactStyles id="contact">
      <Container nonFluid>
        <div className="inner">
          <p>
            I’m always looking for new opportunities to learn and collaborate.
          </p>
          <p>
            <a
              href="mailto:info@hiennguyen.com.au"
              target="_blank"
              rel="noreferrer"
            >
              Get in touch.
            </a>
          </p>
        </div>
      </Container>
    </ContactStyles>
  )
}

export default Contact
