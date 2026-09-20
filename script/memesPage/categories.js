import { fillContaner } from "./fillContainer.js"

export function categoriesOnFire() {
	const categoriegsItem = document.querySelector('.categories')

	const tabs = categoriegsItem.querySelectorAll('.category')

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			tabs.forEach(anytab => {
				anytab.classList.remove('category_active')
			})
			tab.classList.add('category_active')
			fillContaner(tab.textContent)
		})
	})
}