import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '',
  lang: '',
  description: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Сайт грузоперевозок',
    info: 'Первый проект. С использованием HTML, CSS, JavaScript и PHP',
    info2: '',
    url: 'https://gruzoperevozki69.ru',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.jpg',
    title: 'Игра угадай число',
    info: 'С использованием HTML, CSS, DOM и адаптивной верстки',
    info2: 'Правила игры: рандомно дается число от 1 до 20, нужно угадать какое число загадано 🎲',
    url: 'https://dazzling-hopper-df3618.netlify.app/',
    repo: 'https://github.com/Alstermeria/gues-my-number.git',
  },
  {
    id: nanoid(),
    img: 'project9.jpg',
    title: 'Bankist-site по курсу Jonasa Schmedtmanna(Udemy)',
    info: 'С использованием HTML, CSS, JavaScript, DOM',
    info2: '',
    url: 'https://distracted-northcutt-311acb.netlify.app',
    repo: 'https://github.com/Alstermeria/Bankist-site.git',
  },

  {
    id: nanoid(),
    img: 'project8.jpg',
    title: 'Dice-game по курсу Jonasa Schmedtmanna(Udemy)',
    info: 'С использованием HTML, CSS, JavaScript, DOM',
    info2:
      'Правила игры: два игрока бросают кубик (Roll dice), очередность меняется если игрок нажимает Hold или ему выпадает 1. Выигрывает тот кто наберет 100 очков первым, удачи!😊',
    url: 'https://relaxed-torvalds-888d5c.netlify.app',
    repo: 'https://github.com/Alstermeria/dice-game.git',
  },
];

export const smallProjectsData = [
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Сайт challenge by Frontend Mentor',
    info: 'С использованием HTML, CSS, Bootstrap',
    url: 'https://lucid-raman-f54114.netlify.app/',
    repo: 'https://github.com/Alstermeria/loopstudios.git',
  },
  {
    id: nanoid(),
    img: 'project7.jpg',
    title: 'Scroll animation design',
    info: 'С использованием HTML, CSS',
    url: 'https://alstermeria.github.io/organicfruits/',
    repo: 'https://github.com/Alstermeria/organicfruits.git',
  },
  {
    id: nanoid(),
    img: 'project6.jpg',
    title: 'Сайт',
    info: 'С использованием HTML, CSS, SASS',
    info2: '',
    url: 'https://hungry-wright-dc8b5d.netlify.app',
    repo: 'https://github.com/Alstermeria/alien.git',
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Challenge by Frontend Mentor',
    info: 'С использованием HTML, CSS и адаптивной верстки',
    url: 'https://alstermeria.github.io/project1/',
    repo: 'https://github.com/Alstermeria/project1.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Challenge by Frontend Mentor',
    info: 'С использованием HTML, CSS и адаптивной верстки',
    url: 'https://alstermeria.github.io/project2/',
    repo: 'https://github.com/Alstermeria/project2.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Для связи со мной',
  btn: 'Напишите мне',
  email: 'atmalsty@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'vk',
      url: 'https://vk.com/id36283391',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/alstermeria',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Alstermeria',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
