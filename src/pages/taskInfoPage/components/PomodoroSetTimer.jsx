export const PomodoroSetTimer = () => {
  return (
    <div>
      <form className='flex justify-between font-extralight text-center'>
        <label for='work'>
          Work
          <input
            name='work'
            type='text'
            className='bg-c-box block max-w-[5rem] font-normal outline-1 outline-dashed outline-c-text text-center'
            value='25:00'
          />
        </label>

        <label className='text-' for='rest'>
          Rest
          <input
            name='rest'
            type='text'
            className='bg-c-box block max-w-[5rem] font-normal outline-1 outline-dashed outline-c-text text-center'
            value='15:00'
          />
        </label>

        <label className='text-' for='intervals'>
          Intervals
          <input
            name='intervals'
            type='number'
            className='bg-c-box block max-w-[5rem] font-normal outline-1 outline-dashed outline-c-text text-center'
            defaultValue={4}
          />
        </label>
      </form>
    </div>
  )
}
