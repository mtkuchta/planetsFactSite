import styled from "styled-components"

export const PlanetDetailsContainer = styled.section`
  grid-area: planetDetails;
  width: 100%;
  padding: 20px 15px;
  margin-top: 20px;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: space-around;
    padding: 0 40px;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 0 100px;
  }
`
