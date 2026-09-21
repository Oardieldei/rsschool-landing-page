import { fillContaner } from "./fillContainer.js"

const categories = document.querySelectorAll('.category')

export function checkWindowSize() {
	window.addEventListener('resize', () => {
		let activeText = Array.from(categories).find(el => el.classList.contains('category_active'))?.textContent
		fillContaner(activeText)
	})
}



