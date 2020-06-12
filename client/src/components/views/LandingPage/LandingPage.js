import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from './../../Config';
import ImageBanner from './sections/ImageBanner';
import styled from 'styled-components';

import { FilmCard } from './sections/FilmCard';
import './styles.css';
import { LoadingContainer } from './../DetailsPage/sections/styles';

export const MoviesScroll = styled.div`
display: flex;
flex-wrap: nowrap;
overflow-x: auto;
`;

const LandingPage = props => {
    
    const [Movies, setMovies] = useState([])
    const [Loading, setLoading] = useState(true)
    const [CurrentPage, setCurrentPage] = useState(0)
    const [Tv, setTv] = useState([])
    const { path } = props;

    
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
       
        path(false)

        let mounted = true
        fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            // console.log('Movies',...Movies)
            // console.log('res',...res.results)
            if (mounted) {
                setMovies([...Movies, ...res.results])
                setCurrentPage(res.page)
            }
            const endpoint_tv = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;

            fetch(endpoint_tv)
                .then(res => res.json())
                .then(res => {
                    if(mounted) {
                        setTv([...Tv, ...res.results])
                        setLoading(false)
                    }
                })
                .catch(error => console.error('Error:', error));
        
        })
        .catch(error => console.error('Error:', error)
        )
        return function cleanup() {
            mounted = false
        }
        
    }, [])

    const renderLanding = () => {

        if(Loading) {
            return(
                <LoadingContainer>
                  <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                  </div>
                </LoadingContainer>
            ); 
        } else {
            return (
            <>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="2500">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <ImageBanner 
                            image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${Movies[2].backdrop_path}`}
                            movies={Movies[2]} />
                        </div>
                        <div className="carousel-item">
                            <ImageBanner 
                                image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${Movies[Movies.length-5].backdrop_path}`}
                                movies={Movies[Movies.length-5]}/>
                        </div>
                        <div className="carousel-item">
                            <ImageBanner 
                                image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${Movies[0].backdrop_path}`}
                                movies={Movies[0]}/>
                        </div>
                    </div>
                    <a className="carousel-control-prev carosel-btn-wrapper" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carosel-btn carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className=" carousel-control-next carosel-btn-wrapper" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carosel-btn carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>  
           
                {/* Latest Movies */}
                <div style={{backgroundColor: "black"}}>
                    <h5 className="latest">Latest Movies</h5>
                    <MoviesScroll>
                        {Movies && Movies.map((movie, index) => (
                            <React.Fragment key={index}>
                                <FilmCard
                                    image={movie.poster_path ?
                                        `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                        : null}
                                    movieId={movie.id}
                                    title={movie.original_title}
                                    type="movies"
                                    color="white"
                                    disable
                                />
                            </React.Fragment>
                        ))}
                    </MoviesScroll>
                </div>
                {/* Latest Tv Series */}
                <div style={{backgroundColor: "black"}}>
                    <h5 className="latest">Latest TV Series</h5>
                    <MoviesScroll>
                        { Tv && Tv.map((tv, index) => (
                            <React.Fragment key={index}>
                                <FilmCard
                                    image={tv.poster_path ?
                                        `${IMAGE_BASE_URL}${POSTER_SIZE}${tv.poster_path}`
                                        : null}
                                    movieId={tv.id}
                                    title={tv.name}
                                    type="tv"
                                    color="white"
                                    disable
                                />
                            </React.Fragment>
                        ))}
                    </MoviesScroll>
                </div>
            </>
            );
        }
    }

    return (
        <>
            {renderLanding()}
        </>
        )
    }

    export default LandingPage
