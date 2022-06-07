import React from "react"
import {
  OverviewContainer,
  StyledPlanetName,
  StyledText,
} from "./PlanetOverview.style"

const PlanetOverview = ({ planet, activeView }) => {
  return (
    <OverviewContainer>
      <StyledPlanetName>{planet.name}</StyledPlanetName>
      <StyledText>{planet[activeView].content}</StyledText>
    </OverviewContainer>
  )
}

export default PlanetOverview
