
import React from 'react'
import {IMAGE_BASE_URL, POSTER_SIZE } from './../../../Config';
import { ImageWrapper, Text, TextWrapper } from './styles';
import {FilmCover} from './styles'

function ImageBanner(props) {
    return (
        <a href={`/movies/${props.movies.id}`}>
            <ImageWrapper image={props.image}>
                <div>
                    <TextWrapper>
                        <FilmCover>
                            <img  alt="Backdrop images of film" style={{width: "100%", height: "100%"}}src={ `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movies.poster_path}`}/>
                        </FilmCover>
                        <Text>
                            <div>
                                <h2 style={{ color: 'white' }} level={2} > {props.movies.original_title} </h2>
                            </div>
                            <div>
                                <p style={{ color: 'white', fontSize: '1rem' }}>An entire universe. Once and for all.</p>
                            </div>
                        </Text>
                    </TextWrapper>
                </div>
            </ImageWrapper>
        </a>
    )
}

export default ImageBanner;