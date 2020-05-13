import styled from 'styled-components';


export const Container = styled.div`
  background-image: linear-gradient(to right, rgba(13.73%, 18.04%, 14.90%, 1.00) 150px, rgba(21.96%, 23.53%, 22.35%, 0.84) 100%);
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

    }`;


export const Overview = styled.div`
    width: 100%;
    @media (min-width: 1200px) {
      width: 700px;
    }`;