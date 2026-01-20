// ========================================
// Smooth Scrolling
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = document.querySelector('#navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                document.querySelector('.mobile-menu-toggle').classList.remove('active');
            }
        }
    });
});

// ========================================
// Mobile Menu Toggle
// ========================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (mobileMenuToggle.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('active')) {
        if (!e.target.closest('.nav-container')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// ========================================
// Navbar Scroll Effect
// ========================================

let lastScroll = 0;
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Active Navigation Link
// ========================================

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

function highlightNavigation() {
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);

// ========================================
// Intersection Observer for Animations
// ========================================

// Animation feature disabled to prevent content disappearing issues
// Elements will be visible immediately without fade-in effects

/*
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-category, .timeline-item, .about-text, .contact-grid > div'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});
*/

// ========================================
// Copy Email to Clipboard
// ========================================

const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    // Add click handler to optionally copy email
    link.addEventListener('click', (e) => {
        const email = link.getAttribute('href').replace('mailto:', '');
        
        // Try to copy to clipboard (optional enhancement)
        if (navigator.clipboard && e.shiftKey) {
            e.preventDefault();
            navigator.clipboard.writeText(email).then(() => {
                // Show temporary tooltip
                const tooltip = document.createElement('span');
                tooltip.textContent = 'Email copied!';
                tooltip.style.cssText = `
                    position: absolute;
                    background: var(--accent-color);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    font-size: 0.875rem;
                    z-index: 1000;
                    pointer-events: none;
                `;
                link.parentElement.style.position = 'relative';
                link.parentElement.appendChild(tooltip);
                
                setTimeout(() => {
                    tooltip.remove();
                }, 2000);
            });
        }
    });
});

// ========================================
// External Links Security
// ========================================

document.querySelectorAll('a[target="_blank"]').forEach(link => {
    // Ensure external links have proper security attributes
    if (!link.hasAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ========================================
// Lazy Load Images
// ========================================

if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========================================
// Tech Tag Interactions (Optional Enhancement)
// ========================================

const techTags = document.querySelectorAll('.tech-tag');

techTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ========================================
// Performance Monitoring (Development Only)
// ========================================

if (window.performance && console.time) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}

// ========================================
// Keyboard Navigation Enhancement
// ========================================

document.addEventListener('keydown', (e) => {
    // Navigate sections with arrow keys (optional enhancement)
    if (e.key === 'ArrowDown' && e.ctrlKey) {
        e.preventDefault();
        scrollToNextSection();
    } else if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        scrollToPreviousSection();
    }
});

function scrollToNextSection() {
    const currentScroll = window.pageYOffset;
    const sections = Array.from(document.querySelectorAll('section[id]'));
    
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop > currentScroll + 100) {
            sections[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

function scrollToPreviousSection() {
    const currentScroll = window.pageYOffset;
    const sections = Array.from(document.querySelectorAll('section[id]')).reverse();
    
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop < currentScroll - 100) {
            sections[i].scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
}

// ========================================
// Focus Management for Accessibility
// ========================================

// Trap focus in mobile menu when open
document.addEventListener('keydown', (e) => {
    if (navLinks && navLinks.classList.contains('active') && e.key === 'Escape') {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.focus();
    }
});

// ========================================
// Console Easter Egg (Optional Fun)
// ========================================

console.log(`
╔═══════════════════════════════════════╗
║   Looking at the code? Nice!          ║
║   I built this site from scratch.     ║
║   Want to work together?              ║
║   Check out my projects below! 👇     ║
╚═══════════════════════════════════════╝
`);

// ========================================
// Service Worker Registration (Optional PWA Support)
// ========================================

if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    // Uncomment to enable PWA support
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js')
    //         .then(registration => console.log('SW registered:', registration))
    //         .catch(error => console.log('SW registration failed:', error));
    // });
}

// ========================================
// Initialize on DOM Ready
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Log initialization
    console.log('Portfolio site initialized successfully!');
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        console.log('Reduced motion detected - animations simplified');
    }
    
    // Initialize any additional features here
});
