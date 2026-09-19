import {
	memesCategories,
	memesTitles,
	memesDescriptions
} from "./memes.js"

import { getMemesObject } from "./getMemesInfo.js"

function getRandomItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function fillMemesObject(memes) {
	const memesData = getMemesObject(memes)

	return memesData.map(meme => ({
		...meme,
		title: getRandomItem(memesTitles),
		description: getRandomItem(memesDescriptions),
		humor: 5,
		relatability: 5,
		impact: 5
	}))
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

export function getGreatMemesArray() {
	return shuffle(fillMemesObject(memesCategories))
}