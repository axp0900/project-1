const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Anirudh Pappu',
  role: 'University of Maryland student studying CS-ML',
  description:
    'Rising senior at the University of Maryland + current Software and Applications Development Intern at Leidos + current Fullstack Engineer at UMD ',
  resume: 'https://drive.google.com/file/d/1TwxwVb7-KlHOAQ58gLLA3OdBa24yA_Mn/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/anirudh-pappu/',
    github: 'https://github.com/axp0900',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Develop a machine learning model to accurately classify breast cancer as malignant or benign using a decision treealgorithm. The model aims to assist in early diagnosis and treatment planning by leveraging the interpretability and effectiveness of decision trees',
    stack: ['Python'],
    sourceCode: 'https://github.com/axp0900/DecisionTree'
  },
  {
    name: 'Image Captioning Model',
    description:
      'Developed a deep learning model to automatically generate descriptive captions for images, combining Convolutional Neural Networks (CNN) for feature extraction and Long Short-Term Memory (LSTM) networks for sequence generation',
    stack: ['Python', 'PyTorch'],
    sourceCode: 'https://github.com/sgrvinod/a-PyTorch-Tutorial-to-Image-Captioning'
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Java',
  'SQL(Postgres)',
  'Material UI/Primereact',
  'Gi/Gitlab',
  'CI/CD',
  'Jest',
  'C/C++',
  'Node/Express.js',
  'FastAPI'

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'anipappuwork@gmail.com',
}

export { header, about, projects, skills, contact }
