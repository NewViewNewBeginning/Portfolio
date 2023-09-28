"use strict";

document.addEventListener("DOMContentLoaded", function () {
	// --------------------
	// Footer Date
	// --------------------

	const yearElement = document.getElementById("currentYear");
	const currentYear = new Date().getFullYear();
	yearElement.textContent = currentYear;

	// --------------------
	// Header Effects on Scroll
	// --------------------

	let header = document.querySelector("header");

	window.addEventListener("scroll", function () {
		if (window.scrollY > 20) {
			header.style.background = "rgba(0, 0, 0, 0.7)";
			header.style.backdropFilter = "blur(8px)";
		} else {
			header.style.background = "none";
			header.style.backdropFilter = "none";
		}
	});

	// --------------------
	// Hamburger Menu Toggle
	// --------------------

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

	// Close menu on scroll down
	let lastScrollTop = 0;
	window.addEventListener("scroll", function () {
		let scrollTop = window.scrollY || document.documentElement.scrollTop;

		if (document.querySelector(".main-nav").classList.contains("open")) {
			document.querySelector(".fa-xmark").click();
		}

		lastScrollTop = scrollTop;
	});

	function checkWindowWidth() {
		if (window.innerWidth >= 768) {
			document.querySelector(".fa-bars").style.display = "";
			document.querySelector(".fa-xmark").style.display = "";
		}
	}

	checkWindowWidth();
	window.addEventListener("resize", checkWindowWidth);

	// --------------------
	// Skills Carousel
	// --------------------

	const root = document.documentElement;
	const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
		"--marquee-elements-displayed"
	);
	const marqueeContent = document.querySelector("ul.marquee-content");

	root.style.setProperty("--marquee-elements", marqueeContent.children.length);

	for (let i = 0; i < marqueeElementsDisplayed; i++) {
		marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
	}

	// --------------------
	// On-scroll Animations
	// --------------------

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
			}
		});
	});

	const hiddenElements = document.querySelectorAll(".wrapper");
	hiddenElements.forEach(el => observer.observe(el));
});

// Form Validation

document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");

	form.addEventListener("submit", event => {
		let isValid = true; // This variable will track the overall form validation state

		// Name, Surname, and Subject Validation
		const textInputs = form.querySelectorAll('input[type="text"]');
		textInputs.forEach(input => {
			const label = form.querySelector(`label[for="${input.id}"]`);
			if (/^[a-zA-Z][a-zA-Z\s]*$/.test(input.value.trim()) === false) {
				input.placeholder = "Invalid input !";
				input.value = "";
				label.classList.add("error");
				isValid = false;
			} else {
				label.classList.remove("error");
			}
		});

		// Email Validation
		const emailInput = form.querySelector('input[type="email"]');
		const emailLabel = form.querySelector('label[for="email"]');
		const emailPattern = /^[^\W\d_](?:[a-zA-Z\d._-]+)@[a-zA-Z\d.-]{4,}$/;
		if (
			emailPattern.test(emailInput.value.trim()) === false ||
			emailInput.value.trim().length < 10
		) {
			emailInput.placeholder = "Invalid Email !";
			emailInput.value = "";
			emailLabel.classList.add("error");
			isValid = false;
		} else {
			emailLabel.classList.remove("error");
		}

		// Message Validation
		const messageTextarea = form.querySelector("textarea");
		const messageLabel = form.querySelector('label[for="message"]');
		if (messageTextarea.value.trim().length === 0) {
			messageTextarea.placeholder = "Message cannot be empty";
			messageLabel.classList.add("error");
			isValid = false;
		} else {
			messageLabel.classList.remove("error");
		}

		if (isValid === false) {
			event.preventDefault(); // Prevent form submission if there are validation errors
		}
	});
});
