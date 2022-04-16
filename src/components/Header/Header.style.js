import styled from "styled-components"

export const StyledHeader = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 24px;
  /* background-color: ${({ theme }) => theme.colors.background}; */

  ${({ theme }) => theme.mq.tablet} {
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 80px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 22px;
  }
`
export const StyledLogo = styled.p`
  font-family: "Antonio";
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
  /* margin-top: 10px; */
  text-align: center;
`
