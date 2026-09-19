const changeTheme = (bodyItem) => {
	if (bodyItem.classList.contains('light-theme')) {
		bodyItem.classList.remove('light-theme')
		bodyItem.classList.add('dark-theme')
		updateLS('dark-theme')
	} else {
		bodyItem.classList.add('light-theme')
		bodyItem.classList.remove('dark-theme')
		updateLS('light-theme')
	}
}

const updateLS = (newTheme) => {
	localStorage.setItem('currentTheme', newTheme)
}

const getSavedTheme = () => {
	if (localStorage.getItem('currentTheme')) {
		return localStorage.getItem('currentTheme')
	} else {
		updateLS('light-theme')
	}
}

export function makeThemesGreatAgain() {
	const bodyItem = document.body
	const themeItem = document.querySelector('.theme_btn')

	bodyItem.classList.add(getSavedTheme())

	themeItem.addEventListener('click', () => {
		changeTheme(bodyItem)
	})
}