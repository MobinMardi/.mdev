// Function to open the pop-up with the player's agent information
function showPopup(agents) {
  const agentsContainer = document.getElementById("agents-container")
  agentsContainer.innerHTML = "" // Clear previous content

  agents.forEach((agent) => {
    const agentInfo = document.createElement("div")
    agentInfo.classList.add("agent-info")
    agentInfo.innerHTML = `
            <img src="${agent.icon}" alt="${agent.name}">
            <p>${agent.name}</p>
        `
    agentsContainer.appendChild(agentInfo)
  })

  const popup = document.getElementById("popup")
  const popupContent = document.querySelector(".popup-content")
  popup.style.display = "block"
  popupContent.classList.remove("fade-out")
  document.body.classList.add("body-no-scroll")
}

// Function to close the pop-up
function closePopup() {
  const popupContent = document.querySelector(".popup-content")
  popupContent.classList.add("fade-out")
  setTimeout(() => {
    document.getElementById("popup").style.display = "none"
    popupContent.classList.remove("fade-out")
    document.body.classList.remove("body-no-scroll")
  }, 250)
}

// Event listeners for player boxes and popup
document.addEventListener("DOMContentLoaded", (event) => {
  // Update copyright year
  const currentYearSpan = document.getElementById("current-year")
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear()
  }

  const popup = document.getElementById("popup")
  const popupContent = document.querySelector(".popup-content")

  // Close popup when clicking outside
  popup.addEventListener("mousedown", (event) => {
    if (event.target === popup) {
      closePopup()
    }
  })

  // Add click event to player boxes
  const playerBoxes = document.querySelectorAll(".player-box")
  playerBoxes.forEach((box) => {
    if (!box.querySelector("h3").innerText.includes("Coach")) {
      box.addEventListener("click", () => {
        const agents = JSON.parse(box.getAttribute("data-agents"))
        showPopup(agents)
      })
    }
  })

  // Handle touch events for mobile
  playerBoxes.forEach((box) => {
    box.addEventListener("touchend", (e) => {
      if (!box.querySelector("h3").innerText.includes("Coach")) {
        e.preventDefault()
        const agents = JSON.parse(box.getAttribute("data-agents"))
        showPopup(agents)
      }
    })
  })
})

// Handle image load errors
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    if (!this.src.includes("placeholder.com")) {
      this.src = `https://via.placeholder.com/${this.width}x${this.height}`
    }
  })
})

