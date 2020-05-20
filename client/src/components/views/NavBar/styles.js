import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: ${({ isTransparent, path }) =>
    isTransparent && !path  ? "transparent" : "black"};
    position: ${props => props.path ? "relative":"fixed"};
    z-index: 1000;
    width: 100%;
    transition: 0.5s;
    color: white !important;
    font-family: 'Roboto', sans-serif;
    @media(max-width: 1000px) {
      position: relative;
      background-color: black;
    }
`;


export const ToggleButton = styled.button`
    border-color: rgba(255, 255, 255, 0) !important;
`;