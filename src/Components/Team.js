import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
  } from "react-router-dom";



  const Team = (props) => {
    return(<div className='party-wrapper'><h1>My Team</h1>
      <div className="party">{props.party}</div></div>)
  }
  export default Team