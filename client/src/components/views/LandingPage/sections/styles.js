import styled from 'styled-components';


export const ImageWrapper = styled.div`
  background-image: url(${props => props.image}),linear-gradient(14deg, rgba(0,0,0,1) 13%, rgba(237,237,237,0) 54%, rgba(255,255,255,0) 100%);
  background-repeat: no-repeat;
  background-size: 100%;
  background-blend-mode: saturation;
  // background-attachment: fixed;
  height: 500px;
  min-width: 350px;
  width: 100%;
  position: relative;

  @media (min-width: 1300px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    background-image: url(${props => props.image}), linear-gradient(0deg, rgba(0,0,0,1) 11%, rgba(237,237,237,0) 100%, rgba(255,255,255,0) 100%);
    height: 396px;
  }

  @media (max-width: 480px) {
    background-image: url(${props => props.image}), linear-gradient(0deg, rgba(0,0,0,1) 46%, rgba(237,237,237,0) 100%, rgba(255,255,255,0) 100%);
    background-size: 100%
    height: 350px;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  max-width: 500px;
  bottom: 30px; 
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  @media(max-width: 768px) {
    margin-left: 0px;
    padding: 20px;
    bottom: 33px;
    left: 10px;
  
  }

`;

export const Text = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
  @media(max-width: 480px) {
    margin-top: 10px;
  }
`;

export const Container = styled.div`
  width: 150px;
  padding: 5px;
  margin: 10px;
  flex: 0 0 auto;
  
`;

export const TextContainer = styled.div`
color: ${props => props.color};
display:${props => props.disable ? "none" : null};

`;

export const FilmCover = styled.div`
  width: 130px;
  height: 100%;
  display: flex;
  position: absolute:
  alignItems: center;
  @media (min-width: 1200px) {
    height: 70%;
  }
  @media (max-width: 768px) {
    width: 115px;
  }
`;