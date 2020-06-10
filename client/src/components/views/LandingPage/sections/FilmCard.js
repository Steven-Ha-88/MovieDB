import React from 'react';
import { Container } from './styles';
import cast from './../../../../Images/cast.png';

export const FilmCard = props => {
  return (
    <Container>
      <a href={props.movieId ? `/${props.type}/${props.movieId}` : null}>
        <div>
          <img alt="cast" style={{width: "100%", borderRadius: "5px"}} src={props.image ? props.image : cast}/>
        </div>
        <div style={{ color: `${props.color}`}}>
         <p>{props.title}</p>
        </div>
      </a>
    </Container>
  )
}