import { useTaskStore } from '@store'
import { FilterItem } from '.'

export function FilterList () {
  const filterItems = useTaskStore(state => state.filterItems)

  return (
    <div className='flex flex-wrap gap-2 h-min'>
      <p className='self-center text-c-text font-light'>Filters: </p>
      {filterItems.map(item => (
        <FilterItem key={item} title={item} />
      ))}
    </div>
  )
}
