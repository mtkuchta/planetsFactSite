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

  ${({ theme }) => theme.mq.tablet} {
    width: 164px;
    height: 88px;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 25px 20px 20px 20px;
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 255px;
    height: 128px;
    margin: 0;

    h3 {
      font-size: 11px;
      line-height: 25px;
      letter-spacing: 1px;
    }

    p {
      font-size: 40px;
      font-weight: 500;
    }
  }
`
