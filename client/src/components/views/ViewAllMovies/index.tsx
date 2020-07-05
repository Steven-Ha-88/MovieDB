import React, { useEffect, useState, useRef } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../Config";
import { LoadingContainer } from "../CastingPage/style";

interface Props {
  path: (isTransparent: boolean) => boolean;
}

const ViewAllMovies: React.FC<Props> = ({ path }) => {
  const buttonRef = useRef(null);

  const [Movies, setMovies] = useState<Array<any>>([]);
  const [Loading, setLoading] = useState<boolean>(true);
  const [CurrentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    path(true);
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  // }, [])

  const fetchMovies = (endpoint: string) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        // console.log(result)
        // console.log('Movies',...Movies)
        // console.log('result',...result.results)
        setMovies([...Movies, ...result.results]);
        setCurrentPage(result.page);
        setLoading(false);
      })
      .catch((error) => console.error("Error:", error));
  };

  const loadMoreItems = () => {
    let endpoint = "";
    setLoading(true);
    console.log("CurrentPage", CurrentPage);
    endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      CurrentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  // const handleScroll = () => {
  //     const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  //     const body = document.body;
  //     const html = document.documentElement;
  //     const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  //     const windowBottom = windowHeight + window.pageYOffset;
  //     if (windowBottom >= docHeight - 1) {

  //         // loadMoreItems()
  //         console.log('clicked')
  //         buttonRef.current.click();

  //     }
  // }
  return (
    <div style={{}}>
      <div
        style={{
          width: "85%",
          margin: "1rem auto",
        }}>
        <h3> Movies by popular </h3> <hr />
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            width: "auto",
          }}>
          {Movies &&
            Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <a href={`/movies/${movie.id}`}>
                  <div
                    style={{
                      margin: "15px",
                      cursor: "pointer",
                    }}
                    key={movie.id}>
                    <img
                      width='100'
                      alt='movie poster'
                      src={
                        movie.poster_path
                          ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                          : undefined
                      }
                    />
                  </div>
                </a>
              </React.Fragment>
            ))}
        </div>
        {Loading && (
          <LoadingContainer>
            <div className='spinner-border' role='status'>
              <span className='sr-only'> Loading... </span>
            </div>
          </LoadingContainer>
        )}
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          <button ref={buttonRef} className='loadMore' onClick={loadMoreItems}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewAllMovies;
