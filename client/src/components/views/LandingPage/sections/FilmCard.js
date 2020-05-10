import React from 'react';
import { Container } from './styles';

export const FilmCard = props => {
  return (
    <Container>
      <a href={`/movies/${props.movieId}`}>
        <div>
          <img style={{width: "100%", borderRadius: "5px"}} src={props.image}/>
        </div>
        <div className="title-wrapper">
         <p>{props.title}</p>
        </div>
      </a>
    </Container>
  )
}