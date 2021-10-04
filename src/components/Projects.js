import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Container } from "../styles/globalStyles"
import Project from "./Project"

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        id
        description
        name
        builtWith
        screenshot {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        url
      }
    }
  }
`

const ProjectsStyles = styled.div`
  padding: 12rem 0 6rem 0;
  background: #fff;
  position: sticky;
  top: 0px;
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.queries.m}) {
    padding: 3rem 0;
  }
`

const ProjectsInner = styled.div`
  display: flex;
  justify-content: ${({ layout }) => layout || "space-between"};
  flex-wrap: wrap;
`

const Projects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProject.nodes

  return (
    <ProjectsStyles>
      <Container nonFluid>
        <ProjectsInner>
          {projects.map((project, index) => {
            return <Project key={project.id} project={project} index={index} />
          })}
        </ProjectsInner>
      </Container>
    </ProjectsStyles>
  )
}

export default Projects
