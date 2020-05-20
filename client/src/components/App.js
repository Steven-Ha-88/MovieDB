import React, { Suspense, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import { DetailPage } from './views/DetailsPage/DetailsPage';
import Favourite from './views/Favourite/index.js';
import Trailers from './views/Trailers/Trailers';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {

  const [noTransparency, setTransparency] = useState(null);  

  const navPath = path => {
    setTransparency(path)
  };



  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar screen={noTransparency} />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth((props) => <LandingPage {...props} path={navPath} />, false)} />
          <Route exact path="/login" component={Auth((props) => <LoginPage {...props} path={navPath} />, false)} />
          <Route exact path="/register" component={Auth((props) => <RegisterPage {...props} path={navPath} />, false)} />
          <Route exact path="/movies/:Id" component={Auth(DetailPage, null)} /> 
          <Route exact path="/tv/:Id" component={Auth(DetailPage, null)} /> 
          <Route exact path="/favourites" component={Auth((props) => <Favourite {...props} path={navPath} />)} /> 
          <Route exact path="/trailers/:id" component={Auth(Trailers, null)} />              
       </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
