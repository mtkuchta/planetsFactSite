import styled from "styled-components"

export const StyledHeader = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const StyledLogo = styled.p`
  font-family: "Antonio";
  font-size: 28px;
  text-transform: uppercase;
`
