import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from './../../Config';
import { Container } from './style';


const Trailers = props => {
  const id = props.match.params.id;
  
  const [trailerId, setTrailerId] = useState([]);

  const trailerSelect = (videos) => {
    const trailer = videos.filter(items => items.type === "Trailer");
    return trailer;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(res => {
          console.log("res", res)
          setTrailerId(trailerSelect(res.results));
          console.log("LOL", trailerId)
        })
        .catch(err => console.log(err))
  }, [])

  console.log("myTrailer", trailerId);
  return (
      <Container>{ 
        trailerId && <iframe width="60%" height="60%"
      src={`https://www.youtube.com/embed/${trailerId[0] && trailerId[0].key}`}>
      </iframe>}
      </Container>
  );

}

export default Trailers;