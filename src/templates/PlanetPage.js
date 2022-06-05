import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  PlanetContainer,
  ButtonsContainer,
  StyledButton,
} from "./PlanetPage.style"

import Layout from "../components/layout"
import PlanetImage from "../components/PlanetImage/PlanetImage"

export const query = graphql`
  query ($planet: String!) {
    allPlanetsJson(filter: { name: { eq: $planet } }) {
      edges {
        node {
          name
          overview {
            content
            source
          }
          radius
          revolution
          rotation
          structure {
            content
            source
          }
          temperature
        }
      }
    }
    imagesSVG: allFile(
      filter: { ext: { eq: ".svg" }, relativeDirectory: { eq: $planet } }
    ) {
      edges {
        node {
          id
          svg {
            content
          }
          name
          ext
        }
      }
    }
    imagesPNG: allFile(
      filter: { ext: { eq: ".png" }, relativeDirectory: { eq: $planet } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData
          }
          ext
        }
      }
    }
  }
`
const PlanetPage = ({ data }) => {
  const planet = data.allPlanetsJson.edges[0].node
  const [activeView, setActiveView] = useState("overview")
  const buttons = ["overview", "structure", "surface"]
  const handleClickButton = e => {
    setActiveView(e.target.id)
  }

  return (
    <Layout>
      <PlanetContainer>
        <ButtonsContainer>
          {buttons.map(button => {
            return (
              <StyledButton
                key={button}
                id={button}
                color={planet.name.toLowerCase()}
                className={button == activeView ? "active" : ""}
                onClick={handleClickButton}
              >
                {button}
              </StyledButton>
            )
          })}
        </ButtonsContainer>
        <PlanetImage
          imagesSVG={data.imagesSVG}
          imagePNG={data.imagesPNG.edges[0]}
          planetName={planet.name}
          activeView={activeView}
        />
      </PlanetContainer>
    </Layout>
  )
}

export default PlanetPage
