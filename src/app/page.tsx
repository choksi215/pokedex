import FilterablePokedexTable from "@/components/FilterablePokedexTable";

export default function Home() {
  const pokemonArray = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass", "wind", "gay"],
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
    },
    {
      id: 2,
      name: "Bulbasaur",
      types: ["fire", "wind", "poison"],
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
    },
    {
      id: 3,
      name: "Bulbasaur",
      types: ["grass", "normal", "ground", "bug"],
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
    },
    {
      id: 4,
      name: "Bulbasaur",
      types: ["grass", "psy"],
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container flex justify-between align-middle flex-wrap">
        <FilterablePokedexTable pokemons={pokemonArray} />
      </div>
    </main>
  )
}
