import React from "react"
import { DetailContainer } from "./PlanetDetail.style"

const PlanetDetail = ({ detail, value }) => {
  return (
    <DetailContainer>
      <h3>{detail}</h3>
      <p>{value}</p>
    </DetailContainer>
  )
}

export default PlanetDetail
