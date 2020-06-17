import React from 'react';
import { Container, TextContainer } from './styles';
import cast from './../../../../Images/cast.png';
import { Link } from 'react-router-dom';

export const FilmCard = props => {
  const { movieId, type } = props;
  return (
    <Container>
      <Link to={`/${type}/${movieId}`}>
        <div>
          <img alt="cast" style={{width: "100%", borderRadius: "5px"}} src={props.image ? props.image : cast}/>
        </div>
        <TextContainer disable={props.disable} color={props.color}>
         <p>{props.title}</p>
        </TextContainer>
      </Link>
    </Container>
  )
}