(function() {
	'use strict';
	
	console.log('Header script loading from external file...');
	
	let clickHandler = null;
	let initAttempts = 0;
	const maxAttempts = 50; // 5 seconds max
	
	function createClickHandler() {
		return function(event) {
			const menu = document.getElementById('astro-header-drawer');
			const menuButton = document.getElementById('astro-header-drawer-button');
			
			if (!menu || !menuButton) {
				console.warn('Header elements not found in click handler');
				return;
			}
			
			const isClickInside = 
				menu.contains(event.target) || 
				menuButton.contains(event.target);

			if (isClickInside) {
				console.log('Toggle menu from external script');
				menu.classList.toggle('translate-x-96');
			} else {
				console.log('Close menu from external script');
				menu.classList.add('translate-x-96');
			}
		};
	}
	
	function initializeHeader() {
		console.log('Initializing header from external file, attempt:', initAttempts + 1);
		
		const menu = document.getElementById('astro-header-drawer');
		const menuButton = document.getElementById('astro-header-drawer-button');
		
		if (!menu || !menuButton) {
			initAttempts++;
			if (initAttempts < maxAttempts) {
				console.warn('Header elements not ready, retrying...');
				setTimeout(initializeHeader, 100);
				return;
			} else {
				console.error('Failed to initialize header after', maxAttempts, 'attempts');
				return;
			}
		}
		
		console.log('Header elements found, setting up click handler from external file');
		
		// Remove existing handler if it exists
		if (clickHandler) {
			document.removeEventListener('click', clickHandler);
		}
		
		// Create and add new handler
		clickHandler = createClickHandler();
		document.addEventListener('click', clickHandler);
		
		console.log('Header initialized successfully from external file');
		
		// Reset attempts counter for next time
		initAttempts = 0;
	}
	
	// Initialize immediately
	initializeHeader();
	
	// Also initialize on DOM ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initializeHeader);
	}
	
	// And on window load
	window.addEventListener('load', initializeHeader);
	
	// Expose for debugging
	window.externalHeaderScript = {
		init: initializeHeader,
		attempts: function() { return initAttempts; }
	};
	
})(); 