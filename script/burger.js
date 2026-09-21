const setMenuOpen = (checkbox, label, isOpen) => {
	checkbox.checked = isOpen
	document.body.classList.toggle('menu-open', isOpen)
	document.documentElement.classList.toggle('menu-open', isOpen)
	label?.setAttribute('aria-expanded', String(isOpen))
}

export function initBurger() {
	const checkbox = document.querySelector('.burger_toggle')
	const label = document.querySelector('.burger_btn')
	const header = document.querySelector('.header')
	const nav = document.querySelector('.nav')
	if (!checkbox || !header || !nav) return

	const updateHeaderHeight = () => {
		const height = header.getBoundingClientRect().height
		document.documentElement.style.setProperty('--header-height', `${height}px`)
	}

	checkbox.addEventListener('change', () => {
		setMenuOpen(checkbox, label, checkbox.checked)
	})

	nav.querySelectorAll('.nav__link').forEach((link) => {
		link.addEventListener('click', () => setMenuOpen(checkbox, label, false))
	})

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && checkbox.checked) {
			setMenuOpen(checkbox, label, false)
		}
	})

	window.addEventListener('resize', () => {
		updateHeaderHeight()
		if (window.innerWidth > 768 && checkbox.checked) {
			setMenuOpen(checkbox, label, false)
		}
	})

	updateHeaderHeight()
}