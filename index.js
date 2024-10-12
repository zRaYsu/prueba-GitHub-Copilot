const { Copilot, LanguageSupport } = require('@github/copilot-sdk');

// Inicializa la instancia de GitHub Copilot
const copilot = new Copilot();

// Define una lista de lenguajes de programación soportados
const supportedLanguages = [
  'javascript',
  'python',
  'java',
  'csharp',
  'php',
  'ruby',
  'c',
  'cpp',
  'go',
  'typescript',
  'swift',
  'kotlin',
  'rust',
  'html',
  'css',
  // Agrega más lenguajes según sea necesario
];

// Configura el soporte para los lenguajes definidos
supportedLanguages.forEach(language => {
  copilot.addLanguageSupport(new LanguageSupport(language));
});

// Inicia el servicio de GitHub Copilot
copilot.start()
  .then(() => {
    console.log('GitHub Copilot está listo y soporta todos los lenguajes definidos.');
  })
  .catch(error => {
    console.error('Error al iniciar GitHub Copilot:', error);
  });
