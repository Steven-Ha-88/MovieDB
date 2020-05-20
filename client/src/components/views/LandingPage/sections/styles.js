import styled from 'styled-components';


export const ImageWrapper = styled.div`
  background-image: url(${props => props.image}),linear-gradient(14deg, rgba(0,0,0,1) 13%, rgba(237,237,237,0) 54%, rgba(255,255,255,0) 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: saturation;
  // background-attachment: fixed;
  height: 80vh;
  width: 100%;
  position: relative;

  
`;

export const TextWrapper = styled.div`
  position: absolute;
  max-width: 500px;
  bottom: 30px; 
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  @media(max-width: 480px) {
    margin-left: 0px;
    padding: 20px;
    flex-direction: column;
  }

`;

export const Text = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
  @media(max-width: 480px) {
    margin-left: 0px;
    margin-top: 10px;
  }
`;

export const Container = styled.div`
  width: 200px;
  padding: 5px;
  margin: 10px;
  flex: 0 0 auto;
  
`;

export const FilmCover = styled.div`
  width: 130px;
  height: 100%;
  display: flex;
  alignItems: center;
  @media (min-width: 1200px) {
    height: 70%;
  }
  @media (max-width: 700px) {
    width: 200px;
  }
`;