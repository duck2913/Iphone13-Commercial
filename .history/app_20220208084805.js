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
		pin: true,
		scrub: true,
	},
});
tlIntro.fromTo(nav, { opacity: 1 }, { opacity: 0 });

//showing back the nav when we hit the second page
const tlIntroReverse = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: Power2.easeOut,
	},
	scrollTrigger: {
		trigger: ".second-page",
		start: "-10%",
		scrub: true,
	},
});
tlIntroReverse.to(nav, { opacity: 1 });

//second page
const tlSecond = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: Power2.easeOut,
	},
	scrollTrigger: {
		trigger: ".second-page",
		start: "-30%",
		end: "60%",
		scrub: true,
	},
});
tlSecond.fromTo(
	".highlight",
	{ color: "rgba(255, 255, 255, 0.5)" },
	{ color: "rgba(255, 255, 255, 1)", stagger: 2 },
	"<",
);
//hide the text that we already read
const tlSecondRemove = gsap.timeline({
	defaults: {
		duration: 0.75,
		ease: Power2.easeOut,
	},
	scrollTrigger: {
		trigger: ".second-page",
		start: "-10%",
		end: "50%",
		scrub: true,
		markers: true,
	},
});
tlSecondRemove.to(".highlight", { color: "rgba(255, 255, 255, 0.5)", stagger: 3 });

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
