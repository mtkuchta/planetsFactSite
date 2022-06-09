import styled from "styled-components"

export const DetailContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 25px;
  margin: 7px 0;

  h3 {
    font-family: "Spartan";
    font-size: 8px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 0.73px;
    text-transform: uppercase;
    opacity: 0.5;
  }

  p {
    font-family: "Antonio";
    font-size: 20px;
    line-height: 48px;
    font-weight: 400;
  }
`
