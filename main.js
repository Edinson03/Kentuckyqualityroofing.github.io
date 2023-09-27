let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500) 
  .typeString('La Capital del Sol')
  .pauseFor(200)
  .deleteChars(10)
  .start();

// Obtén el botón de cambio de idioma por su id
const toggleLanguageButton = document.getElementById('toggle-language-button');

// Agrega un event listener al botón
toggleLanguageButton.addEventListener('click', function () {
    // Cambia el idioma a español
    document.querySelector('html').setAttribute('lang', 'es');
});

// Función para cambiar el idioma
function changeLanguage() {
    // Cambia el idioma a español
    document.querySelector('html').setAttribute('lang', 'es');
}


  