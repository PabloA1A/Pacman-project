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
            movePacmanToGhost(ghost)
            ghost.style.display = 'none'
        });
        ghostsContainer.appendChild(ghost)
    }

    function movePacmanToGhost(ghost) {
        const ghostRect = ghost.getBoundingClientRect()
        const ghostTop = ghostRect.top + window.scrollY
        const ghostLeft = ghostRect.left + window.scrollX

        pacman.style.position = 'absolute'
        pacman.style.top = ghostTop + 'px'
        pacman.style.left = ghostLeft + 'px'
        pacman.style.display = 'block'
    }

    function randomPosition(element) {
        const randomTop = Math.random() * (window.innerHeight - 50) + 'px'
        const randomLeft = Math.random() * (window.innerWidth - 50) + 'px'
        
        element.style.position = 'absolute'
        element.style.top = randomTop
        element.style.left = randomLeft
    }
    setInterval(createGhost, 2000);
});


$(document).ready(function () {

    var imagen1 = $("<img>", {id: "img1", src: "imatge1.jpg", title: 'imagen1', height: "300", width : "600"});
      $(imagen1).css("display","none");
    var imagen2 = $("<img>", {id: "img2", src: "imatge2.jpg", title: 'imagen2', height: "300", width : "600"});

    $("#resultat").append(imagen1);
    $("#resultat").append(imagen2);

    $("#boto1").click (function () {
     /* $("#img2").fadeOut();
    }, function () {
      $("#img1").fadeIn();*/
      
      $('img').toggle();
    });

    $("#boto2").click (function () {
    
    });

    $("#resultat img").dblclick (function () {
     
    });
});