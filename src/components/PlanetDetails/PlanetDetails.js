import React from "react"
import { PlanetDetailsContainer } from "./PlanetDetails.style"
import {} from "../PlanetDetail/PlanetDetail.style"
import PlanetDetail from "../PlanetDetail/PlanetDetail"

const PlanetDetails = ({ planet }) => {
  const planetDetails = [
    { detail: "rotation time", value: planet.rotation },
    { detail: "revolution time", value: planet.revolution },
    { detail: "radius", value: planet.radius },
    { detail: "average temp.", value: planet.temperature },
  ]

  return (
    <PlanetDetailsContainer>
      {planetDetails.map((detail, index) => {
        return (
          <PlanetDetail
            key={`detail_${index}`}
            detail={detail.detail}
            value={detail.value}
          />
        )
      })}
    </PlanetDetailsContainer>
  )
}

export default PlanetDetails
