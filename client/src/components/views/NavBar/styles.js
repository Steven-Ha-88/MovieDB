import styled from 'styled-components';

export const Nav = styled.nav`
    background: ${({ isTransparent, path }) =>
    isTransparent && !path  ? "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))" : "rgb(20, 20, 20)"};
    position: ${props => props.path ? "relative":"fixed"};
    z-index: 1000;
    width: 100%;
    height: 50px;
    transition: 0.5s;
    color: white !important;
    font-family: 'Roboto', sans-serif;
    @media(max-width: 1000px) {
      position: relative;
      background: rgb(18,18,18);
      background: linear-gradient(0deg, rgba(18,18,18,1) 0%, rgba(0,0,0,1) 100%); 
      height: auto;
    }
`;

export const SearchList = styled.div`
    width: 230px;
    border-radius: 5px;
    height: 250px;
    display: flex;
    flex-direction: column;
    background-color: rgb(20,20,20);
    position: absolute;
    top: 45px;
    overflow: scroll;
    @media (max-width: 1000px) {
      top: 56px;
      left: 0;
      width: 100%;
      height: auto;
    }
    `;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  height: 56px;
  border-bottom: 1px solid grey;
  :hover {
    background-color: grey;
  }

`;

export const CardText = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;

`;

export const Input = styled.input`
  height: 25px;
  font-size: 11px;
  width: 230px !important;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 480px) {
    height: 28px;
    width: 181px !important;
  }

`;


export const CardImg = styled.div`
// @media (max-width: 480px) {
//   display: none;
// }

`;


export const ToggleButton = styled.button`
    border-color: rgba(255, 255, 255, 0) !important;
`;