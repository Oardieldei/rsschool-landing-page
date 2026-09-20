import { getState } from "../memesData/state.js"
import { createMemeCard } from "../meme-card.js"

export function fillContaner(type) {
	const memesContent = document.querySelector('.memes__wrapper')
	memesContent.innerHTML = ''

	const memesData = getState()

	if (type === 'all') {
		memesData.forEach(meme => {
			const newCard = createMemeCard(meme)
			memesContent.append(newCard)
		})
		return
	}

	memesData.forEach(meme => {
		if (meme.category === type) {
			const newCard = createMemeCard(meme)
			memesContent.append(newCard)
		}
	})
}