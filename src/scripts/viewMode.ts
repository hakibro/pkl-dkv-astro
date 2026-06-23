// View Mode Toggle Logic
// Switches between slider (paginated) and scroll (continuous) modes

let isScrollMode = false;

export function toggleViewMode(): void {
	const container = document.getElementById("slidesContainer");
	const toggleBtn = document.getElementById("viewModeToggle");

	if (!container || !toggleBtn) return;

	isScrollMode = !isScrollMode;

	if (isScrollMode) {
		// Scroll mode: show all slides vertically
		container.classList.remove("slider-mode");
		container.classList.add("scroll-mode");

		// Update button icon
		toggleBtn.innerHTML = '<i class="fa-solid fa-table-cells"></i>';

		// Show all slides
		const slides = document.querySelectorAll(".slide-frame");
		slides.forEach((slide) => {
			slide.classList.remove("inactive", "active");
		});
	} else {
		// Slider mode: show one slide at a time
		container.classList.remove("scroll-mode");
		container.classList.add("slider-mode");

		// Update button icon
		toggleBtn.innerHTML = '<i class="fa-solid fa-grip-lines"></i>';

		// Restore slide states
		const slides = document.querySelectorAll(".slide-frame");
		slides.forEach((slide, index) => {
			if (index === 0) {
				slide.classList.add("active");
				slide.classList.remove("inactive");
			} else {
				slide.classList.add("inactive");
				slide.classList.remove("active");
			}
		});
	}
}

export function initViewMode(): void {
	const toggleBtn = document.getElementById("viewModeToggle");
	if (toggleBtn) {
		toggleBtn.addEventListener("click", toggleViewMode);
	}
}
