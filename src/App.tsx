import { useState } from "react";
import PokemonBattle from "./PokemonBattle";

function App() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center bg-zinc-900 text-white">
      <h1 className="text-center text-7xl py-12 font-bold">Pokemon Sumo</h1>
      <PokemonBattle />
    </div>
  );
}

export default App;
