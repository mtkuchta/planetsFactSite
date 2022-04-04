import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"
import { GlobalStyle } from "../assets/styles/GlobalStyle"

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default AppProvider
