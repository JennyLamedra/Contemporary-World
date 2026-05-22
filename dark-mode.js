// Dark Mode Toggle Functionality
(function() {
    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply dark mode on page load if enabled
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const toggleIcon = darkModeToggle.querySelector('.toggle-icon');
        
        // Set initial icon based on current mode
        if (isDarkMode) {
            toggleIcon.textContent = '☀️';
        } else {
            toggleIcon.textContent = '🌙';
        }
        
        // Toggle dark mode on button click
        darkModeToggle.addEventListener('click', function() {
            const isCurrentlyDark = document.body.classList.toggle('dark-mode');
            
            // Update icon
            if (isCurrentlyDark) {
                toggleIcon.textContent = '☀️';
                localStorage.setItem('darkMode', 'true');
            } else {
                toggleIcon.textContent = '🌙';
                localStorage.setItem('darkMode', 'false');
            }
            
            // Add animation
            toggleIcon.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                toggleIcon.style.transform = 'rotate(0deg)';
            }, 300);
        });
    });
})();
