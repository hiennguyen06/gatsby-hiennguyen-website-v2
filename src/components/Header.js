import React from "react"
import styled from "styled-components"
import { Container } from "../styles/globalStyles"
import { Link } from "gatsby"

const HeaderStyles = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  color: ${({ theme }) => theme.colors.white};

  .btn-menu {
    color: ${({ theme }) => theme.colors.white};
    display: none;

    @media (max-width: ${({ theme }) => theme.queries.m}) {
      display: block;
    }
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.queries.m}) {
      display: none;
    }

    li {
      margin-left: 2.4rem;
    }
  }
`

const Logo = styled.span`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.white};
`

const Header = ({ mobileNav, handleMobileNav }) => {
  return (
    <HeaderStyles>
      <Container nonFluid>
        <Nav>
          <Logo>
            <Link to="/">Hien Nguyen</Link>
          </Logo>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Experience</Link>
            </li>
            <li>
              <Link to="/">Resume</Link>
            </li>
          </ul>
          <button onClick={handleMobileNav} className="btn-menu">
            {mobileNav ? "Close" : "Menu"}
          </button>
        </Nav>
      </Container>
    </HeaderStyles>
  )
}

export default Header
