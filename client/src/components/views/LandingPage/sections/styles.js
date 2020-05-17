import styled from 'styled-components';


export const ImageWrapper = styled.div`
  background-image: url(${props => props.image}),linear-gradient(90deg, rgba(0,0,0,1) 13%, rgba(237,237,237,0) 54%, rgba(255,255,255,0) 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: saturation;
  height: 80vh;
  width: 100%;
  position: relative;

  
`;

export const Text = styled.div`
  position: absolute;
  max-width: 500px;
  bottom: 2rem; 
  margin-left: 2rem;
  @media(max-width: 480px) {
    margin-left: 0px;
    padding: 20px;
  }

`;

export const Container = styled.div`
  width: 200px;
  padding: 5px;
  margin: 10px;
  flex: 0 0 auto;
  
`;