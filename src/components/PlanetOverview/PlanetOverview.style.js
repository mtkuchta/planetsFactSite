import styled from "styled-components"
import Icon from "../../assets/icon-components/iconsource.svg"

export const OverviewContainer = styled.section`
  grid-area: planetOverview;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mq.tablet} {
    align-items: flex-start;
    padding: 0 40px;
  }
`

export const StyledPlanetName = styled.h2`
  font-family: "Antonio";
  font-size: 40px;
  font-weight: 500;
  text-transform: uppercase;

  ${({ theme }) => theme.mq.tablet} {
    align-items: flex-start;
    font-size: 48px;
  }
`
export const StyledText = styled.p`
  font-family: "Spartan";
  font-size: 11px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  padding: 15px 25px;

  ${({ theme }) => theme.mq.tablet} {
    text-align: left;
    padding: 30px 0;
  }
`

export const StyledSource = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  font-family: "Spartan";
  font-size: 12px;
  font-weight: 400;

  p {
    opacity: 0.5;
    padding-right: 10px;
  }

  ${({ theme }) => theme.mq.tablet} {
    justify-content: left;
  }
`
export const StyledLink = styled.a`
  color: "#FFFFFF";
  font-weight: 700;
  text-decoration: underline;
`
export const StyledSourceIcon = styled(Icon)`
  width: 12px;
  height: 12px;
`
