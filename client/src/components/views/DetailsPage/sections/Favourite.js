import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Favourite(props) {


  const [favouriteNumber, setFavouriteNumber] = useState(0)
  const [favourite, setFavourite] = useState(false)

  const variable = {
    userFrom: props.userFrom, 
    mediaId: props.mediaId, 
    mediaTitle: props.mediaInfo.title, 
    mediaImage: props.mediaInfo.backdrop_path, 
    mediaRunTime: props.mediaInfo.runtime 
  }

  useEffect(() => {

    axios.post('/api/favourite/favouriteNumber', variable)
      .then(response => {
          if(response.data.success) {
            setFavouriteNumber(response.data.favouriteNumber)
          } else {
            alert('failed to get favouriteNumber')
          }
      })
    axios.post('/api/favourite/favourited', variable)
      .then(response => {
          if(response.data.success) {
            setFavourite(response.data.favourited)
          } else {
            alert('failed to get favouriteInfo')
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
        <span onClick={handleFavouriteClick} style={{color: "#1890ff", cursor: "pointer"}}> {favourite ? "Remove from Favourites" : "Add to Favourites"} {favouriteNumber}</span>
      </>
  );
}

export default Favourite;