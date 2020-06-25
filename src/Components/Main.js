import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import OnePokemon from "./OnePokemon";

const Main = (props) => {
  const [allPokes, setAll] = useState([]);
  const [insert, setInsert] = useState("");
  const [pokeId, setId] = useState("");
  const [weight, setWeight] = useState("");
  const [pokeImg, setImg] = useState("");
  const [pokeImgTwo, setImgTwo] = useState("");
  const [type, setType] = useState("")
  const [teamStatus,setTeamStatus] = useState(false)

  useEffect(() => {
    let specific = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    const makeApiCall = async () => {
      const res = await fetch(specific);
      const json = await res.json();
      setAll(json.results);
    };
    makeApiCall();
  }, []);

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch(props.monster);
      const json = await res.json();
      setInsert(json.name);
      setId(json.id);
      setWeight(json.weight);
      setImg(json.sprites.front_default);
      setImgTwo(json.sprites.back_default);
      setType(json.types[0].type.name)
      console.log(json);
    };

    makeApiCall();
  }, [props.monster]);

  let pokeNames = allPokes.map((e) => (
    <li class="poke-tags">
      <Link to={"/"}>
        <OnePokemon
          name={e.name}
          handleClick={() => props.handleClick(e.url)}
        />
      </Link>
    </li>
  ));

  const addToParty = () =>
    props.addParty(
      <div id={pokeId} className="selected">
        <img src={pokeImg} />
        <img src={pokeImgTwo} />
        <h1>{insert}</h1>
        <h2>Pokemon Number:{pokeId}</h2>
        <h2>Weight:{weight}lbs</h2>
        <h2>Type:{type}</h2>
        <button className="mainBtn" onClick={()=>props.removeFromParty(pokeId)}>Remove From Party</button>
      </div>,
    );


  return (
    <div className="poke-container">
      <div className="selected">
        <div className="sprite"><img src={pokeImg} />
        <img src={pokeImgTwo} />
        </div>
        <h1>{insert}</h1>
        <h2>Pokemon Number:{pokeId}</h2>
        <h2>Weight:{weight}lbs</h2>
        <h2>Type:{type}</h2>
        <button className="mainBtn"onClick={addToParty}>Add to Party</button>
      </div>
      <div className="poke-list">{pokeNames}</div>
    </div>
  );
};

export default Main;
