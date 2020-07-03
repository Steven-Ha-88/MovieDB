import React, { Suspense, useState } from "react";
import { Route, Router } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/index.js";
import SearchPage from "./views/SearchList/index";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import CastingPage from "./views/CastingPage/index";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import { DetailPage } from "./views/DetailsPage/index";
import Favourite from "./views/Favourite/index";
import Trailers from "./views/Trailers/index.tsx";
import history from "./history";
import ViewPopularMovies from "./views/ViewAllMovies/index";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  const [noTransparency, setTransparency] = useState(null);

  const navPath = (path) => {
    setTransparency(path);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        style={{ minHeight: "calc(100vh - 80px)", backgroundColor: "white" }}>
        <Router history={history}>
          <NavBar screen={noTransparency} />
          <Route
            exact
            path='/'
            component={Auth(
              (props) => (
                <LandingPage {...props} path={navPath} />
              ),
              false
            )}
          />
          <Route
            exact
            path='/login'
            component={Auth(
              (props) => (
                <LoginPage {...props} path={navPath} />
              ),
              false
            )}
          />
          <Route
            exact
            path='/register'
            component={Auth(
              (props) => (
                <RegisterPage {...props} path={navPath} />
              ),
              false
            )}
          />
          <Route exact path='/movies/:Id' component={Auth(DetailPage, null)} />
          <Route exact path='/tv/:Id' component={Auth(DetailPage, null)} />
          <Route
            exact
            path='/favourites'
            component={Auth((props) => (
              <Favourite {...props} path={navPath} />
            ))}
          />
          <Route exact path='/trailers/:id' component={Auth(Trailers, null)} />
          <Route
            exact
            path='/search/:query'
            component={Auth((props) => (
              <SearchPage {...props} path={navPath} />
            ))}
          />
          <Route
            exact
            path='/people/:id'
            component={Auth((props) => (
              <CastingPage {...props} path={navPath} />
            ))}
          />
          <Route
            exact
            path='/popular_movies'
            component={Auth((props) => (
              <ViewPopularMovies {...props} path={navPath} />
            ))}
          />
        </Router>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
