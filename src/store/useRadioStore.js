import { DEFAULT_RADIO_LIST, STORAGE_RADIO_ID, STORAGE_VOLUME_ID } from '@constants'
import { useLocalStorage } from '@hooks'
import { getNextItemIndex, getPrevItemIndex } from '@utils'
import { create } from 'zustand'

const storedCurrentRadio = useLocalStorage({
  key: STORAGE_RADIO_ID,
  initialValue: { index: 0, ...DEFAULT_RADIO_LIST[0] }
})

const storedVolume = useLocalStorage({
  key: STORAGE_VOLUME_ID,
  initialValue: 0.5
})

export const useRadioStore = create(set => ({
  radioList: DEFAULT_RADIO_LIST,
  currentRadio: storedCurrentRadio,
  currentRadioTitle: '',
  isPlaying: false,
  isRadioOn: false,
  isBuffering: true,
  volume: +storedVolume,
  isError: false, // TODO: handle if any radio station is down

  setCurrentRadioTitle: title => {
    set({ currentRadioTitle: title })
  },

  setIsBuffering: isBuffering => {
    set({ isBuffering })
  },

  onPlayOrPause: () => {
    set(state => ({
      isPlaying: !state.isPlaying,
      isRadioOn: true
    }))
  },

  turnOffRadio: () => {
    set({ isPlaying: false })
    set({ isRadioOn: false })
  },

  playNext: () => {
    set(state => {
      const nextIndex = getNextItemIndex({
        list: state.radioList,
        itemIndex: state.currentRadio.index
      })

      const newState = { index: nextIndex, ...state.radioList[nextIndex] }

      useLocalStorage({ key: STORAGE_RADIO_ID, value: newState })

      return {
        currentRadio: newState,
        isPlaying: true,
        isRadioOn: true
      }
    })
  },

  playLast: () => {
    set(state => {
      const prevIndex = getPrevItemIndex({
        list: state.radioList,
        itemIndex: state.currentRadio.index
      })

      const newState = { index: prevIndex, ...state.radioList[prevIndex] }

      useLocalStorage({ key: STORAGE_RADIO_ID, value: newState })

      return {
        currentRadio: newState,
        isPlaying: true,
        isRadioOn: true
      }
    })
  },

  setVolume: volume => {
    set({ volume })

    useLocalStorage({ key: STORAGE_VOLUME_ID, value: volume })
  }
}))
