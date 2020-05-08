import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE } from './../../Config';
import ImageBanner from './sections/ImageBanner';


function LandingPage() {
    
    const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [Loading, setLoading] = useState(true)
    const [CurrentPage, setCurrentPage] = useState(0)
    
            useEffect(() => {
                const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
                fetchMovies(endpoint)
            }, [])
        
            const fetchMovies = (endpoint) => {
                fetch(endpoint)
                    .then(result => result.json())
                    .then(result => {
                        // console.log(result)
                        // console.log('Movies',...Movies)
                        // console.log('result',...result.results)
                        setMovies([...Movies, ...result.results])
                        setMainMovieImage(MainMovieImage || result.results[4])
                        setCurrentPage(result.page)
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
            </>
        )
    }

    export default LandingPage
