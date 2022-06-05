import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const ImageContainer = styled.div`
  position: relative;
  height: 50vh;
`
export const StyledImage = styled.div`
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: block;
    height: ${({ theme, planet }) => theme.sizes.mobile[planet]};
  }
`
export const StyledGatsbyImage = styled(GatsbyImage)`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100px;
`
