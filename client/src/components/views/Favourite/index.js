import React, {useEffect, useState} from 'react';
import { WatchlistContainer, LoadingContainer } from './style';
import axios from 'axios';
import { IMAGE_BASE_URL, IMAGE_SIZE } from './../../Config';
import WatchList from './MediaBanner';
import { useSelector } from 'react-redux';

const UserFavourites = props => {

  const user = useSelector(state => state.user)

  const [favouritesMedia, setFavouriteMedia] = useState([]);
  const [Loading, setLoading] = useState(true);

  const variables = {
    userFrom: localStorage.getItem('userId')
  }
  
  const { path } = props;


  useEffect(() => {
    fetchMedia();
    path(true);

    
    
  },[])

  const fetchMedia = () => {
    axios.post('/api/favourite/getFavouriteMedia', variables)
    .then(response => {
        if(!response.data.favourites.length) {
          setFavouriteMedia(null);
        }
        else if (response.data.success) {
            setFavouriteMedia(response.data.favourites)
        } else {
            alert('Failed to get favorited videos')
        }
    })
    setLoading(false);
  }

  const handleRemove = (mediaId, userFrom) => {

    const variables = {
        mediaId: mediaId,
        userFrom: userFrom,
    }

    axios.post('/api/favourite/removeFromFavourite', variables)
        .then(response => {
            if (response.data.success) {
                fetchMedia()
            } else {
                alert('Failed to Remove From Favourite')
            }
        })
}

  console.log("props", props);

  const renderTableBody = favouritesMedia && favouritesMedia.map((media,index) => {
    return <WatchList  key={media.mediaId} remove={handleRemove} media={media} image={`${IMAGE_BASE_URL}${IMAGE_SIZE}/${media.mediaBackdrop}`}/>
  })

  const renderWishlist = () => {
    if(Loading) {
      return (
        <LoadingContainer>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
        </LoadingContainer>
      )
    } else if (!Loading && favouritesMedia === null) {
      return (
        <WatchlistContainer>
            <div >
              <h1 style={{color: "grey"}}>Your Watchlist</h1>
            </div>
            <div style={{marginTop: "40px", color:"grey"}}>
              <h5 style={{color: "grey"}}>Get started! Add items to your list by searching for your favourite show</h5>
            </div>
          </WatchlistContainer>
      )
    }
      return renderTableBody
}

  return (
    <div>
        {user.userData && !user.userData.isAuth ? props.history.push("/login") : renderWishlist()}
    </div>
  );
}

export default UserFavourites;