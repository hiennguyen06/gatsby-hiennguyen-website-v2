import React from "react"
import styled from "styled-components"

const MobileNavStyles = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10000;
  background: #fff;
  color: ${({ theme }) => theme.colors.orange};
  opacity: ${({ mobileNav }) => (mobileNav ? "1" : "0")};
  pointer-events: ${({ mobileNav }) => (mobileNav ? "auto" : "none")};
  transition: all 0.3s ease;

  height: 100%;
  width: 100%;
  overflow: hidden;

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

      .btn-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        color: ${({ theme }) => theme.colors.orange};
      }
    }
  }
`

const MobileNav = ({ mobileNav, handleMobileNav }) => {
  return (
    <MobileNavStyles mobileNav={mobileNav}>
      <div className="mobileNav-container">
        <div className="mobileNav-inner">
          <ul className="mobile-nav-links">
            <li>
              <a role="button" href="/#about" onClick={handleMobileNav}>
                About
              </a>
            </li>
            <li>
              <a role="button" href="/#projects" onClick={handleMobileNav}>
                Projects
              </a>
            </li>
            <li>
              <a role="button" href="/#contact" onClick={handleMobileNav}>
                Contact
              </a>
            </li>
          </ul>
          <button onClick={handleMobileNav} className="btn-close">
            Close
          </button>
        </div>
      </div>
    </MobileNavStyles>
  )
}

export default MobileNav
