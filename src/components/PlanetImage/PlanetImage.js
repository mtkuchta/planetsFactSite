import React from "react"
import {
  ImageContainer,
  StyledImage,
  StyledGatsbyImage,
} from "./PlanetImage.style"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PlanetImage = ({ imagesSVG, imagePNG, planetName, activeView }) => {
  const surfaceImage = getImage(imagePNG.node)
  console.log(imagePNG)
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
      {/* <StyledGatsbyImage image={surfaceImage} /> */}
    </ImageContainer>
  )
}

export default PlanetImage
