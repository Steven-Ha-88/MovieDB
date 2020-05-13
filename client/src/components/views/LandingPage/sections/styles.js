import styled from 'styled-components';


export const ImageWrapper = styled.div`
background-image: url(${props => props.image}),linear-gradient(to bottom right, #00000078,#bcbcbc45);
background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: saturation;
height: 80vh;
width: 100%;
position: relative;
`;

export const Container = styled.div`
  width: 200px;
  padding: 5px;
  margin: 10px;
  flex: 0 0 auto;
  
`;