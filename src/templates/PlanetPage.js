import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  PlanetContainer,
  ButtonsContainer,
  StyledButton,
} from "./PlanetPage.style"

import Layout from "../components/layout"
import PlanetImage from "../components/PlanetImage/PlanetImage"
import PlanetOverview from "../components/PlanetOverview/PlanetOverview"
import PlanetDetails from "../components/PlanetDetails/PlanetDetails"
import { OverviewContainer } from "../components/PlanetOverview/PlanetOverview.style"

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
          surface: geology {
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
          relativePath
          absolutePath
          publicURL
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
  const buttons = [
    { mobileName: "overview", desktopName: "overview" },
    { mobileName: "structure", desktopName: "internal structure" },
    { mobileName: "surface", desktopName: "surface geology" },
  ]
  let isMobileView = true

  if (typeof window !== "undefined") {
    isMobileView = window.innerWidth >= 768 ? false : true
  }

  const handleClickButton = e => {
    setActiveView(e.currentTarget.id)
  }

  return (
    <Layout>
      <PlanetContainer>
        <ButtonsContainer>
          {buttons.map((button, index) => {
            return (
              <StyledButton
                key={button.mobileName}
                id={button.mobileName}
                color={planet.name.toLowerCase()}
                className={button.mobileName == activeView ? "active" : ""}
                onClick={handleClickButton}
              >
                {!isMobileView && (
                  <p className="buttonNumber">{`0${index + 1}`}</p>
                )}
                <p>{isMobileView ? button.mobileName : button.desktopName}</p>
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
        <PlanetOverview planet={planet} activeView={activeView} />
        <PlanetDetails planet={planet} />
      </PlanetContainer>
    </Layout>
  )
}

export default PlanetPage
