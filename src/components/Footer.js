import React from "react"
import styled from "styled-components"

const FooterStyles = styled.div`
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0px;
  z-index: 1;
  font-weight: 300;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;

    div {
      p {
        text-align: center;
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    height: 100%;
    @media (max-width: 728px) {
      margin-bottom: 2rem;
    }
    li {
      font-size: 1.8rem;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 1.6rem;
      }
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
`

const Footer = () => {
  return (
    <FooterStyles id="footer">
      <div>
        <p>Copyright © {new Date().getFullYear()} Hien Nguyen</p>
      </div>
      <div>
        <ul>
          <li>
            <a
              href="mailto:info@hiennguyen.com.au"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hien-nguyen06/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hiennguyen06"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </FooterStyles>
  )
}

export default Footer
