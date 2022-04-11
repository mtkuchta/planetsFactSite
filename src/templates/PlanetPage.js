import * as React from "react"
import { graphql } from "gatsby"

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

  return (
    <Layout>
      <h1>{planet.name}</h1>
    </Layout>
  )
}

export default PlanetPage
