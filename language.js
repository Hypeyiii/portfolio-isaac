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
        'time-2':'Diciembre, 2021',
        'doing-2':'Entrando en el mundo del desarrollo',
        'doing-description-2':'Empecé a adentrarme en el mundo del Desarrollo Web, cursando materias y aprendiendo Tecnologías didacticamente.',
        'time-3':'Agosto, 2021',
        'doing-3':'Ingreso al Estudio Superior',
        'doing-description-3':'Ingreso a la Faculdad de Ingeniería Mecácnica y Eléctrica (FIME) en la carrera de Ingeniero Administrador de Sistemas (IAS).',
        'tech-description':'A lo largo de mi tiempo como',
        'web-dev':'Desarrollador Web',
        'tech-description-2':', he tenido la oportunidad de desarrollar habilidades con diferentes tipos de',
        'game-description':'Proyecto principal al cursar la materia "Programación Orientada a Objetos". Hecho completamente en el lenguaje Java',
        'tesla-description':'Proyecto personal para la creación de la página web de Tesla. Hecho con HTML y Tailwind. (Sin funcionalidad).',
        'footer':'© 2024 Isaac Frias. Derechos Reservados',
        'about':'Sobre mí',
        'contact':'Contacto',
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
        'time-2':' Dececmber, 2021',
        'doing-description':'Currently studying the 6th semester in the Systems Administrator Engineer career. Developing websites in a didactic and passionate way."',
        'doing-2':'Entering the world of development',
        'doing-description-2':'I started to delve into the world of Web Development, taking courses and learning technologies in a didactic manner.',
        'time-3':'August, 2021',
        'doing-3':'Entering University',
        'doing-description-3':'Entering the Faculty of Mechanical and Electrical Engineering (FIME) in the Systems Administrator Engineer (IAS) career.',
        'tech-description':'Throughout my time as a',
        'web-dev':'Web Developer',
        'tech-description-2':'I have had the opportunity to develop skills with different types of',
        'game-description':'Main project while taking the "Object-Oriented" Programming course. Completely made in the Java language.',
        'tesla-description':'Personal project for the creation of the Tesla website. Made with HTML and Tailwind. (Non-functional).',
        'footer':'© 2024 Isaac Frias. All Rights Reserved',
        'about':'About me',
        'contact':'Contact',
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

const changeLanguageButtonUsa = document.getElementById('changeLanguageUsa');
changeLanguageButtonUsa.addEventListener('click', () => {
    const lang = changeLanguageButtonUsa.getAttribute('data-lang') === 'en' ? 'en': 'en';
    changeLanguage(lang); 
});
const changeLanguageButtonMexico = document.getElementById('changeLanguageMex');
changeLanguageButtonMexico.addEventListener('click', () => {
    const lang = changeLanguageButtonMexico.getAttribute('data-lang') === 'es' ? 'es': 'es';
    changeLanguage(lang); 
});

