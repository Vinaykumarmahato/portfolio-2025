document.addEventListener('DOMContentLoaded', () => {

    // Dark/Light mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    if (themeToggle && body) {
        // Set initial theme from localStorage
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
        }
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a'); // Select all navigation links

    
    // Toggle menu visibility
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change icon from bars to times (X) and vice-versa
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu when a navigation link is clicked (for smooth scrolling)
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                // Reset icon to bars
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Optional: Highlight active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80; // Adjust for fixed header height
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Initial check for active link when page loads
    const initialSection = document.querySelector('section[id]:target') || document.querySelector('section[id]');
    if (initialSection) {
        const initialId = initialSection.getAttribute('id');
        navItems.forEach(link => {
            if (link.getAttribute('href').includes(initialId)) {
                link.classList.add('active');
            }
        });
    }

});



