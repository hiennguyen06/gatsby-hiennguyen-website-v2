import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectStyles = styled.div`
  flex-basis: calc(50% - 15px);

  &:not(:last-child) {
    margin: 0 0 6rem 0;
  }

  .gatsby-image-wrapper {
    img {
      transition: all 0.3s ease-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.queries.m}) {
    flex-basis: 100%;
  }

  .project-detail {
    width: 80%;
    margin: 1.6rem 0 0.8rem 0;
    p {
      font-weight: 300;
    }

    @media (max-width: ${({ theme }) => theme.queries.m}) {
      max-width: 100%;
    }
  }

  .tech-tag {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.grey};
    font-size: 12px;
  }
`

const Project = ({ project }) => {
  const image = getImage(project.screenshot)
  const joinBuiltWith = project.builtWith.join([" - "])

  return (
    <ProjectStyles>
      <a href={`${project.url}`} target="_blank" rel="noreferrer">
        <GatsbyImage image={image} alt={project.name} />
      </a>
      <a href={`${project.url}`} target="_blank" rel="noreferrer">
        <div className="project-detail">
          <h3 className="project-name">{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </a>
      <div>
        <span className="tech-tag">{joinBuiltWith}</span>
      </div>
    </ProjectStyles>
  )
}

export default Project
