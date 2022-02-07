const colors = document.querySelectorAll(".color");
const slides = document.querySelectorAll(".img__container");

colors.forEach((color, index) => {
	const coord = slides[index].getBoundingClientRect().left;
    color.addEventListener("click", function () {
        
    });
});
