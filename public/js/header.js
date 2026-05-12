;(function () {
	'use strict'

	const menuId = 'astro-header-drawer'
	const buttonId = 'astro-header-drawer-button'
	const hiddenClass = 'translate-x-full'

	let initialized = false
	let menuButton = null
	let menu = null

	function setMenuOpen(isOpen) {
		if (!menu || !menuButton) {
			return
		}

		menu.classList.toggle(hiddenClass, !isOpen)
		menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
	}

	function isMenuOpen() {
		return menu ? !menu.classList.contains(hiddenClass) : false
	}

	function handleButtonClick(event) {
		event.stopPropagation()
		setMenuOpen(!isMenuOpen())
	}

	function handleDocumentClick(event) {
		if (!menu || !menuButton || !isMenuOpen()) {
			return
		}

		const target = event.target
		if (target instanceof Node && (menu.contains(target) || menuButton.contains(target))) {
			return
		}

		setMenuOpen(false)
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			setMenuOpen(false)
		}
	}

	function initializeHeader() {
		menu = document.getElementById(menuId)
		menuButton = document.getElementById(buttonId)

		if (!menu || !menuButton) {
			return
		}

		if (initialized) {
			return
		}

		menuButton.addEventListener('click', handleButtonClick)
		document.addEventListener('click', handleDocumentClick)
		document.addEventListener('keydown', handleKeydown)
		initialized = true
	}

	function setupHeader() {
		initializeHeader()

		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initializeHeader, { once: true })
		}

		window.addEventListener('load', initializeHeader, { once: true })
		document.addEventListener('astro:after-swap', initializeHeader)
	}

	setupHeader()
})()
