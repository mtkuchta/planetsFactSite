import React from "react"

import {
  OverviewContainer,
  StyledPlanetName,
  StyledText,
  StyledSource,
  StyledLink,
  StyledSourceIcon,
} from "./PlanetOverview.style"

const PlanetOverview = ({ planet, activeView }) => {
  return (
    <OverviewContainer>
      <StyledPlanetName>{planet.name}</StyledPlanetName>
      <StyledText>{planet[activeView].content}</StyledText>
      <StyledSource>
        <p>
          Source :{" "}
          <StyledLink href={planet[activeView].source} target="_blank">
            <span>Wikipedia</span>
          </StyledLink>
        </p>
        <StyledSourceIcon />
      </StyledSource>
    </OverviewContainer>
  )
}

export default PlanetOverview
