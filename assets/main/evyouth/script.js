// Function to open the pop-up with the player's agent information
function showPopup(agents) {
    const agentsContainer = document.getElementById('agents-container');
    agentsContainer.innerHTML = ''; // Clear previous content

    agents.forEach(agent => {
        const agentInfo = document.createElement('div');
        agentInfo.classList.add('agent-info');
        agentInfo.innerHTML = `
            <img src="${agent.icon}" alt="${agent.name}">
            <p>${agent.name}</p>
        `;
        agentsContainer.appendChild(agentInfo);
    });

    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');
    popup.style.display = 'block';
    popupContent.classList.remove('fade-out'); // Ensure fade-out class is removed
    document.body.classList.add('body-no-scroll'); // Disable scrolling
}

// Function to close the pop-up
function closePopup() {
    const popupContent = document.querySelector('.popup-content');
    popupContent.classList.add('fade-out'); // Trigger the fade-out animation
    setTimeout(() => {
        document.getElementById('popup').style.display = 'none';
        popupContent.classList.remove('fade-out'); // Reset the fade-out class
        document.body.classList.remove('body-no-scroll'); // Enable scrolling
    }, 250); // Match this duration to the animation duration
}

// Event listeners for player boxes
document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');

    // Event listener for clicks outside the popup
    popup.addEventListener('mousedown', (event) => {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Event listeners for player boxes
    const playerBoxes = document.querySelectorAll('.player-box');
    playerBoxes.forEach(box => {
        if (!box.querySelector('h3').innerText.includes('Coach')) {
            box.addEventListener('click', () => {
                const agents = JSON.parse(box.getAttribute('data-agents'));
                showPopup(agents);
            });
        }
    });
});
