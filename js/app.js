const resume = document.getElementById("resume");
const resumeLink = document.getElementById("resume-link");

function confirmation(e) {
    // if(confirm("Would you like to view the PDF?")) {

    // }
    if (!confirm('Would you like to view my resume as a PDF?')) {
        e.preventDefault();
    } else {
        window.open("../sample.pdf");
    }
}

resume.addEventListener("click", confirmation);
resumeLink.addEventListener("click", confirmation);