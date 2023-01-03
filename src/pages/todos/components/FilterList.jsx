import { FilterButton } from '../../components'

export const FilterList = () => {
  return (
    <div className='flex flex-wrap justify-center gap-2'>
      <FilterButton title='All' />
      <FilterButton title='Active' />
      <FilterButton title='Completed' />
      {/* {tagArray.map((tag, index) => (
        <FilterButton
          key={tag}
          title={tag}
          setFilter={setFilter}
          index={index}
        />
      ))} */}
    </div>
  )
}
