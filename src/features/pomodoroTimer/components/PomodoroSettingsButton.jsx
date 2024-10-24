import { Button } from '@components/ui'
import { SettingIcon } from '@components/icons'

export const PomodoroSettingsButton = ({ onClick }) => {
  return (
    <Button hover='red' size='round-sm' onClick={onClick}>
      <SettingIcon />
    </Button>
  )
}
