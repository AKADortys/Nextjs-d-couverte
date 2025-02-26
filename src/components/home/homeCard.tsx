"use client";

import { useState } from "react";
import { usePokemon } from "@/context/PokemonContext";

export function HomeCard() {
  const { pokemons } = usePokemon();
  const [index, setIndex] = useState(1);

  if (!pokemons || pokemons.length === 0) {
    return (
      <p className="text-center text-gray-500">Chargement des Pokémon...</p>
    );
  }

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pokemons.length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + pokemons.length) % pokemons.length
    );
  };
  const handleRandom = () => {
    setIndex(Math.floor(Math.random() * pokemons.length));
  };

  return (
    <div className="lg:w-2/5 md:w-full border-black rounded-lg lg:mx-3 md:mx-auto text-center bg-gray-600 p-5">
      <h3 className=" text-xl  text-white my-3 font-bold">
        {pokemons[index].name.fr} - {pokemons[index].name.en}
      </h3>
      <img
        className="object-cover mx-auto"
        src={pokemons[index].sprites.regular}
        alt={pokemons[index].name.fr}
      />
      <div className="mt-4 flex justify-center gap-4">
        <button
          className={
            index === 1
              ? "bg-gray-500 text-white font-bold py-2 px-4 rounded"
              : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          }
          onClick={handlePrev}
          disabled={index === 1}
        >
          Précédent
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRandom}
        >
          Aléatoire
        </button>
        <button
          className={
            index === pokemons.length - 1
              ? "bg-gray-500 text-white font-bold py-2 px-4 rounded"
              : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          }
          onClick={handleNext}
          disabled={index === pokemons.length - 1}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
