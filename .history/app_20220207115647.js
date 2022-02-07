const colorsEl = document.querySelectorAll(".color");
const slides = document.querySelectorAll(".img__container");

let z_index = 2;
colorsEl.forEach((colorEl, index) => {
	const coord = slides[index].getBoundingClientRect().left;
	colorEl.addEventListener("click", function () {
		const color = colorEl.dataset.color;
		const closeUpImg = document.querySelector(`.${color}`);
		console.log("🚀 -> closeUpImg", closeUpImg);
		gsap.fromTo(
			closeUpImg,
			{ opacity: 0 },
			{ duration: 1, opacity: 1, ease: "Power2.easeOut", zIndex: z_index },
		);
	});
});
