import PokemonRow from "@/components/pokemonRow"

interface pokemonListTypes {
  id: number,
  name: string;
  types: string[],
  sprite: string;
}

export default function Home() {
  const pokemonArray = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass", "wind", "gay"],
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
    },
    {
      id: 1,
      name: "Bulbasaur",
      types: ["fire", "wind", "poison"],
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
    },
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass", "normal", "ground", "bug"],
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
    },
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass"],
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
    }
  ]
  const pokemonList = pokemonArray.map((pokemon: pokemonListTypes) => {
    return (
      <>
        <PokemonRow  {...pokemon} />
      </>
    );

  });


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container flex justify-between align-middle flex-wrap">
        {pokemonList}
      </div>
    </main>
  )
}
