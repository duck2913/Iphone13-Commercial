const colorsEl = document.querySelectorAll(".color");
const nav = document.querySelector("nav");
const slides = document.querySelectorAll(".img__container");
const gallery = document.querySelector(".gallery");

// first page
const tlIntro = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: Power2.easeOut,
	},
	scrollTrigger: {
		trigger: ".first-page",
		start: "0%",
		end: "70%",
		scrub: true,
	},
});
tlIntro.fromTo(nav, { opacity: 1 }, { opacity: 0 });

//second page
const tlSecond = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: Power2.easeOut,
	},
	scrollTrigger: {
		trigger: ".second-page",
		start: "0%",
		end: "30%",
		scrub: true,
	},
});

//carousel
let z_index = 2;
let currentColor = "blue";

colorsEl.forEach((colorEl, index) => {
	const coord = slides[index].getBoundingClientRect().left;
	colorEl.addEventListener("click", function () {
		// change the coressponsing small phone
		gsap.to(gallery, { duration: 1, x: -coord, ease: "Power2.easeOut" });
		// change color of the close up image
		const selectedColor = colorEl.dataset.color;
		if (currentColor === selectedColor) return;
		currentColor = selectedColor;
		const closeUpImg = document.querySelector(`.${selectedColor}`);
		gsap.fromTo(
			closeUpImg,
			{ opacity: 0 },
			{ duration: 1, opacity: 1, ease: "Power2.easeInOut", zIndex: z_index },
		);
		z_index++;
	});
});
