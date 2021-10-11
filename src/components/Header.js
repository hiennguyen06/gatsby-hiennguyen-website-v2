import React from "react"
import styled from "styled-components"
import { Container } from "../styles/globalStyles"
import { Link } from "gatsby"

const HeaderStyles = styled.div`
  padding: 3rem 0;
  width: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  font-size: 1.8rem;
  z-index: 10;
  color: ${({ theme }) => theme.colors.orange};

  .btn-menu {
    color: ${({ theme }) => theme.colors.orange};
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
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.orange};
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
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projects</a>
            </li>
            <li>
              <a href="/#footer">Contact</a>
            </li>
          </ul>
          <button onClick={handleMobileNav} className="btn-menu">
            Menu
          </button>
        </Nav>
      </Container>
    </HeaderStyles>
  )
}

export default Header
