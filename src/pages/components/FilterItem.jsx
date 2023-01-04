export const FilterItem = ({ title }) => {
  return (
    <button
      className='h-min px-4 py-1 border border-dashed text-sm text-c-text leading-none hover:bg-c-text hover:text-c-bg'
      type='button'
      onClick={() => {}}
    >
      {title[0].toUpperCase() + title.slice(1)}
    </button>
  )
}