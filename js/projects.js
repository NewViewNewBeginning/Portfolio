"use strict"; // Enforces strict mode to catch common coding errors

// Array holding the project data
const projectsData = [
	// Each object represents a project with its details
	{
		title: "Early Endeavors in Web Design",
		image: "./media/icons/projects/pro1.webp",
		text: "As one of my very first forays into the realm of web development, this project holds a special place in my portfolio. Built under the mentorship of DevMentor.pl, it stands as a testament to my foundational skills and eager approach to learning. Despite being an early endeavor, the website showcases my commitment to creating responsive designs, aptly optimized for various devices through the use of distinct CSS files. My hands-on experience with SVGs and image integrations ensures visuals that are both crisp and scalable. Furthermore, the addition of the gradient effect speaks volumes about my budding creativity, and my ambition to elevate even my initial projects with touches of contemporary aesthetics.",
		link: "https://newviewnewbeginning.github.io/task-html-and-css-rwd/",
		ghLink: "https://github.com/NewViewNewBeginning/task-html-and-css-rwd",
	},
	{
		title: "Juventus Football Club – A Responsive Tribute",
		image: "./media/icons/projects/pro2.webp",
		text: "Diving deeper into the world of Responsive Web Design, my second project is dedicated to the renowned Juventus Football Club. This website, crafted as a tribute, brings together various elements of web development, notably the integration of iframes and the use of responsive imagery. Visitors are treated to a dynamic grid gallery showcasing players, each enlivened with animations upon hovering. Complementing the user journey is an elegantly designed contact form, where gradients seamlessly merge with images, encapsulating the spirit of the club. Proudly completed for CodeInstitute, the project includes a comprehensive README detailing every intricate aspect of its development. Earning merit for this endeavor was not only a validation of my skills but also an incentive to continually refine and expand my craft.",
		link: "https://newviewnewbeginning.github.io/project-01-CI/index.html",
		ghLink: "https://github.com/NewViewNewBeginning/project-01-CI",
	},
	{
		title: "Versatile Unit Converter with CodeInstitute",
		image: "./media/icons/projects/pro3.webp",
		text: "My second project for CodeInstitute, which garnered a merit grade, is an embodiment of my explorations into the fundamentals of JavaScript, especially in the domains of Object-Oriented Programming (OOP) and DOM manipulation. The Unit Converter stands as a practical tool, facilitating the conversion of essential metrics such as temperature, length, and weight. Every function in this project underscores my growing mastery of JavaScript, turning theoretical knowledge into tangible, user-centric applications. The accompanying README file provides an in-depth dive into the project's architecture and thought process, ensuring transparency and showcasing my dedication to comprehensive documentation. Through this endeavor, I've not only honed my JavaScript skills but also addressed a real-world need with precision and user-friendliness.",
		link: "https://newviewnewbeginning.github.io/Project-02-Code-Institute/?fbclid=IwAR08GFwaCjcxqDqrs54Y8vWdcBJFv4CljcEI5Zlqa5LEJ3RPSNeGcV05ELM",
		ghLink: "https://github.com/NewViewNewBeginning/Project-02-Code-Institute",
	},
	{
		title: "CCTV Ordering System - Python Meets Gspread",
		image: "./media/icons/projects/pro4.webp",
		text: "A blend of functionality and technological integration, my third project with CodeInstitute, for which I was awarded a merit grade, is a CCTV Ordering System meticulously crafted in Python. Delving into the realms of cloud integration, this application seamlessly interfaces with Google's gspread, ensuring real-time data retrieval and storage. My endeavors in this project were multi-pronged: mastering Python's robust capabilities, establishing a solid connection to gspread for efficient data management, and deploying the final application on Heroku, thus making it accessible online for a broader audience. This project not only showcases my growing proficiency in Python and cloud integrations but also my ability to present robust backend developments in a user-friendly manner through a web browser interface.",
		link: "https://cctv-and-tv-ordering-sys.herokuapp.com/?fbclid=IwAR3jjU2Z52_L418t-HViQGT0uDmrBUHPOKPhCnkGTyKiT4vwA1epErqU6D0",
		ghLink: "https://github.com/NewViewNewBeginning/Project-03-Code-Institute",
	},
	{
		title: "Find-The-Beat - Musical Memory Game",
		image: "./media/icons/projects/pro5.webp",
		text: "Find-The-Beat is a unique blend of music and memory, conceived during a hackathon challenge. I took the lead in designing the visual and structural elements, handling the HTML and CSS, while also contributing to the JavaScript component. The game introduces players to a board embedded with beats, challenging their memory retention capabilities. Features like varying levels of difficulty and a reset option add layers of engagement. Though the game isn't fully operational, the journey of bringing it to life offered invaluable insights into collaborative development and problem-solving.",
		link: "https://newviewnewbeginning.github.io/Find-The-Beat/",
		ghLink:
			"https://github.com/NewViewNewBeginning/Find-The-Beat/settings/pages",
	},
	{
		title: "Sip 'N Relax - The Virtual Coffee Experience",
		image: "./media/icons/projects/pro6.webp",
		text: "Sip 'N Relax embodies my most recent venture, meticulously crafted as part of the CDETB Traineeship program. Birthed from a blank canvas, this project encapsulates the entire lifecycle: from conceptualization and design to construction. Designed to mirror the essence of a real-world coffee shop, the website offers visitors an authentic experience, complete with an operational contact form and accurate, up-to-date information. Through this endeavor, I further honed my proficiency in HTML, CSS, and JavaScript. The journey also introduced me to the nuances of deploying live on a server and integrating PHP functionalities, marking a significant milestone in my continuous learning trajectory.",
		link: "https://newviewnewbeginning.github.io/SipNRelax/",
		ghLink: "https://github.com/NewViewNewBeginning/SipNRelax",
	},
];

