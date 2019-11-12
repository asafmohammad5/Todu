import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const links = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/signup">Sign up</Link>
    </nav>
  );
  const greeting = () => (
    <nav>
      <h2 className="logged-in">Hello, {props.currentUser.username}!</h2>
      <button className="greeting-logout" onClick={props.logout}>Log Out</button>
    </nav>
  );

  return props.currentUser ? greeting() : links();
};


export default Greeting;