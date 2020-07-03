import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
} from "./../../../Config";
import { ImageWrapper, Text, TextWrapper } from "./styles";
import { FilmCover } from "./styles";
import "./styles.css";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

function ImageBanner(props) {
  const [isOpen, setOpen] = useState(false);

  const [trailerId, setTrailerId] = useState([]);

  useEffect(() => {
    fetch(
      `${API_URL}movie/${props.movies.id}/videos?api_key=${API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => {
        setTrailerId(trailerSelect(res.results));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const trailerSelect = (videos) => {
    const trailer = videos.filter((items) => items.type === "Trailer");
    return trailer;
  };

  function openModal() {
    setOpen(true);
  }

  return (
    <ImageWrapper image={props.image}>
      <div>
        <TextWrapper>
          <FilmCover>
            <Link to={`/movies/${props.movies.id}`}>
              <img
                alt='Backdrop images of film'
                style={{ width: "100%", height: "100%" }}
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${props.movies.poster_path}`}
              />
            </Link>
          </FilmCover>
          <Text>
            <Link to={`/movies/${props.movies.id}`}>
              <div>
                <h4 style={{ color: "white" }} level={2}>
                  {" "}
                  {props.movies.original_title}{" "}
                </h4>
              </div>
            </Link>
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
                    fontSize: "1rem",
                    position: "relative",
                    bottom: "3px",
                  }}>
                  Watch the Trailer
                </p>
              </div>
            </div>
          </Text>
        </TextWrapper>
      </div>
      <ReactModal
        isOpen={isOpen}
        contentLabel='onRequestClose Example'
        onRequestClose={() => setOpen(false)}
        className='Modal'
        overlayClassName='Overlay'>
        trailerId &&{" "}
        <iframe
          allowFullScreen='allowfullscreen'
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
        }
        <span className='remove-modal' onClick={() => setOpen(false)}>
          <b>X</b>
        </span>
      </ReactModal>
    </ImageWrapper>
  );
}

export default ImageBanner;
