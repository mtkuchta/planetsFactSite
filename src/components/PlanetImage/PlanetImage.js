import React from "react"
import { ImageContainer } from "./PlanetImage.style"
import { graphql, useStaticQuery } from "gatsby"

const PlanetImage = ({ images, planetName }) => {
  console.log(images.edges, planetName)

  return (
    <ImageContainer
      planet={planetName.toLowerCase()}
      dangerouslySetInnerHTML={{ __html: images.edges[1].node.svg.content }}
    />
  )
}

export default PlanetImage
