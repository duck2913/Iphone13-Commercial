const colorsEl = document.querySelectorAll(".color");
const slides = document.querySelectorAll(".img__container");
const gallery = document.querySelector(".gallery");
//carousel
let z_index = 2;
colorsEl.forEach((colorEl, index) => {
	const coord = slides[index].getBoundingClientRect().left;
	colorEl.addEventListener("click", function () {
		// change color of the close up image
		const color = colorEl.dataset.color;
		const closeUpImg = document.querySelector(`.${color}`);
		if (color === closeUpImg.dataset.color) return;
		console.log("🚀 -> closeUpImg", closeUpImg);
		gsap.fromTo(
			closeUpImg,
			{ opacity: 0 },
			{ duration: 1, opacity: 1, ease: "Power2.easeInOut", zIndex: z_index },
		);
		z_index++;
		// change the coressponsing small phone
	});
});
