export default function Avatar({ name, picture }) {
  return (
    <div className="flex flex-col items-start">
      <img
        src={picture.url}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="font-bold">{name}</div>
    </div>
  )
}
