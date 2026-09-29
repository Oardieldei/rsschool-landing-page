const modal = document.querySelector('.modal')
const modalImage = modal.querySelector('.modal__img')
const modalTitle = modal.querySelector('.modal__info_title')
const modalDescription = modal.querySelector('.modal__info_description')
const modalHumorText = modal.querySelector('.modal__info_humor__num')
const modalHumorInput = modal.querySelector('.modal__info_humor_input')
const modalRelatabilityText = modal.querySelector('.modal__info_relatability__num')
const modalRelatabilityInput = modal.querySelector('.modal__info_relatability_input')
const modalImpactText = modal.querySelector('.modal__info_impact__num')
const modalImpactInput = modal.querySelector('.modal__info_impact_input')
const modalScore = modal.querySelector('.modal__info_scores__num')

export function chooseColorClass(value) {
	if (+value >= 7) {
		return 'green-score'
	} else if (+value >= 4) {
		return 'orange-score'
	} else {
		return 'red-score'
	}
}

export function clearItemColors(item) {
	item.classList.remove('green-score')
	item.classList.remove('orange-score')
	item.classList.remove('red-score')
}

function clearAllColors() {
	clearItemColors(modalHumorText)
	clearItemColors(modalRelatabilityText)
	clearItemColors(modalImpactText)
	clearItemColors(modalScore)
}

export function updateModal(memeItem) {
	clearAllColors()

	modalImage.src = `./image/memes/${memeItem.category}/${memeItem.name}`
	modalImage.alt = `this is meme named \"${memeItem.title}\"`
	modalTitle.textContent = memeItem.title
	modalDescription.textContent = `Мем из категории ${memeItem.category}.`

	modalHumorText.textContent = memeItem.humor
	modalHumorText.classList.add(chooseColorClass(+memeItem.humor))
	modalHumorInput.value = memeItem.humor
	modalRelatabilityText.textContent = memeItem.relatability
	modalRelatabilityText.classList.add(chooseColorClass(+memeItem.relatability))
	modalRelatabilityInput.value = memeItem.relatability
	modalImpactText.textContent = memeItem.impact
	modalImpactText.classList.add(chooseColorClass(+memeItem.impact))
	modalImpactInput.value = memeItem.impact

	const score = ((+memeItem.humor + +memeItem.relatability + +memeItem.impact) / 3).toFixed(1)
	modalScore.textContent = score
	modalScore.classList.add(chooseColorClass(+score))
}