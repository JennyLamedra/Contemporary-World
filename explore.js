// Dynamic greeting based on Philippines time
function updateGreeting() {
    const greetingElement = document.getElementById('greeting-text');
    
    // Get current time in Philippines (UTC+8)
    const now = new Date();
    const phTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
    const hour = phTime.getHours();
    
    let greeting;
    if (hour >= 5 && hour < 12) {
        greeting = 'Hello, Good Morning...';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Hello, Good Afternoon...';
    } else {
        greeting = 'Hello, Good Evening...';
    }
    
    greetingElement.textContent = greeting;
}

// Update greeting on page load
updateGreeting();

// Update greeting every minute
setInterval(updateGreeting, 60000);

// Check if page loaded with hash for About Us
window.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash;
    
    if (hash === '#about') {
        // Show About Us section
        const modulesTop = document.querySelector('.modules-container');
        const modulesBottom = document.querySelector('.modules-container-bottom');
        const aboutContent = document.getElementById('about-content');
        
        if (modulesTop && modulesBottom && aboutContent) {
            modulesTop.style.display = 'none';
            modulesBottom.style.display = 'none';
            aboutContent.style.display = 'grid';
        }
        
        // Update active nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === 'index.html#about') {
                link.classList.add('active');
            }
        });
    }
});

// Handle navigation within the page
const navLinks = document.querySelectorAll('.nav-link');
const modulesTop = document.querySelector('.modules-container');
const modulesBottom = document.querySelector('.modules-container-bottom');
const aboutContent = document.getElementById('about-content');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // If it's the About Us link and we're on the explore page
        if (href === 'index.html#about' && window.location.pathname.includes('index.html')) {
            e.preventDefault();
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show About Us section
            modulesTop.style.display = 'none';
            modulesBottom.style.display = 'none';
            aboutContent.style.display = 'grid';
            
            // Update URL hash
            window.location.hash = 'about';
        }
        // If it's the Subject Modules link and we're on the explore page
        else if (href === 'index.html' && window.location.pathname.includes('index.html')) {
            e.preventDefault();
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show modules section
            modulesTop.style.display = 'grid';
            modulesBottom.style.display = 'flex';
            aboutContent.style.display = 'none';
            
            // Remove hash
            history.pushState("", document.title, window.location.pathname);
        }
        // Otherwise, let the link navigate normally
    });
});
