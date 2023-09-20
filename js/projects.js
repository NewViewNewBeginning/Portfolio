"use strict";

const projectsData = [
	{
		title: "Early Endeavors in Web Design",
		image: "./media/icons/projects/pro1.webp",
		text: "Some description for the project.",
		link: "#",
	},
	{
		title: "Early Endeavors in Web Design",
		image: "./media/icons/projects/pro2.webp",
		text: "Some description for the project.",
		link: "#",
	},
	{
		title: "Early Endeavors in Web Design",
		image: "./media/icons/projects/pro3.webp",
		text: "Some description for the project.",
		link: "#",
	},
	{
		title: "Early Endeavors in Web Design",
		image: "./media/icons/projects/pro4.webp",
		text: "Some description for the project.",
		link: "#",
	},
	{
		title: "Early Endeavors in Web Design",
		image: "./media/icons/projects/pro5.webp",
		text: "Some description for the project.",
		link: "#",
	},
	{
		title: "Early Endeavors in Web Design",
		image: "./media/icons/projects/pro6.webp",
		text: "Some description for the project.",
		link: "#",
	},
];

document.addEventListener("DOMContentLoaded", () => {
	const body = document.body;
	const modal = document.getElementById("projectModal");
	const closeBtn = document.querySelector(".close-btn");
	const projects = document.querySelectorAll(".proj");

	projects.forEach((project, index) => {
		project.addEventListener("click", () => {
			document.getElementById("modalTitle").innerText =
				projectsData[index].title;
			document.getElementById("modalImage").src = projectsData[index].image;
			document.getElementById("modalText").innerText = projectsData[index].text;
			document.getElementById("modalLink").href = projectsData[index].link;
			modal.style.display = "block";
			body.style.overflow = "hidden"; // Prevent scrolling when modal is open
		});
	});

	closeBtn.addEventListener("click", () => {
		modal.style.display = "none";
		body.style.overflow = ""; // Allow scrolling when modal is closed
	});

	window.addEventListener("click", event => {
		if (event.target === modal) {
			modal.style.display = "none";
			body.style.overflow = ""; // Allow scrolling when modal is closed
		}
	});
});
