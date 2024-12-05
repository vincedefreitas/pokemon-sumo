import PokemonBattle from "./PokemonBattle";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-white">
      <h1 className="text-center text-6xl py-12 font-bold">Pokemon Sumo</h1>
      <h2 className="text-center text-xl pb-12">Heaviest Pokemon wins!</h2>
      <PokemonBattle />
    </div>
  );
}

export default App;
