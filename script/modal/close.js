const bodyItem = document.body
const modalBG = document.querySelector('.modal')
const modalCloseItem = modalBG.querySelector('.modal__close')

function closeModal() {
	bodyItem.classList.remove('modal-open')
}

function handleModalClick(event) {
	if (event.target === modalBG) {
		closeModal()
	}
}

function handleKeydown(event) {
	if (
		event.key === 'Escape' &&
		bodyItem.classList.contains('modal-open')
	) {
		closeModal()
	}
}

export function powerOnModalClosing() {
	modalBG.addEventListener('click', handleModalClick)
	modalCloseItem.addEventListener('click', closeModal)
	document.addEventListener('keydown', handleKeydown)
}