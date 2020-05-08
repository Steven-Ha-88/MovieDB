import styled from 'styled-components';

export const ImageWrapper = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%) center center / 100%, url(${props => props.image}) center center / cover, rgb(28, 28, 28);
height: 500px;
width: 100%;
position: relative;
`;

