import React from 'react';
import {Route} from "react-router-dom";
import GreetingContainer from "../greeting/greeting_container";


const Heading = props => {
  if (props.path !== "/login" && props.path !== "/signup") {
    return <header className="header">
      <div className="empty-div">
        <nav onClick={() => props.history.push("/boards")} className="main-nav"> Todu!</nav>
      </div>
      <div className="main-div">
      </div>
      <div className="greet-div">
        <Route path="/" component={GreetingContainer} />
      </div>
    </header>
  } else {
  return null;
}
}

export default Heading;

