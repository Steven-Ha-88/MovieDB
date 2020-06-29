import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from './../../Config';
import { Container } from './styles';
import FilmIcon from './../../../Images/film_icon.png';
import PersonIcon from './../../../Images/cast.png'

export const link = (mediatype, id) => {
  switch (mediatype) {
    case "movie":
      return `/movies/${id}`
    case "tv":
      return `/tv/${id}`
    default:
      return `/people/${id}`
  }

}
const SearchList = props => {
  const { path } = props;
  const term = props.match.params.query;

  const [list, setList] = useState([]);

  useEffect(() => {
    path(true);
    let search = `${API_URL}search/multi?api_key=${API_KEY}&query=${term}&language=en-US`;

    window.scrollTo(0, 0);

    fetch(search)
    .then(res => res.json())
    .then(res => setList(!res.results.length ? null : res.results));
  },[term]);


  const ListItem = ({ item, image }) => {
    return (
      <Container>
          <div>
            <a href={link(item.media_type, item.id)}>
                <img src={image} width="100" alt="cover" />
            </a>
          </div>
          <div style={{display: "flex", alignItems: "center", paddingLeft: "10px"}}>
            <a href={link(item.media_type, item.id)}>
              <h4>{item.title ? item.title : item.name }</h4>
            </a>
          </div>
      </Container>
    )
  }

  function renderList() {
    return (
        <div style={{ display: "flex", flexDirection:"column"}}>
            {list && list.map(item => {
                if(item.poster_path || item.profile_path) {
                  return (
                    <ListItem 
                      key={item.id} 
                      item={item}
                      image={item.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${item.poster_path}` : `${IMAGE_BASE_URL}${POSTER_SIZE}/${item.profile_path}`}  />
                  )
                } else if(item.media_type === 'person' && item.profile_path == null) {
                      return (
                      <ListItem 
                          key={item.id} 
                          item={item}
                          image={PersonIcon}  />
                    )
                  } return <ListItem 
                  key={item.id} 
                  item={item}
                  image={FilmIcon}  />
                } 
                    )}
        </div> 
    );
  }
  console.log("term", list);

  return (
    <div style={{padding: "20px"}}>
      <h2>{`Results for '${term}'`}</h2>
      {!list ? "Sorry, no matching results" :
          renderList()
      }
    </div>
  );
}

export default SearchList;