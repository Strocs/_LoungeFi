export const FilterButton = ({ title }) => {
  return (
    <button
      className='font-light text-sm px-3 py-1 leading-none bg-sky-700 rounded text-white hover:bg-gradient-to-r from-Gradient-1 to-Gradient-2'
      type='button'
      onClick={() => {}}
    >
      {title[0].toUpperCase() + title.slice(1)}
    </button>
  )
}