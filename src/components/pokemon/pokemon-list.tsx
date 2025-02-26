"use client";

import { usePokemon } from "@/context/PokemonContext";

export default function PokemonList() {
  const { pokemons, getPokemon } = usePokemon();

  return (
    <div>
      <h2 className="text-xl font-bold">
        Liste des Pokémon ({pokemons.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {pokemons.map((pokemon: any) => (
          <div key={pokemon.pokedex_id} className="card p-2 border rounded-lg">
            <h3>
              {pokemon.name.fr} - {pokemon.name.en}
            </h3>
            <img
              src={pokemon.sprites.regular}
              className="h-auto max-w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              alt={pokemon.name.fr}
            />
            <button
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              onClick={() => getPokemon(pokemon.pokedex_id)}
            >
              Charger les détails
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
