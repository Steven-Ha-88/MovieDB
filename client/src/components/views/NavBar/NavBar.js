import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from './../../Config';
import RightMenu from './Sections/RightMenu';
import logo from './../../../Images/logo2.png';
import styled from 'styled-components';
import { Nav, ToggleButton, SearchList, Card, CardText, Input } from "./styles";
import history from './../../history';
import FilmIcon from './../../../Images/film_icon.png';
import PersonIcon from './../../../Images/cast.png'
import { link } from './../SearchList/index';


const Img = styled.img`
vertical-align: middle;
    border-style: none;
    width: 100%;
    color: green;
`;

const NavBar = props => {
  const [visible, setVisible] = useState(false)
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);


    useEffect(() => {
      let searchURL = `${API_URL}search/multi?api_key=${API_KEY}&query=${search}&language=en-US`;
  
      fetch(searchURL)
      .then(res => res.json())
      .then(res => {
        if(!search || !res.results.length) {
          setToggle(false)
        } else {
          setList(res.results);
          setToggle(true);
        }
      });
      console.log("your list", list);
  
    },[search])
  


  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  const useTransparentHook = height => {
    const [isTransparent, setTransparent] = useState(true);
    useEffect(() => {
      function onScroll() {
        if (window.pageYOffset > height) {
          setTransparent(false);
          return;
        }
        setTransparent(true);
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [height]);
    return isTransparent;
  };  

  const handleSubmit = e => {
    e.preventDefault();
    console.log(search);
    if(!search) {
      alert("Please enter a film");
    }
    else {
      history.push(`/search/${search}`);
    }
    setSearch("");
    }

  const ListItem = ({item, image}) => {
    return (
      <Card>
                  <div>
                    <a href={link(item.media_type, item.id)}>
                        <img src={image} width="30" alt="cover" />
                    </a>
                  </div>
                  <CardText>
                    <a href={link(item.media_type, item.id)}>
                      <p style={{fontSize: "10px", marginBottom: "0px", color: "white"}}>{item.title ? item.title : item.name }</p>
                    </a>
                  </CardText>
      </Card>
    )
  }

  const renderList = () => {
    if(toggle) {
      return (
        <SearchList>
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
          })
           }
        </SearchList> 
      );
    } return null
  }


  // DD293F

  const isTransparent = useTransparentHook(80);
  return (
    <Nav path={props.screen} isTransparent={isTransparent} className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="bebas-neue-font" border="0"width="80" />
        </a>
        <form style={{marginRight: "10px"}}onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
                <Input value={search} placeholder="Search" onChange={ (e) => setSearch(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                {renderList()}
          </form>
        <ToggleButton className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </ToggleButton>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul style={{color: "white"}} className="navbar-nav mr-auto">
            <li className="nav-item">
              <a style={{color: "rgb(255, 255, 255)", fontSize: "12px"}}  className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a style={{color: "rgb(255, 255, 255)", fontSize: "12px"}}  className="nav-link" href="/favourites">Watchlist</a>
            </li>
            <li className="nav-item">
              <a style={{color: "rgb(255, 255, 255)", fontSize: "12px"}}  className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
  
          
        
          <div style={{ marginLeft: "10px"}}>
            <RightMenu />
          </div>
        </div>
    </Nav>
  )
}

export default NavBar