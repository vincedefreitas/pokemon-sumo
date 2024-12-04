import { PokemonData } from "../PokemonBattle";

interface Pokemon {
  pokemon: PokemonData;
}

function Pokemon({ pokemon }: Pokemon) {
  return (
    <div className="text-center">
      <img src={pokemon.image} alt="" />
      <p>{pokemon.name}</p>
      <p>{pokemon.weight}</p>
    </div>
  );
}

export default Pokemon;
