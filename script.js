// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Change icon
    const icon = menuToggle.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Handle empty hash
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            
            // Update active link
            updateActiveLink(this);
        }
    });
});

// Update Active Link Function
function updateActiveLink(clickedLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link and its mobile counterpart
    const href = clickedLink.getAttribute('href');
    document.querySelectorAll(`a[href="${href}"]`).forEach(link => {
        link.classList.add('active');
    });
}

// Update Active Link on Scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;
    
    // Update active navigation link based on scroll position
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Show/Hide Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Animate tool cards
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.5s ease ${index * 0.05}s`;
        observer.observe(card);
    });
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(item);
    });
    
    // Animate contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

// Add hover effect to social icons
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) rotate(5deg)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0)';
    });
});

// Typing Effect for Hero Section (Optional Enhancement)
const typingText = document.querySelector('.hero-text h2');
if (typingText) {
    const originalText = typingText.textContent;
    typingText.textContent = '';
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < originalText.length) {
            typingText.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after page load
    setTimeout(typeWriter, 500);
}

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(2, 6, 23, 0.95)';
    } else {
        navbar.style.background = 'rgba(2, 6, 23, 0.8)';
    }
});

// Prevent default behavior for empty links
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.profile-img');
    if (heroImage) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.3;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Add active state to current section in viewport
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveSection() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveSection);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateActiveSection();
    
    // Add smooth reveal animation to hero section
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            heroText.style.transition = 'all 0.8s ease';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateX(0)';
        }, 200);
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(30px)';
        setTimeout(() => {
            heroImage.style.transition = 'all 0.8s ease';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }, 400);
    }
});