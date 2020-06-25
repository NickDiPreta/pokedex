import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Main from "./Components/Main";
import Team from "./Components/Team";
import OnePokemon from "./Components/OnePokemon"

function App() {
  const [url, setUrl] = useState('');
  const [onepoke, setOnePoke] = useState({})
  const [party, setParty] = useState([])
  const [remove, setRemove] = useState([])
  

  let handleClick = (input) => {
    setUrl(input)
    setOnePoke(input)
  }

  let addParty = (member) =>{
    setParty([member,...party])
  }

  let removeFromParty = (key) =>{
    console.log(document.getElementById(key))
    let element = document.getElementById(key)
    element.parentNode.removeChild(element);
    
  }

  return (
    <div>
      <nav>
        <Link to="/">
          <h1>Pokédex</h1>
        </Link>
        <Link to="/MyTeam">
          <h2>My Team</h2>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route path="/" exact render={props => <Main monster={onepoke} handleClick={handleClick} removeFromParty={removeFromParty} addParty={addParty} {...props}/>} />
          <Route path="/MyTeam" exact render={props=> <Team party={party} removeFromParty={removeFromParty}/>} />
          <OnePokemon apiCall = {url} />
          <Redirect from="/" to="/Main" />
        </Switch>
      </main>
    </div>
  );
}
export default App;
