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
    name: "missingno",
    weight: 0,
  });
  const [pokemon2, setPokemon2] = useState<PokemonData>({
    image: "",
    name: "missingno",
    weight: 0,
  });
  const [message, setMessage] = useState<string>("");

  async function getPokemon(
    stateSetter: React.Dispatch<React.SetStateAction<PokemonData>>
  ) {
    const randomNum = Math.floor(Math.random() * (151 - 1 + 1) + 1);
    const json = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNum);
    const pokemon = await json.json();
    const image = pokemon.sprites.other["official-artwork"].front_default ?? "";
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const weight = pokemon.weight ?? 0;
    stateSetter({ image: image, name: name, weight: weight });
  }

  useEffect(() => {
    getPokemon(setPokemon1);
    getPokemon(setPokemon2);
  }, []);

  useEffect(() => {
    if (pokemon1.weight === pokemon2.weight) {
      setMessage("It's a draw!");
    } else if (pokemon1.weight > pokemon2.weight) {
      setMessage(`${pokemon1.name} wins!`);
    } else {
      setMessage(`${pokemon2.name} wins!`);
    }
  }, [pokemon1, pokemon2]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-center lg:flex lg:items-center gap-20">
        <Pokemon pokemon={pokemon1}></Pokemon>
        <p className="py-12 text-red-400 text-2xl">VS</p>
        <Pokemon pokemon={pokemon2}></Pokemon>
      </div>
      <h2 className="text-3xl py-12">{message}</h2>
    </div>
  );
}

export default PokemonBattle;
