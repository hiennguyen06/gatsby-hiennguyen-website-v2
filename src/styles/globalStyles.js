import styled, { createGlobalStyle, css } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        -webkit-font-smoothing: antialiased;
        font-size: 62.5%;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        overscroll-behavior: none;
        overflow-x: hidden;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.4;
        letter-spacing: -0.1px;
        color: ${({ theme }) => theme.colors.black};

    }

    h1, h2, p{
        padding: 0;
        margin: 0;
    }

    h2 {
        font-size: 3.2rem;
        margin-bottom: 3.2rem;

        @media (max-width: ${({ theme }) => theme.queries.m}) {
            font-size: 2.4rem;
      }
    }

    h3 {
        text-transform: uppercase;
        font-size: 1.6rem;
        margin-bottom: 0.8rem;
    }

    p {
        font-size: 1.8rem;
        line-height: 1.4;
    }

    a {
        text-decoration: none;
        /* color: ${({ theme }) => theme.colors.white} */
        color: inherit

    }

    li {
        list-style: none;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .btn {
        background: #fff;
        color: #000;
        padding: 0 16px;
        height: 40px;
        border-radius: 2px;
        border: 0;
        font-weight: 600;
    }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  ${props =>
    props.nonFluid &&
    css`
      max-width: 1200px;
    `}
`
