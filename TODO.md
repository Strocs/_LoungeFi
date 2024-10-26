# TODOs

### PWA

- [ ] feat: add offline support
  - [ ] cache user lists on local, if user is offline, the lists are loaded from the cache
    - Cache have an timestamp that is the lst time the list was updated
    - If the cache is newer than the remote
  - [ ] sync user lists with server when online
    - [ ] when offline added, deleted or updated tasks are put in a queue to be synced when online

### Tasks List

- [ ] feat: create list with a IA mode
- [ ] ui: add a button to switch between IA and normal mode
  - [ ] ui: add an input border animation when is on IA mode
- [ ] feat: move tasks between groups

### Pomodoro Timer

- [ ] feat: add settings to pomodoro

### LOFI Radio Player

- [ ] !fix: delete radios that are not active
- [ ] update: add new radios

### UI/UX

- [x] fix: improve spinner animation
- [x] fix: description text can be better redacted
- [x] feat: when user start to focus a task clean the UI

### Settings

- [ ] feat: add user settings
- [ ] ui: add settings modal
- [ ] feat: add pomodoro settings
  - [ ] user can set the pomodoro duration
  - [ ] user can set the pomodoro interval
- [ ] feat: add lofi radio settings
  - [ ] feat: user can add custom radios to the list

### Others

- [x] arch: resolve linter and format issues
- [x] arch: folder structure must be better (screaming architecture)
- [ ] feat: add a changelog
