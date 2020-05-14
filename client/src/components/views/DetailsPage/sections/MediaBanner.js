import React from 'react'
import {IMAGE_BASE_URL, POSTER_SIZE } from './../../../Config';
import Favourite from './Favourite';

import { Wrapper, Container, MediaCover, MediaDetails, ImageWrapper, Overview } from './styles';

function ImageBanner(props) {

  const {media, image} = props;

    return (
        <Container image={image}>
            <Wrapper>
                <MediaCover>
                  <ImageWrapper>
                    <img  style={{width: "100%", height: "100%", borderRadius:"9px"}}src={ `${IMAGE_BASE_URL}${POSTER_SIZE}${media.poster_path}`}/>
                  </ImageWrapper>
                </MediaCover>
                <MediaDetails>
                  <div style={{width: "100%", color: "white"}}>
                    <h1 style={{marginBottom: "0px", color: "white"}}>{media.original_name ? media.original_name : media.original_title}</h1>
                    <div style={{ marginBottom: "20px", fontSize: "10px"}}>
                      {media.release_date ? media.release_date : media.first_air_date}
                      {media.genres && media.genres.map((item, index) => {
                        return <span key={item.id}>{` • ${item.name} `}</span>
                      })}
                      • {media.runtime ? media.runtime : media.number_of_seasons}{media.runtime ? " mins " : " Seasons "}
                      •<Favourite userId={localStorage.getItem('userId')} mediaId={media.id} mediaInfo={media}  />
                    </div>
                    <h6 style={{color: "white"}}>Rating: {media.vote_average}</h6>
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