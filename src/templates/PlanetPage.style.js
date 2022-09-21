import styled from "styled-components"

export const PlanetContainer = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-areas:
    "buttons"
    "planetImage"
    "planetOverview"
    "planetDetails";
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    height: calc(100vh - 160px);
    width: 100%;
    grid-template-rows: 4fr 2fr 1fr;
    grid-template-columns: 50% 50%;
    grid-template-areas:
      "planetImage planetImage"
      "planetOverview buttons"
      "planetDetails planetDetails";
  }

  ${({ theme }) => theme.mq.desktop} {
    height: calc(100vh - 80px);
    grid-template-rows: 3fr 2fr 180px;
    grid-template-columns: 65% 35%;
    grid-template-areas:
      "planetImage planetOverview"
      "planetImage buttons"
      "planetDetails planetDetails";
  }
`

export const ButtonsContainer = styled.div`
  height: 51px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-area: buttons;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  ${({ theme }) => theme.mq.tablet} {
    height: 100%;
    width: 100%;
    flex-direction: column;
    border-bottom: none;
    padding: 45px 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 350px;
    height: 176px;
    justify-content: space-between;
    padding: 0;
  }
`
export const StyledButton = styled.button`
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 100%;
  font-family: "Spartan";
  font-size: 9px;
  line-height: 51px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.93px;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  opacity: 0.5;
  padding: 0 5px;
  transition: 0.4s ease-in-out;

  &::before {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 4px;
    background-color: ${({ theme, color }) => theme.colors[color]};
  }

  &.active {
    opacity: 1;
  }

  &.active::before {
    display: block;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 281px;
    height: 41px;
    border: 2px solid ${({ theme }) => theme.colors.border};
    align-items: center;
    justify-content: left;

    &.active {
      background-color: ${({ theme, color }) => theme.colors[color]};
    }
    &.active::before {
      display: none;
    }

    p.buttonNumber {
      padding: 0 10px;
      opacity: 50%;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 48px;
    width: 100%;
    font-size: 12px;
    padding: 0;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.buttonHover};
      opacity: 1;
    }
    &.active:hover {
      background-color: ${({ theme, color }) => theme.colors[color]};
    }
  }
`
