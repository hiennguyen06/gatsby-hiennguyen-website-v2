import React from "react"
import styled from "styled-components"
import { Container } from "../styles/globalStyles"
import FunProject from "./FunProject"
import { graphql, useStaticQuery } from "gatsby"

const FunProjectsStyles = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.black};
  padding: 6rem 0 6rem 0;
`

export const query = graphql`
  {
    allContentfulFunProject {
      nodes {
        id
        name
        description
        year
        url
        gitubLink
        builtWith
        screenshot {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

const FunProjects = () => {
  const data = useStaticQuery(query)
  const funProjects = data.allContentfulFunProject.nodes

  return (
    <FunProjectsStyles>
      <Container nonFluid>
        <h2>Built For Fun.</h2>
        <ul>
          {funProjects.map((project, index) => {
            return (
              <FunProject key={project.id} project={project} index={index} />
            )
          })}
        </ul>
      </Container>
    </FunProjectsStyles>
  )
}

export default FunProjects
