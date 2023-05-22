import { create } from 'zustand'

export const useLoFiRadioStore = create((set, get) => ({
	loFiRadioQueue: [
		{
			url: 'https://i.ytimg.com/vi/jfKfPfyJRdk/maxresdefault.jpg',
			title: 'lofi hip hop radio 📚 - beats to relax/study to',
		},
		{
			url: 'https://pbs.twimg.com/media/FttFV_XX0AYCdOR?format=jpg',
			title: 'Lofi Pedro Pascal (El Mandaloreano y Last of Us lofi)',
		},
	], // A list of youtube LoFi Radio Streams
	activeRadio: { index: 0, url: 'https://i.ytimg.com/vi/jfKfPfyJRdk/maxresdefault.jpg', title: 'lofi hip hop radio 📚 - beats to relax/study to' },
	isPlaying: false, // Play/pause button is active.
	isStopped: true, // The user has clicked the stop button. True if it is.
	volumen: 0.5,
	setActiveRadio: (radioIndex = 0) => {
		set(state => ({ activeRadio: { index: radioIndex, ...state.loFiRadioQueue[radioIndex] } }))
	},
	onPlayOrPause: () => {
		set(state => ({ isPlaying: !state.isPlaying }))
		if (get().isStopped) set({ isStopped: false })
	},
	onStop: () => {
		set({ isPlaying: false })
		set({ isStopped: true })
	},
	playNext: () => {
		if (get().activeRadio.index >= get().loFiRadioQueue.length - 1) return get().setActiveRadio(0)
		get().setActiveRadio(get().activeRadio.index + 1)
	},
	playLast: () => {
		if (get().activeRadio.index <= 0) return get().setActiveRadio(get().loFiRadioQueue.length - 1)
		get().setActiveRadio(get().activeRadio.index - 1)
	},
}))
