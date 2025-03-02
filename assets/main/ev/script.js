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
    popupContent.classList.remove('fade-out');
    document.body.classList.add('body-no-scroll');
}

function closePopup() {
    const popupContent = document.querySelector('.popup-content');
    popupContent.classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('popup').style.display = 'none';
        popupContent.classList.remove('fade-out');
        document.body.classList.remove('body-no-scroll');
    }, 250);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');

    popup.addEventListener('mousedown', (event) => {
        if (event.target === popup) {
            closePopup();
        }
    });

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
