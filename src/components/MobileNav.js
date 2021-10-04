import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MobileNavStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #cf2d02;
  color: #fff;
  opacity: ${({ mobileNav }) => (mobileNav ? "1" : "0")};
  pointer-events: ${({ mobileNav }) => (mobileNav ? "auto" : "none")};
  transition: all 0.3s ease;
  text-align: center;

  .mobileNav-container {
    height: 100%;
    .mobileNav-inner {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .mobile-nav-links {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 1.5rem;
        li {
          font-size: 3.2rem;
          margin-bottom: 1.6rem;
        }
      }
      .mobile-social-links {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 1.5rem;
        li {
          font-size: 1.6rem;
        }
      }
    }
  }
`

const MobileNav = ({ mobileNav }) => {
  return (
    <MobileNavStyles mobileNav={mobileNav}>
      <div className="mobileNav-container">
        <div className="mobileNav-inner">
          <ul className="mobile-nav-links">
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
          <ul className="mobile-social-links">
            <li>
              <a href="/">Email</a>
            </li>
            <li>
              <a href="/">LinkedIn</a>
            </li>
            <li>
              <a href="/">Github</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </MobileNavStyles>
  )
}

export default MobileNav
