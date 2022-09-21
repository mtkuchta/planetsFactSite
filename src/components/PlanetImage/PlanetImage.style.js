import styled from "styled-components"

export const ImageContainer = styled.div`
  position: relative;
  grid-area: planetImage;
  height: 50vh;

  ${({ theme }) => theme.mq.desktop} {
    height: 100%;
  }
`
export const StyledImage = styled.div`
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    height: ${({ theme, planet }) => theme.sizes.mobile[planet]};

    ${({ theme }) => theme.mq.tablet} {
      height: ${({ theme, planet }) => theme.sizes.tablet[planet]};
    }
    ${({ theme }) => theme.mq.desktop} {
      height: ${({ theme, planet }) => theme.sizes.desktop[planet]};
    }
  }
`
export const StyledSurfaceImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 35%);
  height: 100px;

  ${({ theme }) => theme.mq.tablet} {
    height: 130px;
  }
  ${({ theme }) => theme.mq.desktop} {
    height: 180px;
  }
`
