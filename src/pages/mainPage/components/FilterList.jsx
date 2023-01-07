import { useSelector } from 'react-redux'
import { FilterItem } from '.'

export const FilterList = () => {
  const { filterItems } = useSelector(state => state.simpleTask)

  return (
    <div className='flex flex-wrap gap-2 h-min'>
      <p className='self-center text-c-text font-light'>Filters: </p>
      {filterItems.map(item => (
        <FilterItem key={item} title={item} />
      ))}
    </div>
  )
}
