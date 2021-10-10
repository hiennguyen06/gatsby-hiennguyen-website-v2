import React, { useState } from "react"
import styled from "styled-components"
import { BsPlus } from "react-icons/bs"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FunProjectStyles = styled.li`
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 12px 0;
  margin-bottom: -1px;

  a {
    border-bottom: 1px solid;
    transition: border-bottom 0.3s ease;
    cursor: pointer;
    &:hover {
      border-bottom: 0px;
    }
  }

  button {
    transition: all 0.26s ease;
    transform: ${({ showAccordian }) =>
      showAccordian ? "rotate(135deg)" : ""};
  }

  .headline {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    .project-name {
      font-size: 2rem;
    }

    .plus-icon {
      font-size: 3.2rem;
    }
  }

  .detail {
    height: ${({ showAccordian }) => (showAccordian ? "auto" : "0")};

    /* @media (max-width: ${({ theme }) => theme.queries.l}) {
      height: ${({ showAccordian }) => (showAccordian ? "330px" : "0")};
    }

    @media (max-width: ${({ theme }) => theme.queries.m}) {
      height: ${({ showAccordian }) => (showAccordian ? "825px" : "0")};
    }

    @media (max-width: ${({ theme }) => theme.queries.s}) {
      height: ${({ showAccordian }) => (showAccordian ? "720px" : "0")};
    } */

    overflow: hidden;
    transition: all 0.4s ease-out;

    .detail-inner {
      display: grid;
      padding: 1.5rem 0;
      grid-template-columns: 30% auto;
      opacity: ${({ showAccordian }) => (showAccordian ? "1" : "0")};
      transition: all 0.6s ease-in-out;

      @media (max-width: ${({ theme }) => theme.queries.m}) {
        display: block;
      }

      .info-div {
        margin-left: 4rem;

        @media (max-width: ${({ theme }) => theme.queries.m}) {
          margin-left: 0;
          margin-top: 1.5rem;
        }
        .info {
          display: grid;
          grid-template-columns: 14rem auto;
          justify-content: flex-start;
          margin-bottom: 1.6rem;

          @media (max-width: ${({ theme }) => theme.queries.l}) {
            display: block;
          }

          h4 {
            font-size: 1.6rem;
          }

          p {
            font-weight: 300;
          }
        }
      }
    }
  }
`

const FunProject = ({ project, index }) => {
  const image = getImage(project.screenshot)

  const [showAccordian, setShowAccordian] = useState(false)

  const handleAccordianToggle = () => {
    setShowAccordian(!showAccordian)
  }

  const joinedStack = project.builtWith.join(" - ")

  return (
    <FunProjectStyles showAccordian={showAccordian}>
      <div>
        <a role="button" onClick={handleAccordianToggle}>
          <div className="headline">
            <div className="project-name">{project.name}</div>
            <button onClick={handleAccordianToggle}>
              <BsPlus className="plus-icon" />
            </button>
          </div>
        </a>

        <div className="detail">
          <div className="detail-inner">
            <GatsbyImage className="image" alt={project.name} image={image} />
            <div className="info-div">
              <div className="info">
                <h4>Description</h4>
                <p>{project.description}</p>
              </div>
              <div className="info">
                <h4>Year</h4>
                <p>{project.year}</p>
              </div>
              <div className="info">
                <h4>Built With</h4>
                <p>{joinedStack}</p>
              </div>
              <div className="info">
                <h4>Links</h4>
                <span>
                  <a href={`${project.url}`} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>{" "}
                  -{" "}
                  <a
                    href={`${project.gitubLink}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FunProjectStyles>
  )
}

export default FunProject
