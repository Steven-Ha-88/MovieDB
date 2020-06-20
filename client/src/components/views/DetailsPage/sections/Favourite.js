import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Favourite(props) {


  const [favouriteNumber, setFavouriteNumber] = useState(0)
  const [favourite, setFavourite] = useState(false)

  const variable = {
    userFrom: props.userId, 
    mediaId: props.mediaId, 
    mediaTitle: props.mediaInfo.title ? props.mediaInfo.title : props.mediaInfo.original_name, 
    mediaImage: props.mediaInfo.poster_path, 
    mediaRunTime: props.mediaInfo.runtime ? props.mediaInfo.runtime : props.mediaInfo.episode_run_time[0],
    mediaSeasons: props.mediaInfo.number_of_seasons ? props.mediaInfo.number_of_seasons : null,
    mediaHomepage: props.mediaInfo.homepage,
    mediaBackdrop: props.mediaInfo.backdrop_path,
    mediaReleaseDate: props.mediaInfo.release_date ? props.mediaInfo.release_date : props.mediaInfo.first_air_date,
    mediaGenres: props.mediaInfo.genres,
    mediaRating: props.mediaInfo.vote_average,
    mediaTagline: props.mediaInfo.tagline,
    mediaDescription: props.mediaInfo.overview
  }

  useEffect(() => {
    // console.log("user_details", variable)

    axios.post('/api/favourite/favouriteNumber', variable)
      .then(response => {
          if(response.data.success) {
            setFavouriteNumber(response.data.favouriteNumber)
          } else {
            console.log('failed to get favouriteNumber')
          }
      })
    axios.post('/api/favourite/favourited', variable)
      .then(response => {
          if(response.data.success) {
            setFavourite(response.data.favourited)
          } else {
            console.log('failed to get favouriteInfo')
          }
      })
  }, []);

  const handleFavouriteClick = () => {
      if(favourite) {
        axios.post('/api/favourite/removeFromFavourite', variable )
            .then(response => {
              if(response.data.success) {
                setFavouriteNumber(favouriteNumber - 1)
                setFavourite(!favourite)

              }else {
                alert('failed toremove to favourites')
              }
            })
      } else {
        // when not already added
        axios.post('/api/favourite/addToFavourite', variable )
            .then(response => {
              if(response.data.success) {
                setFavouriteNumber(favouriteNumber + 1)
                setFavourite(!favourite)

              }else {
                alert('failed to add to favourites')
              }
            })
      }
  }

  return (
      <>
        <span onClick={handleFavouriteClick} style={{color: "#1890ff", cursor: "pointer"}}> {favourite ? "Remove from Watchlist" : "Add to Watchlist"}</span>
      </>
  );
}

export default Favourite;