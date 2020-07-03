import React, { useState, useEffect } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "./../../Config";
import RightMenu from "./Sections/RightMenu";
import logo from "./../../../Images/logo2.png";
import {
  Nav,
  ToggleButton,
  SearchList,
  Card,
  CardText,
  CardImg,
  Input,
  ImgCover,
  Title,
  Text,
  Form,
} from "./styles";
import history from "./../../history";
import FilmIcon from "./../../../Images/film_icon.png";
import PersonIcon from "./../../../Images/cast.png";
import { link } from "./../SearchList/index";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  // const [visible, setVisible] = useState(false)
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    let searchURL = `${API_URL}search/multi?api_key=${API_KEY}&query=${search}&language=en-US`;

    if (search) {
      fetch(searchURL)
        .then((res) => res.json())
        .then((res) => {
          if (!search || !res.results.length) {
            setToggle(false);
          } else {
            setList(res.results);
            setToggle(true);
          }
        });
    }
    return setToggle(false);
  }, [search]);

  // const showDrawer = () => {
  //   setVisible(true)
  // };

  // const onClose = () => {
  //   setVisible(false)
  // };

  const useTransparentHook = (height) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      alert("Please enter a film");
    } else {
      history.push(`/search/${search}`);
    }
    setSearch("");
  };

  const ListItem = ({ item, image }) => {
    return (
      <>
        <a href={link(item.media_type, item.id)}>
          <Card>
            <CardImg>
              <ImgCover src={image} alt='cover' />
            </CardImg>
            <CardText>
              <Title>{item.title ? item.title : item.name}</Title>
              <Text>
                {item.release_date ? item.release_date.slice(0, 4) : null}
              </Text>
              <Text style={{ marginBottom: "0px" }}>
                {item.vote_average ? item.vote_average : null}
                {item.vote_average ? (
                  <i style={{ color: "#ffff4c" }} className='fas fa-star'></i>
                ) : null}
              </Text>
            </CardText>
          </Card>
        </a>
      </>
    );
  };

  const renderList = () => {
    if (toggle) {
      return (
        <SearchList>
          {list &&
            list.map((item) => {
              if (item.poster_path || item.profile_path) {
                return (
                  <ListItem
                    key={item.id}
                    item={item}
                    image={
                      item.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${item.poster_path}`
                        : `${IMAGE_BASE_URL}${POSTER_SIZE}/${item.profile_path}`
                    }
                  />
                );
              } else if (
                item.media_type === "person" &&
                item.profile_path == null
              ) {
                return (
                  <ListItem key={item.id} item={item} image={PersonIcon} />
                );
              }
              return <ListItem key={item.id} item={item} image={FilmIcon} />;
            })}
        </SearchList>
      );
    }
    return null;
  };

  // DD293F

  const isTransparent = useTransparentHook(80);
  return (
    <Nav
      path={props.screen}
      isTransparent={isTransparent}
      className='navbar navbar-expand-lg navbar-dark'>
      <Link className='navbar-brand' to='/'>
        <img src={logo} alt='bebas-neue-font' border='0' width='80' />
      </Link>
      <div>
        <Form
          mobile='none'
          onSubmit={handleSubmit}
          className='form-inline my-lg-0'>
          {/* <SearchIcon>
                     <Icon className="fas fa-search"></Icon>
                  </SearchIcon> */}
          <Input
            value={search}
            placeholder='Search...'
            onChange={(e) => setSearch(e.target.value)}
            type='search'
            aria-label='Search'
          />
          {renderList()}
        </Form>
        <ToggleButton
          onClick={() => setToggle(false)}
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </ToggleButton>
      </div>
      <div className='collapse navbar-collapse' id='navbarText'>
        <ul style={{ color: "white" }} className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link
              style={{ color: "rgb(255, 255, 255)", fontSize: "12px" }}
              className='nav-link'
              to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{ color: "rgb(255, 255, 255)", fontSize: "12px" }}
              className='nav-link'
              to='/favourites'>
              Watchlist
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{ color: "rgb(255, 255, 255)", fontSize: "12px" }}
              className='nav-link'
              to='#'>
              Pricing
            </Link>
          </li>
        </ul>

        <Form
          web='none'
          onSubmit={handleSubmit}
          className='form-inline my-lg-0'>
          {/* <SearchIcon>
                     <Icon className="fas fa-search"></Icon>
                  </SearchIcon> */}
          <Input
            value={search}
            placeholder='Search...'
            onChange={(e) => setSearch(e.target.value)}
            type='search'
            aria-label='Search'
          />
          {renderList()}
        </Form>
        <div style={{ marginLeft: "10px" }}>
          <RightMenu />
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
