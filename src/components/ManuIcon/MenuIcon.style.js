import styled from "styled-components"

export const StyledIcon = styled.div`
  display: block;
  width: 24px;
  height: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bar {
    width: 100%;
    height: 3px;
    background-color: #ffffff;
  }

  .open {
    opacity: 0.25;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`
