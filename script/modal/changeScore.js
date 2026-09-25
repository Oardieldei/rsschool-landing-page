import {
	chooseColorClass,
	clearItemColors
} from "./changeModal.js"

const modal = document.querySelector('.modal')
const modalHumorText = modal.querySelector('.modal__info_humor__num')
const modalHumorInput = modal.querySelector('.modal__info_humor_input')
const modalRelatabilityText = modal.querySelector('.modal__info_relatability__num')
const modalRelatabilityInput = modal.querySelector('.modal__info_relatability_input')
const modalImpactText = modal.querySelector('.modal__info_impact__num')
const modalImpactInput = modal.querySelector('.modal__info_impact_input')
const modalScore = modal.querySelector('.modal__info_scores__num')

function changeItem(item) {
	let textItem
	let inputItem

	switch (item) {
		case 'humor':
			textItem = modalHumorText
			inputItem = modalHumorInput
			break;
		case 'relatability':
			textItem = modalRelatabilityText
			inputItem = modalRelatabilityInput
			break;
		case 'impact':
			textItem = modalImpactText
			inputItem = modalImpactInput
			break;
		default:
			break;
	}

	clearItemColors(textItem)
	textItem.textContent = inputItem.value
	textItem.classList.add(chooseColorClass(+inputItem.value))
}

function updateScore() {
	clearItemColors(modalScore)
	const score = ((+modalHumorInput.value + +modalRelatabilityInput.value + +modalImpactInput.value) / 3).toFixed(1)
	modalScore.textContent = score
	modalScore.classList.add(chooseColorClass(+score))
}

export function powerOnModalInputs() {
	modalHumorInput.addEventListener('input', () => {
		changeItem('humor')
		updateScore()
	})

	modalRelatabilityInput.addEventListener('input', () => {
		changeItem('relatability')
		updateScore()
	})

	modalImpactInput.addEventListener('input', () => {
		changeItem('impact')
		updateScore()
	})
}