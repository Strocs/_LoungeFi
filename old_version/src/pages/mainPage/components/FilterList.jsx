import { useTaskStore } from '@store'
import { FilterItem } from '.'

export function FilterList () {
  const filterItems = useTaskStore(state => state.filterItems)

  return (
    <div className='flex gap-2 mx-8 my-2 mb-4 overflow-x-scroll'>
      {/* <p className='self-center text-c-text font-light'>Filters: </p> */}
      {filterItems.map(item => (
        <FilterItem key={item} title={item} />
      ))}
    </div>
  )
}
