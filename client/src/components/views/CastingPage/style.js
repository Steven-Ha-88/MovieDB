import styled from "styled-components";

export const Overview = styled.p`
  width: 100%;
  margin-bottom: 10px;
  font-size: 11px;
  @media (min-width: 1200px) {
    width: 700px;
  }
`;

export const Container = styled.div`
  background-color: #a7aac6;

  height: auto;
  min-height: 520px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    height: 80vh;
  }
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 230px;
  height: 100%;
  display: flex;
  alignitems: center;
  @media (min-width: 1200px) {
    height: 70%;
    width: 230px;
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
  }
`;
