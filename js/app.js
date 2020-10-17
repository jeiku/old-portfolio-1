window.sr = ScrollReveal();
const resume = document.getElementById("resume");
const resumeLink = document.getElementById("resume-link");

function confirmation(e) {
  if (!confirm("Would you like to view my resume as a PDF?")) {
    e.preventDefault();
  } else {
    window.open("../jacob-west-resume.pdf");
  }
}

sr.reveal(".animate-up", {
  origin: "bottom",
  duration: 500,
  distance: "9rem",
  delay: 120,
});

resume.addEventListener("click", confirmation);
resumeLink.addEventListener("click", confirmation);
