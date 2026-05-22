// Navigation functionality for World of Regions page
document.addEventListener('DOMContentLoaded', function() {
    // Update greeting based on Philippines time (UTC+8)
    const greetingElement = document.getElementById('greeting-text');
    if (greetingElement) {
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
});
