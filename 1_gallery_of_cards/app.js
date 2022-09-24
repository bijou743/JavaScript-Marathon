function slidesPlugin(activeSlide = 0) {
	const slides = document.querySelectorAll('.slide')

	slides[activeSlide].classList.add("active")

	for (let slide of slides) {
		slide.addEventListener('click', (event) => {
			clearActiveClasses()
			slide.classList.add('active')
		})
	}

	function clearActiveClasses() {
		const active = document.querySelector('.slide.active')
		if(active) active.classList.remove('active')
	}
}

slidesPlugin(4)