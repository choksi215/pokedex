import Image from 'next/image'

interface Props {
  id: number,
  name: string;
  types: string[],
  sprite: string;
}

export default function PokemonRow(props: Props) {
  const name = props.name
  const id = props.id
  const types = props.types.map((type) => {
    return (
      <p key={props.id}>{type}</p>
    )
  })
  const sprite = props.sprite
  return (
    <>
      <div className="max-w-xs mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <Image
          className="w-32 h-32 rounded-full mx-auto"
          src={sprite}
          width={500}
          height={500}
          alt="Profile picture"
        />
        <h2 className="text-center text-2xl font-semibold mt-3 text-gray-600">{name}</h2>
        <p className="text-center text-gray-600 mt-1">{id}</p>
        <div className="flex justify-center mt-5 text-sm">
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">Twitter</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">LinkedIn</a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">GitHub</a>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-gray-500">{types}</h3>
          <p className="text-gray-600 mt-2 text-sm">John is a software engineer with over 10 years of experience in developing web and mobile applications. He is skilled in JavaScript, React, and Node.js.</p>
        </div>
      </div>
    </>
  )
}
