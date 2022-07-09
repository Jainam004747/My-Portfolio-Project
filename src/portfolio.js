const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'JAINAM P.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'JAINAM PATEL',
  role: 'Front End and Back End developer',
  description:
    'I completed my diploma Dgree In informnation technology from GTU . Currently I am Pursuing my B.E In information technology from GTU.',
  resume: 'a',
  social: {
    linkedin: 'a',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'i make  button game  using react in wich you have to press any of  three buttons if total goes  above 10 you win or you loss',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Jainam004747/Button-game-using-react.git',
    livePreview: '',
  },
  {
    name: 'Project 2',
    description:
      'i make github profile serch page using api provided by github . in this app you can serch any users profile',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/Jainam004747/Github-Profile-search-using-react.git',
    livePreview: '',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'JAVA',
  'NodeJS',
  'Material UI',
  'Git',
  'Bootstraps',
  'PHP',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jainamjainampatel1234@gmail.com',
}

export { header, about, projects, skills, contact }
