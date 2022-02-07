const colorsEl = document.querySelectorAll(".color");
const slides = document.querySelectorAll(".img__container");
const gallery = document.querySelector(".gallery");
//carousel
let z_index = 2;
colorsEl.forEach((colorEl, index) => {
	const coord = slides[index].getBoundingClientRect().left;
	colorEl.addEventListener("click", function () {
		// change the coressponsing small phone
		gsap.to(gallery, { duration: 1, x: -coord, ease: "Power2.easeOut" });
		// change color of the close up image
		const selectedColor = colorEl.dataset.color;
		let currentColor = selectedColor;
		const closeUpImg = document.querySelector(`.${selectedColor}`);
		gsap.fromTo(
			closeUpImg,
			{ opacity: 0 },
			{ duration: 1, opacity: 1, ease: "Power2.easeInOut", zIndex: z_index },
		);
		z_index++;
	});
});
