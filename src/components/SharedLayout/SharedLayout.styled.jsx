import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    background-color: #333;
    display: flex;
    height: 52px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;

export const StyledLink = styled(NavLink)`
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: background-color ease-in-out 0.1s;
    &:hover {
        background-color: #111;
    }

  &.active {
    background-color: #BD00FF;
  }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:50px;
`;

export const Logo = styled.p`
    margin-left: 5px;
    margin-right:30px;
    margin: 0 30px 0 5px;
    color: white;
    font-size: 28px;
    font-weight: bold;
    letter-spacing: 0.02em;
`;