import React, {useState} from 'react';
import { Container, TextContainer } from './styles';
import empty_dp from './../../../../Images/cast.png';
import empty_media from './../../../../Images/film_icon.png'
import { Link } from 'react-router-dom';



export const FilmCard = props => {



  const { movieId, type, image, film } = props;
  return (
    <Container>
      <a href={`/${type === 'movie' ? 'movies' : type}/${movieId}`}>
        <div>
          <img alt="cast" style={{width: "100%", borderRadius: "5px"}} src={image ? image : `${film ? empty_media : empty_dp}`}/>
        </div>
        <TextContainer disable={props.disable} color={props.color}>
         <p>{props.title}</p>
        </TextContainer>
      </a>
    </Container>
  )
}