// Variables globales para almacenar las traducciones
let translations = {};

// Función para cargar las traducciones desde un archivo JSON
function loadTranslations(language) {
  fetch(`${language}.json`)
    .then((response) => response.json())
    .then((data) => {
      translations = data;
      // Aplicar las traducciones
      changeLanguage(language);
    })
    .catch((error) => {
      console.error(`Error loading translations for ${language}:`, error);
    });
}

// Función para cambiar el idioma
function changeLanguage(language) {
  // Obtener todos los elementos que deseas traducir
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  // Iterar sobre los elementos y aplicar la traducción
  elementsToTranslate.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");
    element.textContent = translations[translationKey];
  });
}

// Inicializar el idioma en español
let currentLanguage = "es";

// Llamar a la función para cargar las traducciones iniciales
loadTranslations(currentLanguage);

// Manejar el evento de cambio de idioma (por ejemplo, cuando se hace clic en el botón)
const toggleLanguageButton = document.getElementById("toggle-language-button");
toggleLanguageButton.addEventListener("click", () => {
  // Cambiar entre español (es) e inglés (en)
  if (currentLanguage === "es") {
    currentLanguage = "en";
  } else {
    currentLanguage = "es";
  }

  // Cargar las traducciones actualizadas
  loadTranslations(currentLanguage);
});


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

