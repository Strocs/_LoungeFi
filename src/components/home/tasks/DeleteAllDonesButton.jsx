import { useTaskStore } from '@store'

export const DeleteAllDonesButton = () => {
  const deleteDones = useTaskStore(state => state.deleteDones)
  
  return (
    <button
      className='outline-dashed outline-red outline-2 rounded-full p-1 px-4 absolute bottom-4 left-0 right-0 w-fit whitespace-nowrap mx-auto hover:bg-red hover:outline transition-[background-color] duration-150 text-sm'
      onClick={() => deleteDones()}>
      Delete All Dones
    </button>
  )
}
