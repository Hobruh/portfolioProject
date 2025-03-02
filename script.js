document.addEventListener('DOMContentLoaded', function() {
    // Project collapse/expand functionality
    const project1 = document.getElementById("project-1-img");
    const project2 = document.getElementById("project-2-img");
    const project3 = document.getElementById("project-3-img");
    const project1btn = document.getElementById("project-1-button");
    const project2btn = document.getElementById("project-2-button");
    const project3btn = document.getElementById("project-3-button");

    // Initially, projects are collapsed
    project1.style.display = "none";
    project2.style.display = "none";
    project3.style.display = "none";

    project1btn.addEventListener("click", () => {
        if (project1.style.display === "none") {
            project1.style.display = "block";
            project2.style.display = "none";
            project3.style.display = "none";
        } else {
            project1.style.display = "none";
        }
    });

    project2btn.addEventListener("click", () => {
        if (project2.style.display === "none") {
            project2.style.display = "block";
            project1.style.display = "none";
            project3.style.display = "none";
        } else {
            project2.style.display = "none";
        }
    });

    project3btn.addEventListener("click", () => {
        if (project3.style.display === "none") {
            project3.style.display = "block";
            project1.style.display = "none";
            project2.style.display = "none";
        } else {
            project3.style.display = "none";
        }
    });

    // Contact form submission (EmailJS)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = contactForm.name.value;
            const email = contactForm.email.value;
            const message = contactForm.message.value;

            emailjs.send("service_018ijem", "template_ami8b8a", {
                from_name: name,
                from_email: email,
                message: message,
                to_email: "adrian.ghari@gmail.com"
            })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                console.error('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
        });
    }
});
