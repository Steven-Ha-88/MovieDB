import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from './../../Config';


export const DetailPage = props => {
  // console.log("props:", props);

    const movieId = props.match.params.movieId
    const [Movie, setMovie] = useState([])
    const [Casts, setCasts] = useState([])
    const [LoadingForMovie, setLoadingForMovie] = useState(true)
    const [LoadingForCasts, setLoadingForCasts] = useState(true)

  useEffect(() => {
    let endpointForMovieInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    fetchDetailInfo(endpointForMovieInfo)
  },[])

  const fetchDetailInfo = (endpoint) => {

    fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            console.log("result", result)
            setMovie(result)
            setLoadingForMovie(false)

            let endpointForCasts = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            fetch(endpointForCasts)
                .then(result => result.json())
                .then(result => {
                    console.log(result)
                    setCasts(result.cast)
                })

            setLoadingForCasts(false)
        })
        .catch(error => console.error('Error:', error)
        )
}
  
  return (
    <div>
      SUP BRO
    </div>
  );
}