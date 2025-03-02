// Update copyright year
document.getElementById("current-year").textContent = new Date().getFullYear()

// Navbar background effect on scroll
const navbar = document.querySelector(".navbar")
let lastScrollY = window.scrollY

function updateNavbarBackground() {
  const scrollY = window.scrollY
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercentage = (scrollY / maxScroll) * 100

  navbar.style.background = `linear-gradient(to right, rgba(44, 14, 67, 0.8) ${scrollPercentage}%, rgba(44, 14, 67, 0.4) 100%)`
  lastScrollY = scrollY
}

// Update navbar background on load
updateNavbarBackground()

// Update navbar background on scroll
window.addEventListener("scroll", updateNavbarBackground)

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = "smooth"

// Handle image load errors
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    if (!this.src.includes("placeholder.com")) {
      this.src = `https://via.placeholder.com/${this.width}x${this.height}`
    }
  })
})
