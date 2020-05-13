import styled from 'styled-components';


export const Container = styled.div`
  background-image: url(${props => props.image}),linear-gradient(to bottom right, black, #bcbcbc66);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: saturation;

  height: 70vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    height: auto;
  }


`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  padding: 30px;
  @media (max-width: 700px) {
    flex-flow: column nowrap;
  }
`;

export const MediaCover = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 200px;
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

export const MediaDetails = styled.div`
margin-left: 50px;
display: flex;
align-items: center;
width: 100%;
@media (max-width: 600px) {
  margin-left: 0px;
  margin-top: 50px;

    }`;


export const Overview = styled.div`
    width: 100%;
    margin-bottom: 10px;
    @media (min-width: 1200px) {
      width: 700px;
    }`;