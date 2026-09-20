import { getState } from "../memesData/state.js"
import { createMemeCard } from "../meme-card.js"

const CARDS_PER_PAGE = 8

let currentType = 'all'
let visibleCount = CARDS_PER_PAGE

export function fillContaner(type, reset = true) {
	const memesContent = document.querySelector('.memes__wrapper')

	if (reset) {
		currentType = type
		visibleCount = CARDS_PER_PAGE
	}

	memesContent.innerHTML = ''

	const memesData = getState()

	const filteredMemes = type === 'all'
		? memesData
		: memesData.filter(meme => meme.category === type)

	const visibleMemes = filteredMemes.slice(0, visibleCount)

	visibleMemes.forEach(meme => {
		const newCard = createMemeCard(meme)
		memesContent.append(newCard)
	})

	updateLoadMoreButton(filteredMemes.length)
}

function updateLoadMoreButton(totalCount) {
	const button = document.querySelector('.more')

	button.hidden = visibleCount >= totalCount
}

document.querySelector('.more').addEventListener('click', () => {
	visibleCount += CARDS_PER_PAGE
	fillContaner(currentType, false)
})