export const FilterItem = ({ title }) => {
  return (
    <button
      className='h-min text-sm px-4 py-1 leading-none border-2 rounded-lg text-c-text hover:bg-c-text hover:text-c-bg'
      type='button'
      onClick={() => {}}
    >
      {title[0].toUpperCase() + title.slice(1)}
    </button>
  )
}