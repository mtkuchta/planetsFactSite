import React from "react"
import PropTypes from "prop-types"
import { StyledIcon } from "./MenuIcon.style"

const MenuIcon = ({ onClick, isOpen }) => {
  return (
    <StyledIcon onClick={onClick}>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
      <div className={`bar ${isOpen ? "open" : ""}`}></div>
    </StyledIcon>
  )
}

MenuIcon.propTypes = {
  isOpen: PropTypes.bool,
}

MenuIcon.defaultProps = {
  isOpen: false,
}

export default MenuIcon
