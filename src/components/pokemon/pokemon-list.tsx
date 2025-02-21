"use client";

import { usePokemon } from "@/context/PokemonContext";

export default function PokemonList() {
  const { pokemons, getPokemon } = usePokemon();

  return (
    <div>
      <h2 className="text-xl font-bold">
        Liste des Pokémon ({pokemons.length})
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {pokemons.map((pokemon: any) => (
          <div key={pokemon.pokedex_id} className="card p-4 border rounded-lg">
            <h3>
              {pokemon.name.fr} - {pokemon.name.en}
            </h3>
            <img
              src={pokemon.sprites.regular}
              className="w-24 h-24"
              alt={pokemon.name.fr}
            />
            <button
              className="bg-green-500 text-white px-3 py-1 rounded"
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
