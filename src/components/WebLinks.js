import React from "react"
import styled from "styled-components"
import { Container } from "../styles/globalStyles"
import { graphql, useStaticQuery } from "gatsby"

const WebLinksStyles = styled.div`
  padding: 6rem 0 12rem 0;

  @media (max-width: ${({ theme }) => theme.queries.m}) {
    padding: 6rem 0 3rem 0;
  }

  .inner-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    .list {
      width: 100%;
      li {
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        padding: 12px 0;
        transition: all 0.2s ease-out;
        margin-bottom: -1px;

        @media (max-width: ${({ theme }) => theme.queries.m}) {
          flex-direction: column;
          align-items: flex-start;
        }

        @media (min-width: ${({ theme }) => theme.queries.s}) {
          &:hover {
            border-top: 1px solid ${({ theme }) => theme.colors.black};
            border-bottom: 1px solid ${({ theme }) => theme.colors.black};
            cursor: pointer;
            z-index: 1;

            .detail {
              opacity: 1;
              transform: translateY(0%);
            }
          }
        }

        .title-line {
          font-size: 2rem;

          @media (max-width: ${({ theme }) => theme.queries.s}) {
            margin-bottom: 4px;
          }
        }

        .detail {
          opacity: 0;
          transform: translateY(100%);
          transition: all 0.2s ease-out;
          font-size: 1.4rem;

          @media (max-width: ${({ theme }) => theme.queries.s}) {
            opacity: 1;
            transform: translateY(0%);
            font-weight: 300;
          }
        }
      }
    }
  }
`

export const query = graphql`
  {
    allContentfulWebLinks(sort: { fields: createdAt, order: DESC }) {
      nodes {
        name
        id
        url
        description
      }
    }
  }
`

const WebLinks = () => {
  const data = useStaticQuery(query)
  const webLinks = data.allContentfulWebLinks.nodes

  return (
    <WebLinksStyles>
      <Container nonFluid>
        <h2>Some cool stuff on the Web.</h2>
        <div className="inner-container">
          <ul className="list">
            {webLinks.map(link => {
              return (
                <a
                  key={link.id}
                  href={`${link.url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <div className="title-line">{link.name}</div>
                    <div className="detail">
                      <div className="detail-headline">{link.description}</div>
                    </div>
                  </li>
                </a>
              )
            })}
          </ul>
        </div>
      </Container>
    </WebLinksStyles>
  )
}

export default WebLinks
