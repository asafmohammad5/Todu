import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const MainPage = ({signedIn}) => {
  if (signedIn) {
    return <Redirect to="/boards" />
  } else {
    return (
      <div className="main-page-all">
        <div className="main-page-left">
          <p className="p1">
            Todu! lets you tackle multiple projects in an easy, fast, and efficient way.
            </p>
          <p className="p2">
            With Todu! you can invite others to your project or simply work on it alone.
            The choice is entirely up to you!
            </p>
          <button className="main-signup-button"><Link to="/signup">Sign up today!</Link></button>
        </div>
        {/* <div className="main-page-middle">
       
        </div> */}
        <div className="main-page-right"></div>
        <nav>
          <nav className="company-name">Todu!</nav>
          <nav className="copyright"> © Copyright 2019. All rights reserved.</nav>
          <nav className="github"> 
            <a target="_blank" href="https://github.com/asafmohammad5">
              <i className="fab fa-github"></i> Github
            </a>
          </nav>
        </nav>
      </div>
    )
  }
}

export default MainPage;