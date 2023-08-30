// Footer Date

document.addEventListener("DOMContentLoaded", function () {
	const yearElement = document.getElementById("currentYear");
	const currentYear = new Date().getFullYear();
	yearElement.textContent = currentYear;
});

// Parallax to 3 sections

// document.addEventListener("scroll", function () {
// 	let sections = document.querySelectorAll(".parallax-section");

// 	Array.prototype.forEach.call(sections, function (section) {
// 		let windowScrollTop = window.scrollY,
// 			elementOffsetTop = section.offsetTop,
// 			windowHeight = window.innerHeight,
// 			elementHeight = section.offsetHeight,
// 			viewPortTop = windowScrollTop - elementOffsetTop + windowHeight,
// 			viewPortBottom = windowScrollTop + windowHeight - elementOffsetTop,
// 			backgroundPosition = 0;

// 		// Check if the element is in the viewport
// 		if (
// 			(viewPortTop > 0 && viewPortTop < elementHeight) ||
// 			(viewPortBottom > 0 && viewPortBottom < windowHeight)
// 		) {
// 			backgroundPosition = -(
// 				(windowScrollTop - elementOffsetTop) *
// 				parseFloat(section.getAttribute("data-speed"))
// 			);
// 		}

// 		section.style.backgroundPosition = "center " + backgroundPosition + "px";
// 	});
// });
