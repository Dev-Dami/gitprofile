// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Dev-Dami', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 9, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Damilare-Osibanjo',
    description: 'Portfolio ',
    imageURL:
      'https://i.postimg.cc/Rh2gpJdq/Chat-GPT-Image-Aug-4-2025-01-37-09-PM.png',
  },
  social: {
    linkedin: 'damilare-osibanjo',
    x: 'garpfisher',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'nulleddami',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'devdami',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://dev-dami.github.io/gitprofile',
    phone: '+234 9043349743',
    email: 'damiade5banjo@gmail.com',
  },
  resume: {
    fileUrl: './src/assets/damicv.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Go',
    'Mongodb',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express',
    'Typescript',
    'Tailwind',
    'C',
    'Rust',
    'Python',
  ],
  experiences: [
    {
      company: 'Yeshua High School - Coding & Robotics Club',
      position: 'Head of Coding & Robotics Club',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://yeshuahighschool.com', // replace with actual link if available
    },
    {
      company: 'BuzzByte Interactive',
      position: 'Head Developer',
      from: 'June 2023',
      to: 'Present',
      companyLink: 'https://buzzbyteinteractive.com', // replace with actual link if available
    },
  ],

  certifications: [
    {
      name: 'Back-End Development and APIs',
      body: 'Completed FreeCodeCamp course on Back-End Development and APIs',
      year: '2025',
      link: 'https://www.freecodecamp.org/certification', // replace with actual certificate link if you have it
    },
    {
      name: 'Full Stack Development',
      body: 'Completed FreeCodeCamp Full Stack Development course',
      year: '2025',
      link: 'https://www.freecodecamp.org/certification', // replace with actual certificate link if you have it
    },
    {
      name: 'Go Programming Tutorial',
      body: 'Watched and completed FreeCodeCamp Go programming tutorial',
      year: '2025',
      link: 'https://www.freecodecamp.org', // link to Go tutorial
    },
  ],
  publications: [],

  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'devdami', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

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
      'dark',
      'synthwave',
      'halloween',
      'forest',
      'aqua',
      'autumn',
      'night',
      'coffee',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made by <a
      class="text-primary" href="https://github.com/Dev-Dami"
      target="_blank"
      rel="noreferrer"
    >Damilare</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
