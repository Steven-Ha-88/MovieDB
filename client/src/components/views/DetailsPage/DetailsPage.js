import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from './../../Config';
import MediaBanner from './sections/MediaBanner';
import { MoviesScroll } from './../LandingPage/LandingPage';
import { FilmCard } from './../LandingPage/sections/FilmCard'; 
import { LoadingContainer } from './sections/styles';
import axios from 'axios';

import Comments from './sections/Comments.js';
import LikeDislikes from './sections/LikeDislikes.js';


export const DetailPage = props => {
  // console.log("props:", props);

    const movieId = props.match.params.Id
    const [Media, setMedia] = useState([])
    const [Casts, setCasts] = useState([])
    const [Loading, setLoading] = useState(true)
    const [CommentLists, setCommentLists] = useState([])
    const movieVariable = {
      movieId: movieId
  }

  useEffect(() => {
    let endpointForMovieInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    let endpointForTvInfo = `${API_URL}tv/${movieId}?api_key=${API_KEY}&language=en-US`;

    window.scrollTo(0, 0);

    if(props.match.path === "/movies/:Id") {
      fetchDetailInfo(endpointForMovieInfo)
    } else {
      fetchDetailInfo(endpointForTvInfo)
    }

     axios.post('/api/comment/getComments', movieVariable)
            .then(response => {
                // console.log(response)
                if (response.data.success) {
                    // console.log('response.data.comments', response.data.comments)
                    setCommentLists(response.data.comments)
                } else {
                    alert('Failed to get comments Info')
                }
            })
  },[])

  const fetchDetailInfo = (endpoint) => {

    fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            setMedia(result)

            let endpointForMovieCasts = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            let endpointForTvCasts = `${API_URL}tv/${movieId}/credits?api_key=${API_KEY}`;
            if(props.match.path === "/movies/:Id") {
              fetch(endpointForMovieCasts)
                .then(result => result.json())
                .then(result => {
                    
                    setCasts(result.cast)
                })
            } else {
              fetch(endpointForTvCasts)
                .then(result => result.json())
                .then(result => {
                    
                    setCasts(result.cast)
                })
            }
            setLoading(false)
        })
        .catch(error => console.error('Error:', error)
        )
}

const updateComment = (newComment) => {
  setCommentLists(CommentLists.concat(newComment))
}


const renderList = () => {
  if(Loading) {
    return (
      <LoadingContainer>
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
      </LoadingContainer>
    )
  } else {
    return (
      <div>
      <MediaBanner type={props.match.path} media={Media} image={`${IMAGE_BASE_URL}${IMAGE_SIZE}/${Media.backdrop_path}`}/>
        {/* Body */}
        <div>
          {/* Cast Section */}
          <h5 style={{margin: "20px 0 0 15px"}}>The Cast</h5>
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

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LikeDislikes video videoId={movieId} userId={localStorage.getItem('userId')} />
        </div>

          {/* Comments */}
        <Comments movieTitle={Media.original_title} CommentLists={CommentLists} postId={movieId} refreshFunction={updateComment} />
    </div>
    )
  }
}
  
  return (
    <>
      {renderList()}
    </>
  );
}