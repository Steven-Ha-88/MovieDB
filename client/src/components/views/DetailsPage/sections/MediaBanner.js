import React from 'react'
import { Typography } from 'antd';
import {IMAGE_BASE_URL, POSTER_SIZE } from './../../../Config';

import { Wrapper, Container, MediaCover, MediaDetails, ImageWrapper, Overview } from './styles';

const { Title } = Typography;

function ImageBanner(props) {

  const {media, image} = props;



    return (
        <Container image={image}>
            <Wrapper>
                <MediaCover>
                  <ImageWrapper>
                    <img  style={{width: "100%", height: "100%"}}src={ `${IMAGE_BASE_URL}${POSTER_SIZE}${media.poster_path}`}/>
                  </ImageWrapper>
                </MediaCover>
                <MediaDetails>
                  <div style={{width: "100%"}}>
                    <h1>{media.title}</h1>
                    <p>{media.tagline}</p>
                    <Overview>{media.overview}</Overview>
                  </div>
                </MediaDetails>
            </Wrapper>
        </Container>
    )
}

export default ImageBanner;