import { getGreatMemesArray } from "./fillMemesObject.js"

export function getState() {
	const savedState = localStorage.getItem('memesData')

	if (savedState) {
		return JSON.parse(savedState)
	}

	const state = getGreatMemesArray()
	saveState(state)

	return state
}

export function saveState(state) {
	localStorage.setItem('memesData', JSON.stringify(state))
}