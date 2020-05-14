import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from './../../Config';
import MediaBanner from './sections/MediaBanner';
import { MoviesScroll } from './../LandingPage/styles';
import { FilmCard } from './../LandingPage/sections/FilmCard'; 


export const DetailPage = props => {
  // console.log("props:", props);

    const Id = props.match.params.Id
    const [Media, setMedia] = useState([])
    const [Casts, setCasts] = useState([])
    const [LoadingForMovie, setLoadingForMovie] = useState(true)
    const [LoadingForCasts, setLoadingForCasts] = useState(true)

  useEffect(() => {
    let endpointForMovieInfo = `${API_URL}movie/${Id}?api_key=${API_KEY}&language=en-US`;
    let endpointForTvInfo = `${API_URL}tv/${Id}?api_key=${API_KEY}&language=en-US`;

    if(props.match.path === "/movies/:Id") {
      fetchDetailInfo(endpointForMovieInfo)
    } else {
      fetchDetailInfo(endpointForTvInfo)
    }

  },[])

  const fetchDetailInfo = (endpoint) => {

    fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            console.log("result", result)
            setMedia(result)
            setLoadingForMovie(false)

            let endpointForMovieCasts = `${API_URL}movie/${Id}/credits?api_key=${API_KEY}`;
            let endpointForTvCasts = `${API_URL}tv/${Id}/credits?api_key=${API_KEY}`;
            if(props.match.path === "/movies/:Id") {
              fetch(endpointForMovieCasts)
                .then(result => result.json())
                .then(result => {
                    console.log(result)
                    setCasts(result.cast)
                })
            } else {
              fetch(endpointForTvCasts)
                .then(result => result.json())
                .then(result => {
                    console.log(result)
                    setCasts(result.cast)
                })
            }
            setLoadingForCasts(false)
        })
        .catch(error => console.error('Error:', error)
        )
}
  
  return (
    <div>
      <MediaBanner  media={Media} image={`${IMAGE_BASE_URL}${IMAGE_SIZE}/${Media.backdrop_path}`}/>
      <div style={{padding: "0px 40px"}}>
                <h2 style={{margin: "20px 0 0 15px"}}>The Cast</h2>
                <MoviesScroll>
                    { Casts && Casts.map((cast, index) => (
                        <React.Fragment key={index}>
                            <FilmCard
                                image={cast.profile_path ?
                                    `${IMAGE_BASE_URL}${POSTER_SIZE}/${cast.profile_path}`
                                    : null}
                                title={cast.name}
                            />
                        </React.Fragment>
                    ))}
                </MoviesScroll>
            </div>
    </div>
  );
}