import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  PlanetContainer,
  ButtonsContainer,
  StyledButton,
} from "./PlanetPage.style"

import Layout from "../components/layout"

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
  }
`
const PlanetPage = ({ data }) => {
  const planet = data.allPlanetsJson.edges[0].node
  const [active, setActive] = useState("overview")
  const buttons = ["overview", "structure", "surface"]

  const handleClickButton = e => {
    setActive(e.target.id)
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
                className={button == active ? "active" : ""}
                onClick={handleClickButton}
              >
                {button}
              </StyledButton>
            )
          })}
        </ButtonsContainer>
      </PlanetContainer>
    </Layout>
  )
}

export default PlanetPage
