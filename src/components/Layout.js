import React, { useState } from "react"
import "normalize.css"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/globalStyles"
import Footer from "../components/Footer"
import Header from "../components/Header"
import MobileNav from "./MobileNav"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const theme = {
  colors: {
    black: "#000",
    navy: "#15202B",
    green: "#204D46",
    orange: "#cf2d02",
    white: "#fff",
    grey: "#959a9e",
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header handleMobileNav={handleMobileNav} mobileNav={mobileNav} />
      <MobileNav handleMobileNav={handleMobileNav} mobileNav={mobileNav} />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
