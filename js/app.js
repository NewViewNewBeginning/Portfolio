// Footer Date

document.addEventListener("DOMContentLoaded", function () {
	const yearElement = document.getElementById("currentYear");
	const currentYear = new Date().getFullYear();
	yearElement.textContent = currentYear;
});

// Get the header element
let header = document.querySelector("header");
console.log(header);

// Add an event listener to the window's scroll event
window.addEventListener("scroll", function () {
	// If the window has been scrolled more than 0 pixels, add styles
	if (window.scrollY > 0) {
		header.style.background = "rgba(0, 0, 0, 0.4)";
		header.style.backdropFilter = "blur(7px)";
	} else {
		header.style.background = "none";
		header.style.backdropFilter = "none";
	}
});

// hamburger

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

let lastScrollTop = 0; // Zmienna przechowująca ostatnią pozycję skrolowania

window.addEventListener("scroll", function () {
	let scrollTop = window.scrollY || document.documentElement.scrollTop;

	// Jeśli przewijanie następuje w dół
	if (document.querySelector(".main-nav").classList.contains("open")) {
		document.querySelector(".fa-xmark").click(); // "Kliknij" ikonę x, aby zamknąć menu
	}

	// Aktualizuj ostatnią pozycję skrolowania
	lastScrollTop = scrollTop;
});
function checkWindowWidth() {
	// Jeśli szerokość okna jest większa niż 768px
	if (window.innerWidth >= 768) {
		document.querySelector(".fa-bars").style.display = ""; // Usuń własność display
		document.querySelector(".fa-xmark").style.display = "";
	}
}

// Wywołaj funkcję po załadowaniu strony
checkWindowWidth();

// Dodaj zdarzenie resize dla okna
window.addEventListener("resize", checkWindowWidth);
