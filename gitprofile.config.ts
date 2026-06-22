// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'SDC-M',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Projets GitHub',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Mes Projets',
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio de Sébastien De-backer',
    description: 'Portfolio de Sébastien De-backer, étudiant en Licence Informatique à l'université de Rouen Normandie',
    imageURL: '',
  },
  social: {
    linkedin: 'sébastien-de-backer-cuvelier', 
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'sebastien.cuvelier@univ-rouen.fr', 
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'Python',
    'Git / Github',
    'C',
    'Typst / LaTeX',
    'SQL',
    'Docker',
    'OCaml',
    'HTML / CSS / JavaScript',
    'TypeScript',
    'PHP',
    'Bash / Batch',
    'VueJS'
  ],
  experiences: [
    {
      company: 'ArianeGroup (Vernon)',
      position: 'Stagiaire Technicien Informatique - Développement Logiciel Python',
      from: 'Avril 2026',
      to: 'Juillet 2026',
      companyLink: 'https://www.ariane.group/',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Université de Rouen Normandie',
      degree: 'Licence Informatique (3ème année)',
      from: '2023',
      to: '2026',
    },
    {
      institution: 'INSA de Rouen Normandie',
      degree: 'Préparation intégrée École d\'ingénieur',
      from: '2022',
      to: '2023',
    },
    {
      institution: 'Lycée Général Gustave Flaubert',
      degree: 'Baccalauréat Mention Très bien Spécialités Mathématiques & Informatique',
      from: '2019',
      to: '2022',
    },
  ],
  publications: [],
  blog: {
    source: 'dev', 
    username: '', 
    limit: 2, 
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,

    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
      'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
      'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
      'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
      'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'caramellatte',
      'abyss', 'silk', 'procyon',
    ],
  },
  footer: ``,
  enablePWA: true,
};

export default CONFIG;
