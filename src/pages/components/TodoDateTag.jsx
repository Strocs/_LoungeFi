export const TodoDateTag = ({ created, done }) => {
  const timeElapsed = Math.floor(
    (new Date().getTime() - created) / 1000 / 60 / 60
  )

  const setColorAndText = () => {
    if (done) return { text: 'Done', color: 'bg-c-gray' }
    switch (true) {
      case timeElapsed < 24: {
        return {
          text: 'Less than 24hrs',
          color: 'bg-green-700'
        }
      }
      case timeElapsed < 48: {
        return {
          text: 'Yesterday',
          color: 'bg-yellow-500'
        }
      }
      default: {
        return {
          text: 'Since 2+ days',
          color: 'bg-red-700'
        }
      }
    }
  }

  return (
    <li
      className={`px-2 w-fit h-min py-[.12rem] text-xs font-light text-c-text ${
        setColorAndText().color
      }`}
    >
      {setColorAndText().text}
    </li>
  )
}
