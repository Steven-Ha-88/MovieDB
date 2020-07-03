import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "./../../Config";

import {
  Wrapper,
  Container,
  MediaCover,
  MediaDetails,
  ImageWrapper,
  Overview,
  Remove,
} from "./style";

function ImageBanner(props) {
  const { media, image, remove } = props;

  return (
    <Container image={image}>
      <Remove onClick={() => remove(media.mediaId, media.userFrom)}>
        <b>X</b>
      </Remove>
      <Wrapper>
        <MediaCover>
          <ImageWrapper>
            <img
              alt='Backdrop images of film'
              style={{ width: "100%", height: "100%", borderRadius: "9px" }}
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${media.mediaImage}`}
            />
          </ImageWrapper>
        </MediaCover>
        <MediaDetails>
          <div style={{ width: "100%", color: "white" }}>
            <a
              href={
                media.mediaSeasons
                  ? `/tv/${media.mediaId}`
                  : `/movies/${media.mediaId}`
              }>
              <h1 style={{ marginBottom: "0px", color: "white" }}>
                {media.mediaTitle}
              </h1>
            </a>
            <div style={{ marginBottom: "20px", fontSize: "10px" }}>
              {media.mediaReleaseDate}
              {media.mediaGenres &&
                media.mediaGenres.map((item, index) => {
                  return <span key={item.id}>{` • ${item.name} `}</span>;
                })}
              • {media.mediaRunTime} mins
              {media.mediaSeasons
                ? " • " + media.mediaSeasons + " Seasons"
                : null}
            </div>
            <h6 style={{ color: "white" }}>Rating: {media.mediaRating}</h6>
            <p>
              <i>{media.mediaTagline}</i>
            </p>
            <Overview>{media.mediaDescription}</Overview>
            <a style={{ fontSize: "1.5rem" }} href={media.mediaHomepage}>
              Watch Now!
            </a>
          </div>
        </MediaDetails>
      </Wrapper>
    </Container>
  );
}

export default ImageBanner;
