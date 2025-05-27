document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainHeader = document.querySelector('.main-header');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    // Toggle mobile menu
    hamburgerMenu.addEventListener('click', function() {
        mainHeader.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainHeader.classList.contains('active')) {
                mainHeader.classList.remove('active');
            }
        });
    });

    // Handle form submission (basic example, typically sent to a backend)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // You would typically send this data to a server using fetch() or XMLHttpRequest
            // For now, let's just log it and provide a feedback message.
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            console.log('Formulário enviado:', formData);

            // Display a success message
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');

            // Optionally, clear the form
            contactForm.reset();
        });
    }
});