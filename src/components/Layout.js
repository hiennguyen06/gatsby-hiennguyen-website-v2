import React, { useState } from "react"
import "normalize.css"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/globalStyles"
import Header from "./Header"

const theme = {
  colors: {
    black: "#000",
    navy: "#15202B",
    green: "#204D46",
    orange: "#cf2d02",
    white: "#fff",
    grey: "#ededed",
  },
  queries: {
    xs: "400px",
    s: "600px",
    m: "768px",
    l: "992px",
    xl: "1200px",
  },
}

const Layout = ({ children }) => {
  const [mobileNav, setMobileNav] = useState(false)

  const handleMobileNav = () => {
    setMobileNav(!mobileNav)
  }

  console.log(mobileNav)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Layout
