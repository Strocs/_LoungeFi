const getRandomNumber = Math.random(0, 1) * 100

export const UserAvatar = ({
  name = 'Guest',
  src = 'https://robohash.org/' + getRandomNumber + '?set=set2'
}) => {
  // get data from userState
  return (
    <img
      src={src}
      alt={name + ' Avatar Image'}
      className='object-cover rounded-full aspect-square scale-125 group-hover:scale-[2] transition-transform duration-150'
    />
  )
}
