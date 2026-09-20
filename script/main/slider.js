import { getState } from "../memesData/state.js"
import { createMemeCard } from "../meme-card.js"

export function fillSlider() {
	const sliderContent = document.querySelector('.slider__content')
	const sliderItems = sliderContent.querySelector('.slider__items_wrapper')

	const arrowsItems = document.querySelector('.slider__arrows')
	const nextBtn = arrowsItems.children[1]
	const prevBtn = arrowsItems.children[0]

	const gap = parseFloat(getComputedStyle(sliderItems).columnGap)
	const slideWidth = sliderContent.clientWidth
	const step = slideWidth + gap

	const memesData = getState()

	for (let i = 0; i < 5; i++) {
		const newCard = createMemeCard(memesData[i])
		sliderItems.append(newCard)
	}

	const slidesCount = sliderItems.children.length

	function goToSlide(index) {
		sliderContent.scrollTo({
			left: index * step,
			behavior: 'smooth'
		})
	}

	nextBtn.addEventListener('click', () => {
		const currentIndex = Math.round(
			sliderContent.scrollLeft / step
		)

		const nextIndex = (currentIndex + 1) % slidesCount

		goToSlide(nextIndex)
	})

	prevBtn.addEventListener('click', () => {
		const currentIndex = Math.round(
			sliderContent.scrollLeft / step
		)

		const prevIndex = (currentIndex - 1 + slidesCount) % slidesCount

		goToSlide(prevIndex)
	})
}