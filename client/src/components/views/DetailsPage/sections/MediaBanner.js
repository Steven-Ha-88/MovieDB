import React, { useEffect, useState } from "react";
import { API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "./../../../Config";
import FavouriteButton from "./Favourite";
import ReactModal from "react-modal";

import {
  Wrapper,
  Container,
  MediaCover,
  MediaDetails,
  ImageWrapper,
  Overview,
} from "./styles";

function ImageBanner(props) {
  const { media, image } = props;

  const [isOpen, setOpen] = useState(false);

  const [trailerId, setTrailerId] = useState([]);

  useEffect(() => {
    const endpointMovie = `https://api.themoviedb.org/3/movie/${props.media.id}/videos?api_key=${API_KEY}&language=en-US`;
    const endpointTv = `https://api.themoviedb.org/3/tv/${props.media.id}/videos?api_key=${API_KEY}&language=en-US`;
    if (props.type === "/movies/:Id") {
      fetchTrailers(endpointMovie);
    } else {
      fetchTrailers(endpointTv);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTrailers = (endpoint) => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        setTrailerId(trailerSelect(res.results));
      })
      .catch((err) => console.log(err));
  };

  const trailerSelect = (videos) => {
    const trailer = videos.filter((items) => items.type === "Trailer");
    return trailer;
  };

  function openModal() {
    setOpen(true);
  }

  const trailerButton = () => {
    const button = !trailerId.length ? null : (
      <div style={{ cursor: "pointer" }} onClick={openModal}>
        <div
          style={{
            display: "inline-block",
            fontSize: "1.5rem",
            color: "#03a9f4",
          }}>
          <i className='far fa-play-circle'></i>
        </div>
        <div style={{ display: "inline-block", marginLeft: "10px" }}>
          <p
            style={{
              color: "white",
              fontSize: "12px",
              position: "relative",
              bottom: "3px",
            }}>
            Trailer
          </p>
        </div>
      </div>
    );

    return button;
  };

  return (
    <Container image={image}>
      <Wrapper>
        <MediaCover>
          <ImageWrapper>
            <img
              alt='Backdrop images of film'
              style={{ width: "100%", height: "100%", borderRadius: "9px" }}
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${media.poster_path}`}
            />
          </ImageWrapper>
        </MediaCover>
        <MediaDetails>
          <div style={{ width: "100%", color: "white" }}>
            <h1 style={{ marginBottom: "0px", color: "white" }}>
              {media.original_name ? media.original_name : media.original_title}
            </h1>
            <div style={{ marginBottom: "20px", fontSize: "10px" }}>
              {media.release_date ? media.release_date : media.first_air_date}
              {media.genres &&
                media.genres.map((item, index) => {
                  return <span key={item.id}>{` • ${item.name} `}</span>;
                })}
              • {media.runtime ? media.runtime : media.number_of_seasons}
              {media.runtime ? " mins " : " Seasons "}
              •
              <FavouriteButton
                userId={localStorage.getItem("userId")}
                mediaId={media.id}
                mediaInfo={media}
              />
            </div>
            {trailerButton()}
            <h6 style={{ color: "white" }}>
              {media.vote_average}
              <i style={{ color: "#ffff4c" }} className='fas fa-star'></i>
            </h6>
            <p>
              <i>{media.tagline}</i>
            </p>
            <Overview>{media.overview}</Overview>
            <a style={{ fontSize: "1rem" }} href={media.homepage}>
              Watch Now!
            </a>
          </div>
        </MediaDetails>
      </Wrapper>
      <ReactModal
        isOpen={isOpen}
        contentLabel='onRequestClose Example'
        onRequestClose={() => setOpen(false)}
        className='Modal'
        overlayClassName='Overlay'>
        trailerId &&{" "}
        <iframe
          allowfullscreen='allowfullscreen'
          mozallowfullscreen='mozallowfullscreen'
          msallowfullscreen='msallowfullscreen'
          oallowfullscreen='oallowfullscreen'
          webkitallowfullscreen='webkitallowfullscreen'
          style={{ borderWidth: "0px" }}
          width='100%'
          height='100%'
          title='trailer'
          src={`https://www.youtube.com/embed/${
            trailerId[0] && trailerId[0].key
          }`}></iframe>
        <span className='remove-modal' onClick={() => setOpen(false)}>
          <b>X</b>
        </span>
      </ReactModal>
    </Container>
  );
}

export default ImageBanner;
