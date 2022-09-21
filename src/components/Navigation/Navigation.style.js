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
  transition: 0.4s;
  transform: ${({ isOpen }) =>
    isOpen ? `translateX(0)` : `translateX(-100%)`};
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 2;

  ${({ theme }) => theme.mq.tablet} {
    width: 90%;
    position: static;
    transform: translate(0);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    opacity: 0.75;
    background-color: transparent;
  }
  ${({ theme }) => theme.mq.desktop} {
    width: 665px;
    flex-grow: 0;
  }
`

export const StyledLink = styled(Link)`
  position: relative;
  /* width: 90%; */
  color: ${({ theme }) => theme.colors.text};
  font-family: "Spartan";
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1.36px;
  line-height: 20px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 20px 20px 20px 45px;
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

  ${({ theme }) => theme.mq.tablet} {
    flex-grow: 0;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 25px;
    padding: 0;
    border-bottom: none;
    margin-bottom: 10px;
    transition: 0.4s;

    &::before {
      display: none;
    }

    &::after {
      display: none;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -20px;
      left: 0;
      height: 4px;
      width: 100%;
      color: red;
      border-radius: 0;
      opacity: 0;
      transition: 0.4s ease-in-out;
    }
    &:hover::before {
      opacity: 1;
    }
  }
`
