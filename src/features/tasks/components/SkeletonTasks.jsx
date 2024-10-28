export const SkeletonTasks = () => {
  return (
    <ul>
      <li className='flex items-center gap-2 py-2 pr-3 pl-3'>
        <div className='size-5 shrink-0 rounded-full bg-opacityGrey outline outline-2 outline-opacityGrey'></div>
        <div className='w-full'>
          <div className='h-4 w-4/6 rounded-full bg-opacityGrey'></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='size-5 shrink-0 rounded-full bg-opacityGrey outline outline-2 outline-opacityGrey'></div>
          <div className='ml-2 h-6 w-2 rounded-full bg-opacityGrey'></div>
        </div>
      </li>
      <li className='flex items-center gap-2 py-2 pr-3 pl-3'>
        <div className='size-5 shrink-0 rounded-full bg-opacityGrey outline outline-2 outline-opacityGrey'></div>
        <div className='w-full'>
          <div className='h-4 w-5/6 rounded-full bg-opacityGrey'></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='size-5 shrink-0 rounded-full bg-opacityGrey outline outline-2 outline-opacityGrey'></div>
          <div className='ml-2 h-6 w-2 rounded-full bg-opacityGrey'></div>
        </div>
      </li>
      <li className='flex items-center gap-2 py-2 pr-3 pl-3'>
        <div className='size-5 shrink-0 rounded-full bg-opacityGrey outline outline-2 outline-opacityGrey'></div>
        <div className='w-full'>
          <div className='h-4 w-3/6 rounded-full bg-opacityGrey'></div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='size-5 shrink-0 rounded-full bg-opacityGrey outline outline-2 outline-opacityGrey'></div>
          <div className='ml-2 h-6 w-2 rounded-full bg-opacityGrey'></div>
        </div>
      </li>
    </ul>
  )
}
