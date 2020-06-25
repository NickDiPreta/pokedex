import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import MonsterDetails from "./MonsterDetails"



const OnePokemon = (props) => {
  const [pokeData, setPokeData] = useState("");

  
    useEffect(() => {
        if (props.apiCall){
        const makeApiCall = async () => {
        const res = await fetch(props.apiCall);
        const json = await res.json();
        setPokeData(json)}
        makeApiCall();
      }
      
    }, [props.apiCall]);
  
  
  return (
    <div onClick={() => props.handleClick(pokeData)}>
      {props.name} {pokeData?<MonsterDetails monster={pokeData}/>:"" }
    </div>
  );
};

export default OnePokemon;
