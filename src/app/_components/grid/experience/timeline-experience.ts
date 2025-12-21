export type TExperience = {
  title: string;
  date: string;
  type: 'Remote' | 'On site' | 'Hybrid' | 'Freelance';
  time: 'Full-time' | 'Part-time';
  company: string;
};
export const timelineExperience: TExperience[] = [
  {
    title: 'Software Engineer',
    date: 'March 2023 - Nov 2024 · 1yr 9mos',
    type: 'Remote',
    time: 'Full-time',
    company: 'Nowports',
  },
  {
    title: 'Frontend Engineer',
    date: 'Aug 2022 - March 2023 · 8mos',
    type: 'Remote',
    time: 'Full-time',
    company: 'Nowports',
  },
  {
    title: 'Frontend Developer',
    date: 'Jan 2022 - Jul 2022 · 7mos',
    type: 'Remote',
    time: 'Full-time',
    company: 'Accenture',
  },
  {
    title: 'Frontend Web Developer',
    date: 'Sep 2020 - Jan 2022 · 1yr 5mos',
    type: 'Freelance',
    time: 'Part-time',
    company: 'Freelance',
  },
];
