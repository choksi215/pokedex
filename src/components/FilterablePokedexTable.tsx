'use client'
import { useState } from 'react';
import PokemonCards from './PokemonCards';
import PokemonTypeSelection from './PokemonTypeSelection';

interface Pokemon {
    id: number,
    name: string;
    types: string[],
    sprite: string;
}

interface PokemonListProps {
    pokemons: Pokemon[]
}

export function FilterablePokedexTable({ pokemons }: PokemonListProps) {
    const [selectedType, setSelectedType] = useState<string | undefined>(undefined)
    let filteredPokemon: Pokemon[] = pokemons

    if (selectedType) {
        filteredPokemon = []
        pokemons.map((pokemon: Pokemon) => {
            const { types } = pokemon
            types.includes(selectedType) ? filteredPokemon.push(pokemon) : null

        })
    }


    const pokemonList = filteredPokemon.map((pokemon: Pokemon) => {
        return (
            <>
                <PokemonCards key={'pokemon-' + pokemon.id} {...pokemon} />
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
