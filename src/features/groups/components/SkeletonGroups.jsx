import { Button } from '@components/ui'

export const SkeletonGroups = () => {
  return (
    <ul className='flex h-fit items-center gap-3 py-1 pr-1 pl-[10px]'>
      <li>
        <Button
          color={'blue'}
          outline={'white'}
          hover='blue'
          className='flex shrink-0 items-center gap-1 whitespace-nowrap'
        >
          <p className='px-3 font-normal'>All</p>
        </Button>
      </li>
      <li className='h-6 w-24 rounded-full bg-opacityGrey outline outline-2 outline-opacityGrey'></li>
      <li className='h-6 w-12 rounded-full bg-opacityGrey outline outline-2 outline-opacityGrey'></li>
      <li className='h-6 w-16 rounded-full bg-opacityGrey outline outline-2 outline-opacityGrey'></li>
    </ul>
  )
}
