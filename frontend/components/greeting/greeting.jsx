import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const links = () => (
    <nav className="login-signup">
      <div className="auth-link">
        <Link to="/login">Login</Link>
      </div>
      <div className="auth-link">
        <Link to="/signup">Sign up</Link>
      </div>
    </nav>
  );
  const greeting = () => {
    const name = props.currentUser.username[0].toUpperCase() + props.currentUser.username.slice(1)
    return (
    <nav className="greeting-front">
      <h2 className="logged-in">Hello,  {name}!</h2>
      <button className="greeting-logout" onClick={props.logout}>Log Out</button>
    </nav>
    )
  };

  if (props.currentUser) {
    return greeting();
  } else if (props.path !== "/login" && props.path !== "/signup") {
    return links()
  } else {
    return null;
  }
};


export default Greeting;