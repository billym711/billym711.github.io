// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'billym711', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Game Dev Blogs',
          description:
            'Blogs featuring my work on Conquering Ciros, a game developed in Unity for my capstone project.',
          imageUrl:
            'https://cdn.cloudflare.steamstatic.com/steam/apps/2818530/header.jpg?t=1710278483',
          link: 'https://www.gamedev.net/blumagma711/',
        },
        {
          title: 'Pokemon Speedrunning Scripts and Tools',
          description:
            'A collection of work I made or edited for the Pokemon speedrunning community, mostly scripts that can calculate various RNG elements deterministically.',
          imageUrl:
            'https://www.nintendo.com/eu/media/images/10_share_images/games_15/game_boy_advance_7/SI_GBA_PokemonSapphire_enGB.jpg',
          link: 'https://github.com/billym711/PKMN-RS-Scripts',
        },
      ],
    },
  },
  seo: {
    title: 'William Moore Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'william-moore-69a32b1b3',
    phone: '812-327-2918',
    email: 'bmoorekid@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'SQL',
    'C#',
    'MySQL',
    'AWS',
    'Excel',
  ],
  experiences: [
    {
      company: 'Advance Auto Parts',
      position: 'Decision Science Intern',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: '',
    },
    {
      company: 'Daxko',
      position: 'Software Engineering Intern',
      from: 'June 2022',
      to: 'August 2022',
      companyLink: '',
    },
  ],
  certifications: [
    //{
   //   name: 'Lorem ipsum',
   //   body: 'Lorem ipsum dolor sit amet',
   //   year: 'March 2022',
   //   link: 'https://example.com',
  //  },
  ],
  educations: [
    {
      institution: 'Indiana University',
      degree: 'Bachelors of Science, Computer Science',
      from: '2020',
      to: '2024',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
