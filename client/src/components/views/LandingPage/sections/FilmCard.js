import React from 'react';
import { Container, TextContainer } from './styles';
import cast from './../../../../Images/cast.png';

export const FilmCard = props => {
  return (
    <Container>
      <a href={props.movieId ? `/${props.type}/${props.movieId}` : null}>
        <div>
          <img alt="cast" style={{width: "100%", borderRadius: "5px"}} src={props.image ? props.image : cast}/>
        </div>
        <TextContainer disable={props.disable} color={props.color}>
         <p>{props.title}</p>
        </TextContainer>
      </a>
    </Container>
  )
}