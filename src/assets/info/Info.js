import self from '../img/self.png';
import kasaimg from '../img/kasaimg.png'
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Nicolas',
  lastName: 'Lousada',
  initials: 'LN', // the example uses first and last, but feel free to use three or more if you like.
  position: 'Développeur Web',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🌃',
      text: 'Je vie en France',
    },
    {
      emoji: '👨‍💻',
      text: 'Développeur Web',
    },
    {
      emoji: '📧',
      text: 'nicolousa.dev@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://ingrid0126.com/resume.pdf', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-user-circle',
      label: 'resume',
    },
    {
      link: 'https://github.com/nikos-fr',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/ingrid-xuan-fei/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],
  bio: "g",
  skills: {
    tools: ['Figma', 'Visual Studio code','React','JavaScript', 'github', 'Sass','Node','Express','Mango db', 'JSON','Basic HTML/CSS'],
  },
  hobbies: [
    {
      label: 'Video games',
      emoji: '🎮',
    },
    {
      label: 'Movies',
      emoji: '🎞',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    }
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Projet Kasa',
      live: 'https://kasa-delta-three.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikos-fr/portfolio-1', // this should be a link to the **repository** of the project, where the code is hosted.
      image: kasaimg,
    },
    {
      title: 'Projet Kasa',
      live: 'https://kasa-delta-three.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikos-fr/portfolio-1', // this should be a link to the **repository** of the project, where the code is hosted.
      image: kasaimg,
    },
    {
      title: 'Projet Kasa',
      live: 'https://kasa-delta-three.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikos-fr/portfolio-1', // this should be a link to the **repository** of the project, where the code is hosted.
      image: kasaimg,
    },
    {
      title: 'Projet Kasa',
      live: 'https://kasa-delta-three.vercel.app/', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/nikos-fr/portfolio-1', // this should be a link to the **repository** of the project, where the code is hosted.
      image: kasaimg,
    },
  ],
};
