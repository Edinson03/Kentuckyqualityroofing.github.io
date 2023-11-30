const video = document.getElementById("myVideo");
let isPlaying = false;

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkVideoPlay() {
    if (isElementInViewport(video) && !isPlaying) {
        video.play().catch(error => {
            // Manejar errores, si es necesario
        });
        isPlaying = true;
    } else if (!isElementInViewport(video) && isPlaying) {
        video.pause();
        isPlaying = false;
    }
}

// Agregar un event listener para verificar cuando se haga scroll
window.addEventListener("scroll", checkVideoPlay);

// Verificar el estado del video cuando la página se carga
window.addEventListener("load", checkVideoPlay);

