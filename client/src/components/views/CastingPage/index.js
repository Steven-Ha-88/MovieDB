import React, { useEffect, useState } from "react";
import {
  Overview,
  LoadingContainer,
  Wrapper,
  Container,
  MediaCover,
  MediaDetails,
  ImageWrapper,
} from "./style";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../Config";
import { MoviesScroll } from "../LandingPage/index";
import { FilmCard } from "../LandingPage/sections/FilmCard";

const CastingPage = (props) => {
  const id = props.match.params.id;
  const [person, setPerson] = useState([]);
  const [credits, setCredits] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${API_URL}person/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images,combined_credits`
    )
      .then((res) => res.json())
      .then((res) => {
        setPerson(res);
        setCredits(res.combined_credits.cast.slice(0, 20));
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("State:", person, credits);

  const renderList = () => {
    if (Loading) {
      return (
        <LoadingContainer>
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </LoadingContainer>
      );
    } else {
      return (
        <>
          <Container>
            <Wrapper>
              <MediaCover>
                <ImageWrapper>
                  <img
                    alt='Backdrop images of film'
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "9px",
                    }}
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${person.profile_path}`}
                  />
                </ImageWrapper>
              </MediaCover>
              <MediaDetails>
                <div style={{ width: "100%", color: "white" }}>
                  <h1 style={{ marginBottom: "0px", color: "white" }}>
                    {person.name}
                  </h1>
                  <div style={{ marginBottom: "20px", fontSize: "10px" }}>
                    {person.birthday}
                    {` • ${person.place_of_birth}`}
                  </div>

                  <Overview>{person.biography}</Overview>
                </div>
              </MediaDetails>
            </Wrapper>
          </Container>

          {/* Cast Section */}
          <div>
            <h5 style={{ margin: "20px 0 0 15px" }}>Known For</h5>
            <MoviesScroll>
              {credits &&
                credits.map((media, index) => (
                  <React.Fragment key={index}>
                    <FilmCard
                      image={
                        media.poster_path === null
                          ? null
                          : `${IMAGE_BASE_URL}${POSTER_SIZE}/${media.poster_path}`
                      }
                      title={media.title}
                      movieId={media.id}
                      type={media.media_type}
                      film
                    />
                  </React.Fragment>
                ))}
            </MoviesScroll>
          </div>
        </>
      );
    }
  };

  return <>{renderList()}</>;
};

export default CastingPage;
