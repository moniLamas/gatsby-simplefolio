import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Moni Lamas', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola Jaime, Ter y equipo, soy',
  name: 'Moni',
  subtitle: 'me hace mucha ilusión postularme al puesto administrativo',
  cta: 'Quién soy',
};

// ABOUT DATA
export const aboutData = {
  img: 'moniLamas2020_01.jpg',
  paragraphOne: 'Me llamo Moni. Vivo en Bertamiráns, un pueblo muy cerquita de Santiago de Compostela, desde hace 2 años y medio más o menos. Antes vivia en Madrid, ya no sé lo que es un atasco. Soy rockerilla, cultureta, techgirl, flexitariana y escéptica (pensamiento crítico). Fan del modernismo y el art noveau, caligrafía, nutrición, ciencia y humor. Soy animal de piscina, es lo que más estoy echando de menos durante esta pandemia. Soy consumidora de contenido en YouTube, Twitch, Twitter e Instagram.',
  paragraphTwo: 'Me pasó la oferta mi pareja que es miembro del consejo de Sabios. Os seguimos desde hace mucho mucho tiempo, por eso me hace tanta ilusión postularme. He trabajado muchos años como administrativo, tengo experiencia en trato al cliente, gestión de documentación, realización de informes, ... En la actualidad estoy reciclándome en tecnologías de desarrollo web, mi vocación era maquetar libros, y ahora puedo maquetar webs, que es una pasada. He estado trabajando 6 meses en una empresa de A Coruña, en remoto, maquetando en Wordpress. Mantenia la comunicación con el cliente durante la ejecución del proyecto y también gestionaba la cuenta de Instagram de uno de los productos de la empresa. Tengo mucho interés en aprender a manejar plataformas que no conozco, como Kajabi, Osano, Quaderno, Shopify, Stripe.',
  paragraphThree: 'Os dejo el link para descargar mi cv.',
  resume: 'https://drive.google.com/file/d/1tQ33TzJ56PytgAMIv_pHxwcUtAFvgNSn/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
      url: 'https://www.linkedin.com/in/m%C3%B3nica-l-00b95763/',
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
