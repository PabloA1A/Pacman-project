document.addEventListener("DOMContentLoaded", () => {
    const pacman = document.getElementById('pacman');
    const ghost = document.getElementById('ghost');

    ghost.addEventListener('click', () => {
        const pacmanWidth = pacman.clientWidth;
        const pacmanHeight = pacman.clientHeight;

        ghost.style.display = 'none';

        pacman.style.position = 'absolute';
        pacman.style.top = ghost.style.top;
        pacman.style.left = ghost.style.left;
        pacman.style.width = pacmanWidth + 'px'; 
        pacman.style.height = pacmanHeight + 'px'; 
    });
});