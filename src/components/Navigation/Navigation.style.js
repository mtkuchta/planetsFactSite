import styled from "styled-components"
import { Link } from "gatsby"

export const StyledNav = styled.nav`
  width: 100%;
  position: absolute;
  top: 68px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  transform: ${({ isOpen }) =>
    isOpen ? `translateY(0)` : `translateY(-100%)`};
  z-index: -1;
`

export const StyledLink = styled(Link)`
  position: relative;
  width: 80%;
  color: ${({ theme }) => theme.colors.text};
  font-family: "Spartan";
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1.36px;
  line-height: 20px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 20px 0 20px 45px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:before {
    position: absolute;
    display: block;
    content: "";
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme, color }) => theme.colors[color]};
  }

  &:after {
    position: absolute;
    display: block;
    content: "";
    top: 50%;
    right: 5%;
    transform: translateY(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    border-top: 2px solid rgba(255, 255, 255, 0.4);
    border-right: 2px solid rgba(255, 255, 255, 0.4);
  }
`
