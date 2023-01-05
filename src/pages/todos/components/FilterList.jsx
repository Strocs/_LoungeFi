import { useSelector } from 'react-redux'
import { FilterItem } from '../../components'

export const FilterList = () => {
  const { filterItems } = useSelector(state => state.todos)

  return (
    <div className='flex flex-wrap gap-2 h-min md:min-w-[10rem] md:max-w-[10rem]'>
      <p className='self-center text-c-text font-light'>Filters: </p>
      {filterItems.map(item => (
        <FilterItem key={item} title={item} />
      ))}
    </div>
  )
}
