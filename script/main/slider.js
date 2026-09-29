import { memesInfo } from "../memes.js"
import { createMemeCard } from "../meme-card.js"

export function fillSlider() {
	const sliderContent = document.querySelector('.slider__content')
	const sliderItems = sliderContent.querySelector('.slider__items_wrapper')

	const arrowsItems = document.querySelector('.slider__arrows')
	const nextBtn = arrowsItems.children[1]
	const prevBtn = arrowsItems.children[0]

	const memesData = memesInfo

	const randomCardsIndexes = getRandomNumbers(memesData.length)

	for (let i = 0; i < 5; i++) {
		const newCard = createMemeCard(memesData[randomCardsIndexes[i] - 1])
		sliderItems.append(newCard)
	}

	const slidesCount = sliderItems.children.length
	let currentIndex = 0

	function goToSlide(index) {
		currentIndex = index

		sliderContent.scrollTo({
			left: sliderItems.children[index].offsetLeft,
			behavior: 'smooth'
		})
	}

	nextBtn.addEventListener('click', () => {
		const nextIndex = (currentIndex + 1) % slidesCount
		goToSlide(nextIndex)
	})

	prevBtn.addEventListener('click', () => {
		const prevIndex = (currentIndex - 1 + slidesCount) % slidesCount
		goToSlide(prevIndex)
	})

	window.addEventListener('resize', () => {
		sliderContent.scrollTo({
			left: sliderItems.children[currentIndex].offsetLeft,
			behavior: 'instant'
		})
	})
}

function getRandomNumbers(n) {
	if (n < 5) {
		return
	}

	const uniqueNumbers = new Set()

	while (uniqueNumbers.size < 5) {
		const random = Math.floor(Math.random() * n) + 1
		uniqueNumbers.add(random)
	}

	return Array.from(uniqueNumbers)
}