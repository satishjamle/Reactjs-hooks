
import React, { useEffect, useState } from "react";
import axios from "axios";


export const Pokemon = () => {

  const [num, setNum] = useState(1);  // Set initial value to 1
  const [name, setName] = useState("");
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    async function getData() {
    
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        // console.log(res.data.num)
        setName(res.data.name);  // Set Pokémon name
        setMoves(res.data.moves.length);  // Set number of moves
     
    }

    // Call the function only when `num` changes
    getData();
  }, [num]);  // Dependency array makes sure this effect runs when `num` changes

  return (
    <>
      <h1>
        You chose Pokémon number <span style={{ color: "red" }}> {num} </span>
      </h1>
      <h1>
        Pokémon name is <span style={{ color: "red" }}> {name} </span>
      </h1>
      <h1>
        This Pokémon has <span style={{ color: "red" }}> {moves} </span> moves
      </h1>

      <select
        value={num}
        onChange={(event) => {
          setNum(event.target.value);  // Update the `num` state when dropdown value changes
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="6">6</option>
      </select>
    </>
    
  )
}
