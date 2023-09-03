import { getNextItemIndex, getPrevItemIndex, shuffleList } from '@utils'
import { create } from 'zustand'

// A list of YouTube LoFi Radio Streams
const DEFAULT_RADIO_LIST = [
  {
    id: '5yx6BWlEVcY'
  },
  {
    id: '7NOSDKb0HlU'
  },
  {
    id: 'rSXWZzh-GaU'
  },
  {
    id: '0ba7dl40tSQ'
  },
  {
    id: 'jfKfPfyJRdk'
  }
]

const shuffledRadio = shuffleList({ list: DEFAULT_RADIO_LIST })

export const useRadioStore = create((set, get) => ({
  radioList: shuffledRadio,
  currentRadio: { index: 0, ...shuffledRadio[0] },
  currentRadioTitle: '',
  isPlaying: false, // Play/pause button is active.
  isStopped: true, // The user has clicked the stop button. True if it is.
  isBuffering: true,
  volumen: 0.5,

  setCurrentRadioTitle: title => {
    set({currentRadioTitle: title})
  },
  setIsBuffering: isBuffering => {
    set({ isBuffering })
  },
  onPlayOrPause: () => {
    set(state => ({
      isPlaying: !state.isPlaying,
      isStopped: false
    }))
  },
  onStop: () => {
    set({ isPlaying: false })
    set({ isStopped: true })
  },
  playNext: () => {
    set(state => {
      const nextIndex = getNextItemIndex({
        list: state.radioList,
        itemIndex: state.currentRadio.index
      })
      return {
        currentRadio: { index: nextIndex, ...state.radioList[nextIndex] }
      }
    })
  },
  playLast: () => {
    set(state => {
      const prevIndex = getPrevItemIndex({
        list: state.radioList,
        itemIndex: state.currentRadio.index
      })
      return {
        currentRadio: { index: prevIndex, ...state.radioList[prevIndex] }
      }
    })
  },
  playRandom: () => {
    set(state => ({
      currentRadio: state.radioList[Math.floor(Math.random() * state.radioList.length)]
    }))
  }
}))
