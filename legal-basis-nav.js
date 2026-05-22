// Navigation functionality for Legal Basis page
document.addEventListener('DOMContentLoaded', function() {
    // Update greeting based on time of day
    const greetingText = document.getElementById('greeting-text');
    const now = new Date();
    const phTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
    const currentHour = phTime.getHours();

    if (greetingText) {
        if (currentHour < 12) {
            greetingText.textContent = 'Hello, Good Morning...';
        } else if (currentHour < 18) {
            greetingText.textContent = 'Hello, Good Afternoon...';
        } else {
            greetingText.textContent = 'Hello, Good Evening...';
        }
    }
});
