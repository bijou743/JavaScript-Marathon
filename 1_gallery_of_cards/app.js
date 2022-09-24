const slides = document.querySelectorAll('.slide')

for (let slide of slides) {
	slide.addEventListener('click', (event) => {
		clearActiveClasses()
		slide.classList.add('active')
	})
}

function clearActiveClasses() {
	const active = document.querySelector('.slide.active')
	active.classList.remove('active')
}

// ДЗ
// поменять фон, поменять картинки