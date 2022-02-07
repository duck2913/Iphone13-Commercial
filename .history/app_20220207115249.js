const colorsEl = document.querySelectorAll(".color");
const slides = document.querySelectorAll(".img__container");

colorsEl.forEach((colorEl, index) => {
	const coord = slides[index].getBoundingClientRect().left;
	colorEl.addEventListener("click", function () {
		const color = colorEl.dataset.color;
		const rightImg = document.querySelector(`.${color}`);
		gsap.to(rightImg, { duration: 0.75, opacity: 1 });
	});
});
