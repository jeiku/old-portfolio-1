window.sr = ScrollReveal();
const resume = document.getElementById("resume");
const resumeLink = document.getElementById("resume-link");

function confirmation(e) {
	// if(confirm("Would you like to view the PDF?")) {

	// }
	if (!confirm("Would you like to view my resume as a PDF?")) {
		e.preventDefault();
	} else {
		window.open("../jacob-west-resume.pdf");
	}
}

sr.reveal(".animate-up", {
	origin: "bottom",
	duration: 1000,
	distance: "25rem",
	delay: 400,
});

resume.addEventListener("click", confirmation);
resumeLink.addEventListener("click", confirmation);
