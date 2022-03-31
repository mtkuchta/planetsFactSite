import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"

const ThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeProvider
