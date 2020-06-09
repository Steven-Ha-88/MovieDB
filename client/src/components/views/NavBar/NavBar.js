import React, { useState, useEffect } from 'react';
import RightMenu from './Sections/RightMenu';
import logo from './../../../Images/logo2.png';
import styled from 'styled-components';
import { Nav, ToggleButton } from "./styles";

const Img = styled.img`
vertical-align: middle;
    border-style: none;
    width: 100%;
    color: green;
`;

const NavBar = props => {
  const [visible, setVisible] = useState(false)

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

  // DD293F

  const isTransparent = useTransparentHook(80);
  return (
    <Nav path={props.screen} isTransparent={isTransparent} className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="/">
   <img src={logo} alt="bebas-neue-font" border="0"width="80" />
  </a>
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
    <div>
      <RightMenu />
    </div>
  </div>
</Nav>
  )
}

export default NavBar