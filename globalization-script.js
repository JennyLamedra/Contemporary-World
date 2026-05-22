// Dynamic greeting based on Philippines time (UTC+8)
function updateGreeting() {
    const greetingElement = document.getElementById('greeting-text');
    if (!greetingElement) return;

    try {
        const now = new Date();
        const phTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
        const hour = phTime.getHours();

        let greeting;
        if (hour >= 5 && hour < 12)       greeting = 'Hello, Good Morning...';
        else if (hour >= 12 && hour < 18)  greeting = 'Hello, Good Afternoon...';
        else                               greeting = 'Hello, Good Evening...';

        greetingElement.textContent = greeting;
    } catch (e) {
        const hour = new Date().getHours();
        greetingElement.textContent = hour < 12 ? 'Hello, Good Morning...'
                                    : hour < 18 ? 'Hello, Good Afternoon...'
                                    : 'Hello, Good Evening...';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    updateGreeting();
    setInterval(updateGreeting, 60000);
});
