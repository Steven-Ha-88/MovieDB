import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from './../../Config';
import ImageBanner from './sections/ImageBanner';
import { MoviesScroll } from './styles';
import { FilmCard } from './sections/FilmCard';
import { LoadingContainer } from './../DetailsPage/sections/styles';


function LandingPage() {
    
    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [Loading, setLoading] = useState(true)
    const [CurrentPage, setCurrentPage] = useState(0)
    const [Tv, setTv] = useState([])

    
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
       
        fetchMoviesAndTv(endpoint)
    }, [])
        
    const fetchMoviesAndTv = (endpoint) => {
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                console.log("movies:", res)
                // console.log('Movies',...Movies)
                // console.log('res',...res.results)
                setMovies([...Movies, ...res.results])
                setMainMovieImage(MainMovieImage || res.results[res.results.length-1])
                setCurrentPage(res.page)

                const endpoint_tv = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;

                fetch(endpoint_tv)
                    .then(res => res.json())
                    .then(res => {
                        console.log("TV:", res)
                        setTv([...Tv, ...res.results])
                    }, setLoading(false))
                    .catch(error => console.error('Error:', error)
            )
            })
            .catch(error => console.error('Error:', error)
            )
    }

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
                {MainMovieImage && <ImageBanner 
                        image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${MainMovieImage.backdrop_path}`}
                        title={MainMovieImage.original_title}
                        text={MainMovieImage.overview}
                        id={MainMovieImage.id}/>
                }
                {/* Latest Movies */}
                <div style={{backgroundColor: "black"}}>
                    <h5 style={{ padding:"20px 0 0 15px", color: "white"}}>Latest Movies</h5>
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
                                />
                            </React.Fragment>
                        ))}
                    </MoviesScroll>
                </div>
                {/* Latest Tv Series */}
                <div style={{backgroundColor: "black"}}>
                    <h5 style={{ padding:"20px 0 0 15px", color: "white"}}>Latest TV Series</h5>
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
