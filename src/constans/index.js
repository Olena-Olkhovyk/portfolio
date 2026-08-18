export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [-2, -6, -6] : isMobile ? [-6, -7, -7] : isTablet ? [-9, -6, -8] : [-8, -8, -6],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
  };
};

export const reviews = [
  {
    id: 1,
    name: 'Olena Voloshina',
    position: 'DIRECTOR, CUSTOMER SERVICE DEPARTMENT PRIVAT BANK',
    img: '../../public/assets/olena.webp',
    review:
      "As the director of Privat Bank's customer Service department, Olena proved to me her initiative-oriented prowess. She coped successfully with her official duties and also has good business communication skills. Olena has a high working capacity, strongly supports the work of the company in difficult moments, even outside working hours.In the team, she expressed her point of view and took the initiative to help team members adapt to the team.",
  },
  {
    id: 2,
    name: 'Oleksandr Chelombitko',
    position: 'PRIVATBANK SUPERVISOR',
    img: '../../public/assets/olexandr.webp',
    review:
      "During the period of long-term work with Olena, I can only give positive feedback. She was always responsible and proactive. Olena was never afraid of new challenges and changes. She always tries her possible best to find solutions quickly and efficiently. In her team, she has established herself as a leader both in work processes and in the life of the team. She has organizational and initiative-oriented skills."
  },
  {
    id: 3,
    name: 'Roman Sahaidak',
    position: '',
    img: '../../public/assets/review3.png',
    review: "I highly recommend Olena for her exceptional attention to detail. Her thoroughness and precision were evident in every task she undertook. During the timewe worked together on a projects, Olena consistently demonstrated exceptional creativity. She brought fresh and innovative ideas to every project, driving our team's success."
  },
  {
    id: 4,
    name: 'Armando Urquiola Cabrera',
    position: '',
    img: 'assets/review4.png',
    review: "I had the pleasure of working closely with Olena on a challenging project. Her exceptional problem-solving skills and attention to detail were instrumental in its success. I highly recommend Olena for her dedication, professionalism, and ability to deliver results. During our time working together, she consistently demonstrated communication skills. Her ability to convey complex ideas in a clear and concise manner was impressive."
  },
  {
    id: 5,
    name: 'Vladyslav Levtukhov',
    position: '',
    img: 'assets/review4.png',
    review: "It was the pleasure to work with Olena during the 'Team Challenge' project. We were implementing and working on 'Online Store for Gamers'. Olena showed herself as an organized, communicative, and hard-working, who always suggested new ideas during the meetings.  Her careful approach to tasks ensured accuracy and high-quality results."
  }
];


export const myProjects = [
  {
    title: 'Lorem3',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    subdesc: 'Lorem ipsum dolor sit amet, consetetur sadipscingLorem ipsum dolor sit amet, consetetur sadipscing',
    href: '',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      }
    ],
  },
  {
    title: 'Lorem2',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    subdesc: 'Lorem ipsum dolor sit amet, consetetur sadipscingLorem ipsum dolor sit amet, consetetur sadipscingLorem ipsum dolor sit amet, consetetur sadipscing',
    href: '',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      }
    ],
  },
  {
    title: 'Lorem1',
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    subdesc: 'Lorem ipsum dolor sit amet, consetetur sadipscingLorem ipsum dolor sit amet, consetetur sadipscingLorem ipsum dolor sit amet, consetetur sadipscing', 
    href: '',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      }
    ],
  },
];