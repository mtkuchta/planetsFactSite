import styled from "styled-components"

export const ImageContainer = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
    height: ${({ theme, planet }) => theme.sizes.mobile[planet]};
  }
`
