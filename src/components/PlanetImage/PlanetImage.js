import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PlanetImage = ({ images }) => {
  //   const data = useStaticQuery(graphql`
  //     query PlanetImagesQuery($planet: String!) {
  //       allFile(filter: { name: { glob: $planet } }) {
  //         edges {
  //           node {
  //             relativePath
  //             name
  //             publicURL
  //             ext
  //           }
  //         }
  //       }
  //     }
  //   `)

  console.log(images.nodes)
  return (
    <div>
      <GatsbyImage
        image={images.nodes[1].publicURL}
        alt={images.nodes[1].name}
      />
    </div>
  )
}

export default PlanetImage
