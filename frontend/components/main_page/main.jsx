import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = ({signedIn}) => {
  if (signedIn) {
    return <div></div>
  } else {
    return (
      <div className="main-page-all">
        <div className="main-page-right"></div>
        <div className="main-page-middle">
          <p className="p1">
            Todu! lets you tackle multiple projects in a easy, fast, and efficient way.
            </p>
          <p className="p2">
            With Todu! you can invite others to your project or simply work on it alone. 
            The choice is entirely up to you! 
            </p>
          <button className="main-signup-button"><Link to="/signup">Signup today!</Link></button>
        </div>
        <div className="main-page-left"> 
        </div>
      </div>
    )
  }
}

export default MainPage;