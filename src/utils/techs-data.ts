export interface Tech {
  name: Techs;
  icon: string;
}

export type Techs =
  | 'HTML'
  | 'CSS'
  | 'SASS'
  | 'Bootstrap'
  | 'Javascript'
  | 'Typescript'
  | 'Node JS'
  | 'Express JS'
  | 'React JS'
  | 'Next JS'
  | 'MongoDB'
  | 'Firebase'
  | 'Supabase'
  | 'C'
  | 'CPP'
  | 'GIT'
  | 'GitHub'
  | 'VS Code'
  | 'Figma'
  | 'Golang'
  | 'Flutter'
  | 'Dart'
  | 'Docker';

export const techs: Tech[] = [
  { name: 'HTML', icon: '/html.svg' },
  { name: 'CSS', icon: '/css.svg' },
  { name: 'SASS', icon: '/sass.svg' },
  { name: 'Bootstrap', icon: '/bootstrap.svg' },
  { name: 'Javascript', icon: '/javascript.svg' },
  { name: 'Typescript', icon: '/typescript.svg' },
  { name: 'Node JS', icon: '/nodejs.svg' },
  { name: 'Express JS', icon: '/expressjs.svg' },
  { name: 'React JS', icon: '/reactjs.svg' },
  { name: 'Next JS', icon: '/nextjs-dark.svg' },
  { name: 'MongoDB', icon: '/mongodb.svg' },
  { name: 'Firebase', icon: '/firebase.svg' },
  { name: 'Supabase', icon: '/supabase.svg' },
  { name: 'C', icon: '/c.svg' },
  { name: 'CPP', icon: '/cpp.svg' },
  { name: 'GIT', icon: '/git.svg' },
  { name: 'GitHub', icon: '/github.svg' },
  { name: 'VS Code', icon: '/vscode.svg' },
  { name: 'Figma', icon: '/figma.svg' },
  { name: 'Golang', icon: '/golang.svg' },
  { name: 'Flutter', icon: '/flutter.svg' },
  { name: 'Dart', icon: '/dart.svg' },
  { name: 'Docker', icon: '/docker.svg' },
];
