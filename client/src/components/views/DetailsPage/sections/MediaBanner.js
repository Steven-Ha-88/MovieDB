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
                    <img  style={{width: "100%", height: "100%", borderRadius:"8px"}}src={ `${IMAGE_BASE_URL}${POSTER_SIZE}${media.poster_path}`}/>
                  </ImageWrapper>
                </MediaCover>
                <MediaDetails>
                  <div style={{width: "100%", color: "white"}}>
                    <h1 style={{marginBottom: "0px", color: "white"}}>{media.title}</h1>
                    <div style={{ marginBottom: "20px"}}>
                      {media.release_date}
                      {media.genres && media.genres.map((item, index) => {
                        return <span key={item.id}>{` • ${item.name} `}</span>
                      })}
                      • {media.runtime}mins
                    </div>
                    <p><i>{media.tagline}</i></p>
                    <Overview>{media.overview}</Overview>
                    <a href={media.homepage}>Watch Now!</a>

                  </div>
                </MediaDetails>
            </Wrapper>
        </Container>
    )
}

export default ImageBanner;