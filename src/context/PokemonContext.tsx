"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ApiPokemon } from "../utils/api-pokémon";

const PokemonApi = new ApiPokemon();

interface PokemonContextType {
  pokemons: any[];
  getPokemon: (id: number) => Promise<any>;
  getGeneration: (gen: number) => Promise<any>;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    // Charger les Pokémon au démarrage
    async function fetchData() {
      const cachedPokemons = PokemonApi.getCachedPokemons();
      if (cachedPokemons) {
        setPokemons(cachedPokemons);
      } else {
        const data = await PokemonApi.getPokemons();
        if (data) setPokemons(data);
      }
    }
    fetchData();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        getPokemon: (id: number) => PokemonApi.getPokemon(id),
        getGeneration: (gen: number) => PokemonApi.getGeneration(gen),
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
}
