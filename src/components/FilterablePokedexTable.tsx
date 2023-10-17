'use client'
import { useState } from 'react';
import PokemonCards from './pokemonCards';
import PokemonTypeSelection from './pokemonTypeSelection';

interface Pokemon {
    id: number,
    name: string;
    types: string[],
    sprite: string;
}

interface PokemonListProps {
    pokemons: Pokemon[]
}

export default function FilterablePokedexTable({ pokemons }: PokemonListProps) {
    const [selectedType, setSelectedType] = useState<string | undefined>(undefined)
    let filteredPokemon: PokemonListProps = { pokemons }

    if (selectedType) {
        filteredPokemon.pokemons = []
        pokemons.map((pokemon: Pokemon) => {
            const { types } = pokemon
            types.includes(selectedType) ? filteredPokemon.pokemons.push(pokemon) : null

        })
        console.log(filteredPokemon)
    }


    const pokemonList = filteredPokemon.pokemons.map((pokemon: Pokemon) => {
        return (
            <>
                <PokemonCards key={pokemon.id} {...pokemon} />
            </>
        );
    });

    return (
        <>
            <span className='my-5 mx-auto'>
                {selectedType}
            </span>
            <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />
            {pokemonList}
        </>
    )
}
