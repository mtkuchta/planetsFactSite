import React from "react"
import {
  ImageContainer,
  StyledImage,
  StyledSurfaceImage,
} from "./PlanetImage.style"

const PlanetImage = ({ imagesSVG, imagePNG, planetName, activeView }) => {
  return (
    <ImageContainer>
      {activeView == "overview" && (
        <StyledImage
          planet={planetName.toLowerCase()}
          dangerouslySetInnerHTML={{
            __html: imagesSVG.edges[1].node.svg.content,
          }}
        />
      )}
      {activeView !== "overview" && (
        <StyledImage
          planet={planetName.toLowerCase()}
          dangerouslySetInnerHTML={{
            __html: imagesSVG.edges[0].node.svg.content,
          }}
        />
      )}

      {activeView == "surface" && (
        <StyledSurfaceImage src={imagePNG.node.publicURL} />
      )}
    </ImageContainer>
  )
}

export default PlanetImage
