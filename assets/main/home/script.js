function reloadPage() {
    location.reload();
}
// JavaScript to dynamically update the top bar's background as user scrolls
window.addEventListener('scroll', updateTopBarBackground);

// Also, immediately apply the background when the page loads
document.addEventListener('DOMContentLoaded', updateTopBarBackground);

function updateTopBarBackground() {
    const topBar = document.querySelector('.top-bar');
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate how far the user has scrolled as a percentage
    const scrollPercentage = (scrollY / maxScroll) * 100;

    // Update the background gradient so it fills from left to right as user scrolls down
    topBar.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.8) ${scrollPercentage}%, rgba(0, 0, 0, 0.4) ${scrollPercentage}%)`;
}
