import { FilterItem } from '../../components'

export const FilterList = () => {
  return (
    <div className='h-min sm:min-w-[10rem] sm:max-w-[10rem] flex flex-wrap gap-2'>
      <p className='text-c-text font-light self-center'>Filters: </p>
      <FilterItem title='All' />
      <FilterItem title='Active' />
      <FilterItem title='Done' />
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
