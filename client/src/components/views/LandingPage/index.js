import React, { useEffect, useState } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
  POSTER_SIZE,
} from "../../Config";
import ImageBanner from "./sections/ImageBanner";
import styled from "styled-components";

import { FilmCard } from "./sections/FilmCard";
import "./styles.css";
import { LoadingContainer } from "../DetailsPage/sections/styles";

export const MoviesScroll = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const LandingPage = (props) => {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [trending, setTrend] = useState([]);
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);

  const { path } = props;

  useEffect(() => {
    const popular = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const popular_tv = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const trend = `${API_URL}trending/all/day?api_key=${API_KEY}&language=en-US&page=1`;
    const latest_movies = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

    window.scrollTo(0, 0);
    path(false);

    let mounted = true;
    fetch(trend)
      .then((res) => res.json())
      .then((res) => {
        if (mounted) {
          setTrend(res.results);
        }
      });

    fetch(latest_movies)
      .then((res) => res.json())
      .then((res) => {
        if (mounted) {
          setLatest(res.results);
        }
      });

    fetch(popular)
      .then((res) => res.json())
      .then((res) => {
        // console.log('Movies',...Movies)
        // console.log('res',...res.results)
        if (mounted) {
          setMovies([...movies, ...res.results]);
          // setCurrentPage(res.page)
        }

        fetch(popular_tv)
          .then((res) => res.json())
          .then((res) => {
            if (mounted) {
              setTv([...tv, ...res.results]);
              setLoading(false);
            }
          })
          .catch((error) => console.error("Error:", error));
      })
      .catch((error) => console.error("Error:", error));
    return function cleanup() {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLanding = () => {
    if (loading || !latest.length) {
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
          <div
            id='carouselExampleControls'
            className='carousel slide'
            data-ride='carousel'
            data-interval='2500'>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <ImageBanner
                  image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${latest[11].backdrop_path}`}
                  movies={latest[11]}
                />
              </div>
              <div className='carousel-item'>
                <ImageBanner
                  image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${latest[5].backdrop_path}`}
                  movies={latest[5]}
                />
              </div>
              <div className='carousel-item'>
                <ImageBanner
                  image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${latest[12].backdrop_path}`}
                  movies={latest[12]}
                />
              </div>
            </div>
            <a
              className='carousel-control-prev carosel-btn-wrapper'
              href='#carouselExampleControls'
              role='button'
              data-slide='prev'>
              <span
                className='carosel-btn carousel-control-prev-icon'
                aria-hidden='true'></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className=' carousel-control-next carosel-btn-wrapper'
              href='#carouselExampleControls'
              role='button'
              data-slide='next'>
              <span
                className='carosel-btn carousel-control-next-icon'
                aria-hidden='true'></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>

          {/* Latest */}
          <div style={{ backgroundColor: "black", paddingTop: "20px" }}>
            <h5 className='heading'>In Cinemas</h5>
            <MoviesScroll>
              {latest &&
                latest.map((movie, index) => (
                  <React.Fragment key={index}>
                    <FilmCard
                      image={
                        movie.poster_path
                          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                          : null
                      }
                      movieId={movie.id}
                      title={movie.original_title}
                      type='movie'
                      color='white'
                      disable
                    />
                  </React.Fragment>
                ))}
            </MoviesScroll>
          </div>

          {/* Trending */}
          <div style={{ backgroundColor: "black", paddingTop: "20px" }}>
            <h5 className='heading'>Trending</h5>
            <MoviesScroll>
              {trending &&
                trending.map((movie, index) => (
                  <React.Fragment key={index}>
                    <FilmCard
                      image={
                        movie.poster_path
                          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                          : null
                      }
                      movieId={movie.id}
                      title={movie.original_title}
                      type={movie.media_type}
                      color='white'
                      disable
                    />
                  </React.Fragment>
                ))}
            </MoviesScroll>
          </div>

          {/* Latest Movies */}
          <div style={{ backgroundColor: "black", paddingTop: "10px" }}>
            <a href='/popular_movies'>
              <h5 className='heading'>Popular Movies</h5>
            </a>
            <MoviesScroll>
              {movies &&
                movies.map((movie, index) => (
                  <React.Fragment key={index}>
                    <FilmCard
                      image={
                        movie.poster_path
                          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                          : null
                      }
                      movieId={movie.id}
                      title={movie.original_title}
                      type='movie'
                      color='white'
                      disable
                    />
                  </React.Fragment>
                ))}
            </MoviesScroll>
          </div>

          {/* Latest Tv Series */}
          <div style={{ backgroundColor: "black", paddingTop: "10px" }}>
            <h5 className='heading'>Popular TV Series</h5>
            <MoviesScroll>
              {tv &&
                tv.map((tv, index) => (
                  <React.Fragment key={index}>
                    <FilmCard
                      image={
                        tv.poster_path
                          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${tv.poster_path}`
                          : null
                      }
                      movieId={tv.id}
                      title={tv.name}
                      type='tv'
                      color='white'
                      disable
                    />
                  </React.Fragment>
                ))}
            </MoviesScroll>
          </div>
        </>
      );
    }
  };

  return <>{renderLanding()}</>;
};

export default LandingPage;
