// Footer Date

document.addEventListener("DOMContentLoaded", function () {
	const yearElement = document.getElementById("currentYear");
	const currentYear = new Date().getFullYear();
	yearElement.textContent = currentYear;
});

// Get the header element
let header = document.querySelector("header");

// Add an event listener to the window's scroll event
window.addEventListener("scroll", function () {
	// If the window has been scrolled more than 0 pixels, add styles
	if (window.scrollY > 20) {
		header.style.background = "rgba(0, 0, 0, 0.4)";
		header.style.backdropFilter = "blur(7px)";
	} else {
		header.style.background = "none";
		header.style.backdropFilter = "none";
	}
});

// hamburger menu

document.querySelector(".fa-bars").addEventListener("click", function () {
	document.querySelector(".main-nav").classList.add("open");
	this.style.display = "none";
	document.querySelector(".fa-xmark").style.display = "block";
});
document.querySelector(".fa-xmark").addEventListener("click", function () {
	document.querySelector(".main-nav").classList.remove("open");
	this.style.display = "none";
	document.querySelector(".fa-bars").style.display = "block";
});

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
	let scrollTop = window.scrollY || document.documentElement.scrollTop;

	// Jeśli przewijanie następuje w dół
	if (document.querySelector(".main-nav").classList.contains("open")) {
		document.querySelector(".fa-xmark").click(); // "Kliknij" ikonę x, aby zamknąć menu
	}
	lastScrollTop = scrollTop;
});
function checkWindowWidth() {
	// Jeśli szerokość okna jest większa niż 768px
	if (window.innerWidth >= 768) {
		document.querySelector(".fa-bars").style.display = ""; // Usuń własność display
		document.querySelector(".fa-xmark").style.display = "";
	}
}

checkWindowWidth();

window.addEventListener("resize", checkWindowWidth);

// Skills carousel

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
	"--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
	marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// onscroll animation
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		}
	});
});
const hiddenElements = document.querySelectorAll(".wrapper");
hiddenElements.forEach(el => observer.observe(el));
