export function Title ({ name = 'Ignacio' }) {
  return (
    <div className='text-white grid gap-1'>
      <h1 className='text-3xl font-extralight leading-none'>
        Lounge<b className='font-bold'>Fi_</b>
      </h1>
      <span className='text-xs font-light text-grey leading-none'>
        Welcome {name}
      </span>
    </div>
  )
}
