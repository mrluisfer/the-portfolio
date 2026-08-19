export type TimelineItemData = {
  date: string;
  title: string;
  description: string;
  modality: string;
}

export const defaultTimelineData: TimelineItemData[] = [
  {
    date: 'May 2020 – Aug 2021',
    title: 'Frontend Developer - Self Employed',
    modality: 'Remote · Mexico City',
    description:
      'Designed, developed, and maintained responsive user interfaces for web applications. Collaborated with designers and backend developers to implement new features, enhance usability, and improve overall performance.',
  },
  {
    date: 'Aug 2021 – Jul 2022',
    title: 'Frontend Developer - Accenture',
    modality: 'Remote · Mexico City',
    description:
      'Enhanced UI/UX consistency and long-term maintainability across multiple landing pages and product interfaces. Worked within agile teams to deliver features on schedule while maintaining high code quality and performance standards.',
  },
  {
    date: 'Aug 2022 – Mar 2023',
    title: 'Senior Frontend Developer - Nowports',
    modality: 'Remote · Mexico City',
    description:
      'Implemented consent management systems, GA4, and GTM integrations to enable multi-region analytics and real-time performance tracking. Developed a high-performance blog platform using Next.js and HubSpot. Partnered with product, design, and marketing teams to translate business requirements into technical specifications and conducted code reviews. Refactored the company’s main landing page using a modern tech stack.',
  },
  {
    date: 'Mar 2023 – Dec 2024',
    title: 'Senior Full-Stack Developer - Nowports',
    modality: 'Remote · Mexico City',
    description:
      'Developed a unified component platform to standardize product interfaces and accelerate feature delivery. Contributed to an internal API migration that improved Time to Interactive by approximately 60% using NestJS, Prisma, and TypeScript. Integrated Sentry for monitoring and debugging, led peer code reviews, and refactored the main marketing site to enhance maintainability and loading performance.',
  },
  {
    date: 'Dec 2024 - Aug 2025',
    title: 'Professional Growth - Professional Break',
    modality: 'Remote · Mexico City',
    description: 'After sharing experiences with wonderful people and being part of an excellent team, I decided to take a temporary break. During this time, I continued to learn about new technologies and reflect on the future, with the goal of making clearer and more strategic decisions.'
  },
  {
    date: 'Sep 2025 – Aug 2026',
    title: 'Senior Full-Stack Developer - Credix',
    modality: 'On-site · Morelia, Michoacán',
    description:
      'Design, develop, and optimize internal financial applications for a credit and lending company using PHP, HTML, and vanilla JavaScript. Integrate APIs and external service providers while refactoring the codebase and database architecture to enhance system stability, scalability, and performance.',
  },
  {
    date: 'Aug 2026 - Present',
    title: 'Senior Full-Stack JavaScript Developer - ProcessTempo',
    modality: 'Remote · Mexico City',
    description:
      'Building new stuff...'
  }
];
