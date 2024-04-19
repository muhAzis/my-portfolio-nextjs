import { Techs } from './techs-data';

export interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  techStack: Techs[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: '1239070123',
    image: '/samisaum-banner.png',
    title: 'Samisaum | Prayer Times App',
    description:
      'Samisaum is an schedule app to check the Moslem’s prayer times in Indonesia. Build in the context of the month of Ramadhan because people are often don’t know what time is Imsak and as well as Iftar. This app come to handle that problem because it is very simple and easy to use.',
    tags: ['Frontend', 'PWA', 'UI/UX Design'],
    techStack: ['Typescript', 'React JS', 'Next JS'],
    github: 'https://github.com/muhAzis/samisaum',
    demo: 'https://samisaum.vercel.app/',
  },
];
