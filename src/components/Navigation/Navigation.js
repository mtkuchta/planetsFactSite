import React from "react"
import { StyledNav, StyledLink } from "./Navigation.style"

const Navigation = ({ isOpen }) => {
  const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ]
  return (
    <StyledNav isOpen={isOpen}>
      {planets.map((planet, index) => {
        return (
          <StyledLink to={`/${planet}`} color={planet} key={`route_${index}`}>
            {planet}
          </StyledLink>
        )
      })}
    </StyledNav>
  )
}

export default Navigation
