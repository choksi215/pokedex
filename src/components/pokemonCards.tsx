import Image from 'next/image'

interface Props {
  id: number,
  name: string;
  types: string[],
  sprite: string;
}

export default function PokemonCards(props: Props) {
  const name = props.name
  const id = props.id
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
          <ul className="text-xl font-semibold text-gray-500">{
            props.types?.map((t) => {
              return (
                <li key={'type-list-' + props.types.indexOf(t)}>{t}</li>
              )
            })
          }</ul>
          <p className="text-gray-600 mt-2 text-sm">When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.</p>
        </div>
      </div>
    </>
  )
}
