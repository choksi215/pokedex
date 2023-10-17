'use client'
import Image from 'next/image'
import { ReactEventHandler, useState } from 'react';

interface Props {
    id: number,
    name: string;
    types: string[],
    sprite: string;
}

type PokemonTypeSelectionProps = {
    selectedType: string | undefined;
    selectType: (type: string | undefined) => void;
}

export default function PokemonTypeSelection(props: PokemonTypeSelectionProps) {
    const { selectedType, selectType } = props
    const [type, setType] = useState(selectedType)

    const types = ["grass", "normal", "ground", "fire", "wind", "psy"]

    const handletypeChange = (e: any, t: string) => {
        e.preventDefault()
        setType(t)
        selectType(t)
    }


    return (
        <>
            <div className='flex flex-col w-full'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select
                    name="pokeType"
                    value={type}
                    onChange={event => handletypeChange(event, event.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected value={undefined}>-</option>
                    {types.map(function (t) {
                        return (<option key={types.indexOf(t)} value={t}>{t}</option>);
                    })}
                </select>
            </div>
        </>
    )
}
