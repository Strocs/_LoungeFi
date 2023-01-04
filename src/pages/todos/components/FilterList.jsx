import { FilterItem } from '../../components'

export const FilterList = () => {
  return (
    <div className='flex flex-wrap gap-2 h-min md:min-w-[10rem] md:max-w-[10rem]'>
      <p className='self-center text-c-text font-light'>Filters: </p>
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
