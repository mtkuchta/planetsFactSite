import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StyledNav, StyledLink } from "./Navigation.style"

const Navigation = ({ isOpen }) => {
  const data = useStaticQuery(graphql`
    query PlanetsQuery {
      allPlanetsJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  return (
    <StyledNav isOpen={isOpen}>
      {data.allPlanetsJson.edges.map((planet, index) => {
        return (
          <StyledLink
            to={`/${planet.node.name.toLowerCase()}`}
            color={planet.node.name.toLowerCase()}
            key={`route_${index}`}
          >
            {planet.node.name}
          </StyledLink>
        )
      })}
    </StyledNav>
  )
}
Navigation.propTypes = {
  isOpen: PropTypes.bool,
}

Navigation.defaultProps = {
  isOpen: false,
}

export default Navigation
