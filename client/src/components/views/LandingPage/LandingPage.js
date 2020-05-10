import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from './../../Config';
import ImageBanner from './sections/ImageBanner';
import { MoviesScroll } from './styles';
import { FilmCard } from './sections/FilmCard';


function LandingPage() {
    
    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [Loading, setLoading] = useState(true)
    const [CurrentPage, setCurrentPage] = useState(0)
    const [Tv, setTv] = useState([])

    
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        const endpoint_tv = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endpoint)
        fetchTv(endpoint_tv);
    }, [])
        
    const fetchMovies = (endpoint) => {
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                console.log("movies:", res)
                // console.log('Movies',...Movies)
                // console.log('res',...res.results)
                setMovies([...Movies, ...res.results])
                setMainMovieImage(MainMovieImage || res.results[7])
                setCurrentPage(res.page)
            }, setLoading(false))
            .catch(error => console.error('Error:', error)
            )
    }

    const fetchTv = (endpoint) => {
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                console.log("TV:", res)
                setTv([...Tv, ...res.results])
            }, setLoading(false))
            .catch(error => console.error('Error:', error)
            )
    }


    return (
        <>
            {MainMovieImage && <ImageBanner 
                    image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${MainMovieImage.backdrop_path}`}
                    title={MainMovieImage.original_title}
                    text={MainMovieImage.overview}/>}
            {/* Latest Films */}
            <div style={{padding: "0px 40px"}}>
                <h2 style={{margin: "20px 0 0 15px"}}>Latest Movies</h2>
                <MoviesScroll>
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <FilmCard
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                    : null}
                                movieId={movie.id}
                                title={movie.original_title}
                            />
                        </React.Fragment>
                    ))}
                </MoviesScroll>
            </div>
             {/* Latest TV Series */}
            <div style={{padding: "0px 40px"}}>
                <h2 style={{margin: "20px 0 0 15px"}}>Latest TV Series</h2>
                <MoviesScroll>
                    { Tv && Tv.map((tv, index) => (
                        <React.Fragment key={index}>
                            <FilmCard
                                image={tv.poster_path ?
                                    `${IMAGE_BASE_URL}${POSTER_SIZE}${tv.poster_path}`
                                    : null}
                                movieId={tv.id}
                                title={tv.name}
                            />
                        </React.Fragment>
                    ))}
                </MoviesScroll>
            </div>
        </>
        )
    }

    export default LandingPage