// Event listener to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
	const body = document.body;
	const modal = document.getElementById("projectModal");
	const closeBtn = document.querySelector(".close-btn");
	const projects = document.querySelectorAll(".proj");
	const toggleTextBtn = document.getElementById("toggleTextBtn");
	const textSpan = document.getElementById("textSpan");

	// Event listener for the Read More/Read Less button
	toggleTextBtn.addEventListener("click", () => {
		// Checking if the text is currently truncated
		const isTruncated = textSpan.getAttribute("data-truncated") === "true";

		if (isTruncated) {
			// If truncated, display full text and change button text to 'Read Less'
			textSpan.innerText = textSpan.getAttribute("data-full-text");
			toggleTextBtn.innerText = "...Read Less";
			textSpan.setAttribute("data-truncated", "false");
		} else {
			// If not truncated, display truncated text and change button text to 'Read More'
			textSpan.innerText = textSpan.getAttribute("data-truncated-text");
			toggleTextBtn.innerText = "Read More";
			textSpan.setAttribute("data-truncated", "true");
		}
	});

	// Looping through each project element and adding a click event listener
	projects.forEach((project, index) => {
		project.addEventListener("click", () => {
			// Preparing truncated text
			const truncatedText = projectsData[index].text.slice(0, 400) + "...";

			// Setting attributes for the textSpan element
			textSpan.setAttribute("data-full-text", projectsData[index].text);
			textSpan.setAttribute("data-truncated-text", truncatedText);
			textSpan.setAttribute("data-truncated", "true");

			// Setting the initial truncated text and showing the Read More button
			textSpan.innerText = truncatedText;
			toggleTextBtn.style.display = "inline";

			// Updating modal content with selected project data
			document.getElementById("modalTitle").innerText =
				projectsData[index].title;
			document.getElementById("modalImage").src = projectsData[index].image;
			document.getElementById("modalLink").href = projectsData[index].link;
			document.getElementById("ghLink").href = projectsData[index].ghLink;

			// Displaying the modal and preventing scrolling
			modal.style.display = "block";
			body.style.overflow = "hidden";
		});
	});

	// Event listener for the Close button
	closeBtn.addEventListener("click", () => {
		// Hiding the modal and allowing scrolling
		modal.style.display = "none";
		body.style.overflow = "";
	});

	// Event listener for clicking outside the modal to close it
	window.addEventListener("click", event => {
		if (event.target === modal) {
			// Hiding the modal and allowing scrolling
			modal.style.display = "none";
			body.style.overflow = "";
		}
	});
});
