const colorsEl = document.querySelectorAll(".color");
const slides = document.querySelectorAll(".img__container");

let z_index = 2;
colorsEl.forEach((colorEl, index) => {
	const coord = slides[index].getBoundingClientRect().left;
	colorEl.addEventListener("click", function () {
		const color = colorEl.dataset.color;
		const rightImg = document.querySelector(`.${color}`);
		gsap.fromTo(rightImg, { opacity: 0 }, { duration: 1, opaicty: 1, ease: "Power2.easeOUt" });
	});
});
