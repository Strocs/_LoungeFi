import { TagItem } from '.'

export const TodoDateTag = ({ created, done }) => {
  const timeElapsed = Math.floor(
    (new Date().getTime() - created) / 1000 / 60 / 60
  )

  return (
    <TagItem
      color={
        done
          ? 'done'
          : timeElapsed < 24
          ? 'green'
          : timeElapsed < 48
          ? 'yellow'
          : 'red'
      }
      text={
        done
          ? 'Done'
          : timeElapsed < 24
          ? 'Less than 24hrs'
          : timeElapsed < 48
          ? 'Yesterday'
          : 'Since 2+ days'
      }
    />
  )
}
