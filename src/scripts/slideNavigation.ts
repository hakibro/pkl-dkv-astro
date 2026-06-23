// Slide Navigation Logic
// Handles slide transitions, counter updates, and keyboard navigation

let currentSlide = 1;
const totalSlides = 10;

export function changeSlide(direction: number): void {
	const slides = document.querySelectorAll(".slide-frame");
	const currentElement = slides[currentSlide - 1];

	currentSlide += direction;

	// Wrap around
	if (currentSlide > totalSlides) currentSlide = 1;
	if (currentSlide < 1) currentSlide = totalSlides;

	// Update active states
	slides.forEach((slide, index) => {
		if (index === currentSlide - 1) {
			slide.classList.remove("inactive");
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
			slide.classList.add("inactive");
		}
	});

	updateCounter();
	updateDots();
}

export function jumpToSlide(slideNumber: number): void {
	if (slideNumber < 1 || slideNumber > totalSlides) return;

	const slides = document.querySelectorAll(".slide-frame");
	currentSlide = slideNumber;

	slides.forEach((slide, index) => {
		if (index === currentSlide - 1) {
			slide.classList.remove("inactive");
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
			slide.classList.add("inactive");
		}
	});

	updateCounter();
	updateDots();
}

function updateCounter(): void {
	const counter = document.getElementById("slideCounter");
	if (counter) {
		counter.textContent = `${String(currentSlide).padStart(2, "0")}/${String(totalSlides).padStart(2, "0")}`;
	}
}

function updateDots(): void {
	const dots = document.querySelectorAll("#slideDots button");
	dots.forEach((dot, index) => {
		if (index === currentSlide - 1) {
			dot.classList.add("active-dot", "bg-neonLime", "w-6");
		} else {
			dot.classList.remove("active-dot", "bg-neonLime", "w-6");
		}
	});
}

export function initDots(): void {
	const dotsContainer = document.getElementById("slideDots");
	if (!dotsContainer) return;

	dotsContainer.innerHTML = "";

	for (let i = 1; i <= totalSlides; i++) {
		const dot = document.createElement("button");
		dot.className =
			"w-2 h-2 rounded-full bg-white/20 hover:bg-white/40 transition-all";
		if (i === currentSlide) {
			dot.classList.add("active-dot", "bg-neonLime", "w-6");
		}
		dot.onclick = () => jumpToSlide(i);
		dotsContainer.appendChild(dot);
	}
}

// Keyboard navigation
export function initKeyboardNav(): void {
	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowRight" || e.key === "ArrowDown") {
			changeSlide(1);
		} else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
			changeSlide(-1);
		}
	});
}

// Initialize on load
export function initSlideNavigation(): void {
	updateCounter();
	initDots();
	initKeyboardNav();
}
