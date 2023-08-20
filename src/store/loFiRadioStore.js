import { create } from 'zustand'

// A list of YouTube LoFi Radio Streams
const DEFAULT_RADIO_LIST = [
	{
		url: 'jfKfPfyJRdk',
		title: 'lofi hip hop radio 📚 - beats to relax/study to',
	},
]

export const useLoFiRadioStore = create((set, get) => ({
	activeRadio: { index: 0, ...DEFAULT_RADIO_LIST[0] },
	isPlaying: false, // Play/pause button is active.
	isStopped: true, // The user has clicked the stop button. True if it is.
	volumen: 0.5,
	setActiveRadio: (radioIndex = 0) => {
		set((state) => ({ activeRadio: { index: radioIndex, ...state.loFiRadioList[radioIndex] } }))
	},
	onPlayOrPause: () => {
		set((state) => ({ isPlaying: !state.isPlaying }))
		if (get().isStopped) set({ isStopped: false })
	},
	onStop: () => {
		set({ isPlaying: false })
		set({ isStopped: true })
	},
	playNext: () => {
		if (get().activeRadio.index >= get().loFiRadioList.length - 1) return get().setActiveRadio(0)
		get().setActiveRadio(get().activeRadio.index + 1)
	},
	playLast: () => {
		if (get().activeRadio.index <= 0) return get().setActiveRadio(get().loFiRadioList.length - 1)
		get().setActiveRadio(get().activeRadio.index - 1)
	},
}))
