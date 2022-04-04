import React, { useState } from "react"
import PropTypes from "prop-types"
import { StyledHeader, StyledLogo } from "./Header.style"
import MenuIcon from "../ManuIcon/MenuIcon"
import Navigation from "../Navigation/Navigation"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <StyledHeader>
      <StyledLogo>The planets</StyledLogo>
      <MenuIcon onClick={handleOpenNav} isOpen={isNavOpen} />
      <Navigation isOpen={isNavOpen} />
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
