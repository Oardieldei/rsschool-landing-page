export function createMemeCard(memeItem) {
	const newCard = createCardWrapper()
	newCard.append(createCardImage(memeItem))
	newCard.append(createCardInfo(memeItem))

	return newCard
}

function createCardWrapper() {
	const newWrapper = document.createElement('div')
	newWrapper.classList.add('slider__card_wrapper')

	return newWrapper
}

function createCardImage(memeItem) {
	const newImageWrapper = document.createElement('div')
	newImageWrapper.classList.add('slider__card__img_wrapper')

	const newImage = document.createElement('img')
	newImage.classList.add('slider__card__img')
	newImage.src = `./image/memes/${memeItem.category}/${memeItem.name}`
	newImageWrapper.append(newImage)

	return newImageWrapper
}

function createCardInfo(memeItem) {
	const newInfoWrapper = document.createElement('div')
	newInfoWrapper.classList.add('slider__card__info_wrapper')

	const newTitle = document.createElement('h3')
	newTitle.classList.add('slider__card__info_title')
	newTitle.textContent = memeItem.title
	newInfoWrapper.append(newTitle)

	const newDescription = document.createElement('p')
	newDescription.classList.add('slider__card__info_description')
	newDescription.textContent = memeItem.description
	newInfoWrapper.append(newDescription)

	const newScore = document.createElement('p')
	newScore.classList.add('slider__card__info_score')

	const firstSpan = document.createElement('span')
	firstSpan.classList.add('slider__card__info_score__desc')
	firstSpan.textContent = 'Итоговый балл: '
	newScore.append(firstSpan)

	const secondSpan = document.createElement('span')
	secondSpan.classList.add('slider__card__info_score__points')
	const score = ((+memeItem.humor + memeItem.relatability + memeItem.impact) / 3).toFixed(1)
	secondSpan.textContent = score
	if (+score >= 7) {
		secondSpan.classList.add('green-score')
	} else if (+score >= 4) {
		secondSpan.classList.add('orange-score')
	} else {
		secondSpan.classList.add('red-score')
	}
	newScore.append(secondSpan)

	newInfoWrapper.append(newScore)

	return newInfoWrapper
}