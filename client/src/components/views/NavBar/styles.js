import styled from 'styled-components';

export const Nav = styled.nav`
    background: ${({ isTransparent, path }) =>
    isTransparent && !path  ? "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))" : "rgb(20, 20, 20)"};
    position: ${props => props.path ? "relative":"fixed"};
    z-index: 1000;
    width: 100%;
    height: ${({isTransparent}) => isTransparent ? "75px" : " 50px" };
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
    width: 255px;
    border-radius: 5px;
    height: 250px;
    display: flex;
    flex-direction: column;
    background-color: rgb(20,20,20);
    position: absolute;
    top: 53px;
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
  padding: 10px;
  border-bottom: 1px solid grey;
  :hover {
    background-color: grey;
  }
  @media (max-width: 480px) {
    height: auto;
    padding: 10px;
  }

`;

export const Text = styled.p`
  color: #e1e1e1;
  font-size: 10px;


`;


export const Title = styled.p`
  font-size: 12px;
  margin-bottom: 0px;
  color: white;
  @media (max-width: 480px) {
    font-size: 14px;
    
  }

`;




export const ImgCover = styled.img`
width: 40px;
@media (max-width: 480px) {
  width: 60px;
}
`;

export const CardText = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`;

export const Form = styled.form`
  margin-right: 10px;
  display: inline-block;

  @media (max-width: 1000px) {
    display: ${props => props.web};
  }
  @media (min-width: 1000px) {
    display: ${props => props.mobile};
  }
`;

export const Input = styled.input`
  height: 25px;
  font-size: 10px;
  width: 230px !important;
  vertical-align: middle;
  display: inline-block;
  outline: 0;
  border: 0;
  background-color: #7e7e7e38;
  /* border-radius: 5px; */
  border-radius: 0px 5px 5px 0px;
  @media (max-width: 480px) {
    height: 28px;
    width: 153px !important;
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 1; /* Firefox */
  }

`;

export const SearchIcon = styled.div`
  background-color: rgba(126, 126, 126, 0.22);
  display: inline-block;
  height: 25px;
  border-radius: 5px 0px 0px 5px;
  position: relative;
  top: -1px;
  @media (max-width: 480px) {
    height: 28px;
    top: -2px;
 
  }
`;

export const Icon = styled.i`
  margin: 0px 5px 0px 10px;
  font-size: 12px;
  position: relative;
  top: 1px;
  @media (max-width: 480px) {
    top: 3px;
  }

`;

export const CardImg = styled.div`
// @media (max-width: 480px) {
//   display: none;
// }

`;


export const ToggleButton = styled.button`
    border-color: rgba(255, 255, 255, 0) !important;
    position: relative;
    bottom: -2px;

`;