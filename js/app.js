// Footer Date

document.addEventListener("DOMContentLoaded", function () {
	const yearElement = document.getElementById("currentYear");
	const currentYear = new Date().getFullYear();
	yearElement.textContent = currentYear;
});
