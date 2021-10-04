import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectStyles = styled.div`
  flex-basis: ${({ layout }) => layout || "45%"};
  margin: 6rem auto;

  @media (max-width: ${({ theme }) => theme.queries.m}) {
    flex-basis: 100%;
    margin-bottom: 3rem;
  }

  .project-detail {
    max-width: 500px;
    margin: 1.6rem 0 0.8rem 0;
  }

  .tech-tag {
    border: 1px solid rgb(189, 189, 189);
    border-radius: 100px;
    padding: 0px 8px;
    font-size: 12px;
    margin: 0 6px 0 0;
  }
`

const Project = ({ project, index }) => {
  console.log(project)
  const image = getImage(project.screenshot)
  return (
    <ProjectStyles layout={index % 3 === 0 && "100%"}>
      <a href={`${project.url}`} target="_blank" rel="noreferrer">
        <GatsbyImage image={image} alt={project.name} />
      </a>
      <a href={`${project.url}`} target="_blank" rel="noreferrer">
        <div className="project-detail">
          <strong>{project.name}</strong>: {project.description}
        </div>
      </a>
      <div>
        {project.builtWith.map(tag => {
          return <span className="tech-tag">{tag}</span>
        })}
      </div>
    </ProjectStyles>
  )
}

export default Project
