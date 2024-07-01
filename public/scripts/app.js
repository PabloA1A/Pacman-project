document.addEventListener("DOMContentLoaded", () => {
    const pacman = document.getElementById('pacman')
    const ghostsContainer = document.getElementById('ghosts-container')

    function createGhost() {
        const ghost = document.createElement('img')
        ghost.src = './public/assets/img/fantasma.png'
        ghost.alt = 'Ghost'
        ghost.className = 'imgfan'

        randomPosition(ghost);

        ghost.addEventListener('click', () => {
            console.log('Ghost clicked')
            movePacmanToGhost(ghost)
            ghost.remove()
        });

        ghostsContainer.appendChild(ghost);
    }

    function movePacmanToGhost(ghost) {
        const ghostRect = ghost.getBoundingClientRect()
        const ghostTop = ghostRect.top + window.scrollY
        const ghostLeft = ghostRect.left + window.scrollX

        console.log('Moving Pacman to:', ghostTop, ghostLeft)

        pacman.style.position = 'absolute'
        pacman.style.top = ghostTop + 'px'
        pacman.style.left = ghostLeft + 'px'
        pacman.style.display = 'block'

        console.log('Pacman style:', pacman.style)
    }

    function randomPosition(element) {
        const randomTop = Math.random() * (window.innerHeight - 50) + 'px'
        const randomLeft = Math.random() * (window.innerWidth - 50) + 'px'
        
        element.style.position = 'absolute'
        element.style.top = randomTop
        element.style.left = randomLeft
    }

    setInterval(createGhost, 2000)
});