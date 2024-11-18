document.addEventListener("DOMContentLoaded", () => {
    const pacmanContainer = document.getElementById('pacman-container')
    const ghostsContainer = document.getElementById('ghosts-container')
    const cherryContainer = document.getElementById('cherry-container')
    const scoreboard = document.getElementById('score')
    const gameOverContainer = document.getElementById('game-over')

    function createPacman() {
        const pacman = document.createElement('img')
        pacman.src = './public/assets/img/pacman.png'
        pacman.alt = 'Pacman'
        pacman.className = 'imgpac'
        pacman.style.width = '100px'
        pacman.style.height = '100px'
        return pacman
    }

    function createGhost() {
        if (gameOver) return;

        const ghost = document.createElement('img')
        ghost.src = './public/assets/img/fantasma.png'
        ghost.alt = 'Ghost'
        ghost.className = 'imgfan'

        randomPosition(ghost)

        ghost.addEventListener('click', () => {
            movePacmanToElement(ghost, 100)
            ghost.remove()
            ghostsEaten++
            if (ghostsEaten % 3 === 0) {
                createCherry()
            }
        })

        ghostsContainer.appendChild(ghost)
    }

    function createCherry() {
        if (gameOver) return;

        const cherry = document.createElement('img')
        cherry.src = './public/assets/img/cherry.png'
        cherry.alt = 'Cherry'
        cherry.className = 'cherry'

        randomPosition(cherry)

        cherry.addEventListener('click', () => {
            movePacmanToElement(cherry, 500)
            cherry.remove()
        })

        cherryContainer.appendChild(cherry)
    }

    function movePacmanToElement(element, points) {
        if (gameOver) return;

        const elementRect = element.getBoundingClientRect()
        const pacman = createPacman()

        pacman.style.position = 'absolute'
        pacman.style.top = elementRect.top + 'px'
        pacman.style.left = elementRect.left + 'px'
        pacman.style.display = 'block'

        const existingPacman = document.querySelector('.imgpac')
        if (existingPacman) {
            existingPacman.remove()
        }

        pacmanContainer.appendChild(pacman)
        updateScore(points)
    }

    function randomPosition(element) {
        const randomTop = Math.random() * (window.innerHeight - 50) + 'px'
        const randomLeft = Math.random() * (window.innerWidth - 50) + 'px'

        element.style.position = 'absolute'
        element.style.top = randomTop
        element.style.left = randomLeft
    }

    let score = 0
    let ghostCount = 0
    let ghostsEaten = 0
    let gameOver = false

    function updateScore(points) {
        if (gameOver) return

        score += points
        scoreboard.textContent = score.toString().padStart(4, '0')

        if (score >= 5000) {
            gameOver = true
            gameOverContainer.innerHTML = 'Win!<br><button id="restart-button">Restart</button>'
            gameOverContainer.style.display = 'block'
            clearInterval(ghostInterval)

            document.getElementById('restart-button').addEventListener('click', restartGame)
        }
    }

    function restartGame() {
        score = 0
        ghostCount = 0
        ghostsEaten = 0
        gameOver = false
        scoreboard.textContent = '0000'
        gameOverContainer.style.display = 'none'
        pacmanContainer.innerHTML = ''
        ghostsContainer.innerHTML = ''
        cherryContainer.innerHTML = ''
        ghostInterval = setInterval(createGhost, 2000)
    }

    let ghostInterval = setInterval(createGhost, 2000)
})