import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Moni Lamas', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Buscando empleo de forma activa', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola, me llamo 👩🏼‍💻 ',
  name: 'Moni',
  subtitle: 'soy Junior Frontend developer',
  cta: 'Quién soy',
};

// ABOUT DATA
export const aboutData = {
  img: 'moniLamas_2020_02.jpg',
  paragraphOne: 'Me llamo Moni. Vivo en Bertamiráns, un pueblo muy cerquita de Santiago de Compostela, desde hace poco más de 2 años. Antes vivía en Madrid, ya no sé lo que son los atascos. Soy rockerilla, cultureta, techgirl, nadadora, flexitariana y escéptica (pensamiento crítico). Fan del modernismo y el art noveau, caligrafía, nutrición, ciencia y humor.',
  paragraphTwo: 'He trabajado muchos años como administrativo, tengo experiencia en trato al cliente, gestión de documentación, realización de informes, ... En la actualidad estoy reciclándome en tecnologías de desarrollo web, mi vocación era maquetar libros, y ahora puedo maquetar webs, que es una pasada. He trabajado 6 meses en una empresa de A Coruña, en remoto, maquetando en WordPress y gestionando una de las cuentas de Instagram de la empresa. Tengo mucho interés en aprender a manejar plataformas que no conozco.',
  paragraphThree: 'Os dejo el link para ver mi cv en PDF. Y en la siguiente sección muestro algunos de los proyectos en los que he participado.',
  resume: 'https://drive.google.com/file/d/12ODh9IC_jxjrUNY0DI-b21e-KOfQy9a4/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pat.jpg',
    title: 'Pat educadora canina',
    info: 'Maquetación en WordPress con Divi, revisión y corrección de textos y tratamiento en Photoshop de todas las imágenes.',
    info2: '',
    url: 'https://pateducadoracanina.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'la_ruta_roja.jpg',
    title: 'La ruta roja',
    info: 'Maquetación en WordPress con Divi, revisión y corrección de textos y tratamiento en Photoshop de todas las imágenes.',
    info2: '',
    url: 'https://www.larutaroja.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'susana_urbano.jpg',
    title: 'Susana Urbano Interiors',
    info: 'Maquetación en WordPress con Divi, revisión y corrección de textos y tratamiento en Photoshop de todas las imágenes. Además se realizó la traducción al inglés y al alemán.',
    info2: '',
    url: 'https://www.susanaurbanointeriors.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Si queréis contar conmigo',
  btn: 'Let´s go!',
  email: 'mlamasrial@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/MoniMonipeny',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/moni.lamas/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/m%C3%B3nica-lamas/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/moniLamas',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons 
};
