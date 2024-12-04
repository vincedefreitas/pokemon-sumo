import { useEffect, useState } from "react";
import Pokemon from "../Pokemon";

export interface PokemonData {
  image: string;
  name: string;
  weight: number;
}

function PokemonBattle() {
  const [pokemon1, setPokemon1] = useState<PokemonData>({
    image: "",
    name: "",
    weight: 0,
  });
  const [pokemon2, setPokemon2] = useState<PokemonData>({
    image: "",
    name: "",
    weight: 0,
  });

  let randomNum = Math.floor(Math.random() * (151 - 1 + 1) + 1);
  let randomNum2 = Math.floor(Math.random() * (151 - 1 + 1) + 1);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + randomNum)
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemon1({
          image: pokemon.sprites.other["official-artwork"].front_default,
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
          weight: pokemon.weight,
        });
      });
    fetch("https://pokeapi.co/api/v2/pokemon/" + randomNum2)
      .then((response) => response.json())
      .then((pokemon) => {
        setPokemon2({
          image: pokemon.sprites.other["official-artwork"].front_default,
          name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
          weight: pokemon.weight,
        });
      });
  }, []);

  return (
    <div className="flex">
      <Pokemon pokemon={pokemon1}></Pokemon>
      <Pokemon pokemon={pokemon2}></Pokemon>
    </div>
  );
}

export default PokemonBattle;
