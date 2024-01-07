// Objeto con las traducciones
const translations = {
    'es': {
        'title': 'Hola, soy Isaac',
        'button': 'Contratame aquí',
        'home':'Inicio',
        'education':'Educación',
        'tech':'Tecnologias',
        'projects':'Proyectos',
        'front':'Frontend Developer',
        'develope':'e',
        'ing':'Ingeniero en Sistemas',
        'from':'. De',
        'Contribuiting':'Contribuyendo al',
        'Dev':'Desarrollo',
        'and':'y ',
        'program':'Programación ',
        'web':'de Aplicaciones Web.',
        'section-education':'Educacion y Aprendizaje',
        'time-1':'Actualmente...',
        'doing':'Desarrollador y Estudiante',
        'doing-description':'Cursando 6to semestre en la carrera de Ingeniero Administrador de Sistemas. Desarrollando Web´ s de manera didactica y apasionada.',
        
    },
    'en': {
        'title': 'Hey, I´m Isaac',
        'button': 'Hire me here',
        'home':'Home',
        'education':'Education',
        'tech':'Technologies',
        'projects':'Projects',
        'front':'Frontend Developer',
        'ing':'Systems Engineer',
        'develope':'and',
        'from':'. From',
        'Contribuiting':'Contribuiting to the',
        'Dev':'Development',
        'and':'and ',
        'program':'Programming ',
        'web':'of Web Applications.',
        'section-education':'Education and learning',
        'time-1':'On going...',
        'doing':'Developer and Studend',
        'doing-description':'Currently studying the 6th semester in the Systems Administrator Engineer career. Developing websites in a didactic and passionate way."',

    }
};

// Función para cambiar el idioma
function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}
const usaFlag = document.getElementById("usa")

const changeLanguageButton = document.getElementById('changeLanguage');
changeLanguageButton.addEventListener('click', () => {
    const lang = changeLanguageButton.getAttribute('data-lang') === 'en' ? 'es' : 'en';
    changeLanguage(lang);
    changeLanguageButton.setAttribute('data-lang', lang);
    changeLanguageButton.querySelector('img').src = lang === 'en' ? 'img/flag-for-flag-mexico-svgrepo-com.svg' : 'img/usa-svgrepo-com.svg';
});