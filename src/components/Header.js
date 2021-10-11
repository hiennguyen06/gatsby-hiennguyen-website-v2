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
      padding-bottom: 8px;
      &:after {
        display: block;
        content: "";
        border-bottom: solid 1px ${({ theme }) => theme.colors.orange};
        transform: scaleX(0);
        transform-origin: 100% 50%;
        transition: transform 0.3s ease-in-out;
      }
      &:hover:after {
        transform: scaleX(1);
        transform-origin: 0% 50%;
      }
    }
  }
`

const Logo = styled.span`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.orange};
  &:after {
    display: block;
    content: "";
    border-bottom: solid 1px ${({ theme }) => theme.colors.orange};
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 0.3s ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
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
              <div className="animated-line"></div>
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
