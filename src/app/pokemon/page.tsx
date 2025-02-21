import PokemonList from "../../components/pokemon/pokemon-list";

export default function HomePage() {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-2xl font-bold">Pokémon App</h1>
      <PokemonList />
    </div>
  );
}
