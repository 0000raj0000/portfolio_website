function setDynamicHeight(){
	// Calculate the visible heihgt
	const visibleHeight = window.innerHeight;
	// Update the CSS variable
	document.documentElement.style.setProperty('--dynamic-height',`${visbleHeight}px`)
}

// Set the height on initial Load
setDynamicHeight();

// Update the height when the window is resized
window.addEventListener('resize',setDynamicHeight);