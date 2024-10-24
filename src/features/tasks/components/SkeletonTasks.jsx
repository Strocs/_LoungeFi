export const SkeletonTasks = () => {
  return (
    <ul>
      <li className='flex items-center gap-2 py-2 pl-3 pr-3'>
        <div className='size-5 outline outline-2 outline-opacityGrey rounded-full bg-opacityGrey shrink-0'></div>
        <div className='w-full'>
          <div className='rounded-full bg-opacityGrey h-4 w-4/6'></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='size-5 outline outline-2 outline-opacityGrey rounded-full bg-opacityGrey shrink-0'></div>
          <div className='h-6 w-2 ml-2 rounded-full bg-opacityGrey'></div>
        </div>
      </li>
      <li className='flex items-center gap-2 py-2 pl-3 pr-3'>
        <div className='size-5 outline outline-2 outline-opacityGrey rounded-full bg-opacityGrey shrink-0'></div>
        <div className='w-full'>
          <div className='rounded-full bg-opacityGrey h-4 w-5/6'></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='size-5 outline outline-2 outline-opacityGrey rounded-full bg-opacityGrey shrink-0'></div>
          <div className='h-6 w-2 ml-2 rounded-full bg-opacityGrey'></div>
        </div>
      </li>
      <li className='flex items-center gap-2 py-2 pl-3 pr-3'>
        <div className='size-5 outline outline-2 outline-opacityGrey rounded-full bg-opacityGrey shrink-0'></div>
        <div className='w-full'>
          <div className='rounded-full bg-opacityGrey h-4 w-3/6'></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='size-5 outline outline-2 outline-opacityGrey rounded-full bg-opacityGrey shrink-0'></div>
          <div className='h-6 w-2 ml-2 rounded-full bg-opacityGrey'></div>
        </div>
      </li>
    </ul>
  )
}
