import React, { useState } from 'react';
import RightMenu from './Sections/RightMenu';
import './Sections/Navbar.css';
import logo from './../../../Images/logo2.png';
import styled from 'styled-components';

const Img = styled.img`
vertical-align: middle;
    border-style: none;
    width: 100%;
    color: green;
`;

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav style={{backgroundColor: "black"}} className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="/">
    <img src={logo} width="100" className="d-inline-block align-top" alt="logo" loading="lazy" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/favourites">Watchlist</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <div>
      <RightMenu />
    </div>
  </div>
</nav>
  )
}

export default NavBar