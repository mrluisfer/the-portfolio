import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';
import { type ReactNode } from 'react';
import { CONTENT_TEXT_COLOR } from '.';

// Highlight component for emphasized text
const Highlight = ({ children }: { children: ReactNode }) => (
  <span className="font-semibold text-gray-900 dark:text-white">{children}</span>
);

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="pt-8 pb-4 sm:pt-10 sm:pb-5 lg:pt-12 lg:pb-6"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-4 sm:mb-5"
      >
        <div className="mb-2 flex items-center gap-3">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
            Experience
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-300 to-transparent" />
        </div>
      </motion.div>

      {/* Biography Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-4 sm:space-y-5"
      >
        {/* Paragraph 1 - Platform & Performance */}
        <motion.p
          className={`${CONTENT_TEXT_COLOR} text-sm leading-relaxed sm:text-base`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Throughout my career, I've focused on building scalable solutions that drive real business
          impact. I developed a{' '}
          <Highlight>unified platform to optimize products and accelerate delivery</Highlight>,
          which became a cornerstone for the team's workflow. One of my proudest achievements was
          improving system <Highlight>performance by 60%</Highlight> through strategic API migration
          and optimization techniques.
        </motion.p>

        {/* Paragraph 2 - Technical Contributions */}
        <motion.p
          className={`${CONTENT_TEXT_COLOR} text-sm leading-relaxed sm:text-base`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          I'm passionate about web performance and modern development practices. I've enhanced web
          performance by implementing industry best practices and contributed to integrating
          critical tools like <Highlight>Sentry for API monitoring</Highlight>. My work spans from
          customer tracking implementation with cookies to leading the{' '}
          <Highlight>Next.js and HubSpot integration</Highlight> for our company blog, ensuring
          seamless content delivery and analytics.
        </motion.p>

        {/* Paragraph 3 - Architecture & Quality */}
        <motion.p
          className={`${CONTENT_TEXT_COLOR} text-sm leading-relaxed sm:text-base`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          I've played a key role in refactoring our landing page with cutting-edge technologies,
          ensuring long-term scalability and maintainability. Code quality is paramount in my work—I
          actively participate in <Highlight>code reviews</Highlight> to maintain high standards and
          share knowledge with the team. Working with <Highlight>agile methodologies</Highlight>, I
          collaborate closely with cross-functional teams to deliver features on time while never
          compromising on quality.
        </motion.p>

        {/* Paragraph 4 - Philosophy */}
        <motion.p
          className={`${CONTENT_TEXT_COLOR} text-sm leading-relaxed sm:text-base`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Beyond writing code, I'm committed to continuous improvement and staying current with
          evolving technologies. I believe in building products that not only solve today's problems
          but are architected to adapt to tomorrow's challenges. Every project is an opportunity to
          learn, optimize, and create something meaningful.
        </motion.p>
      </motion.div>

      {/* Key Highlights - Subtle */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-6 border-t border-gray-200/50 pt-5 sm:mt-8 sm:pt-6"
      >
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[
            '60% Performance Boost',
            'Next.js',
            'API Migration',
            'Sentry Integration',
            'HubSpot',
            'Agile',
            'Code Reviews',
            'Web Performance',
          ].map((tag, index) => (
            <Badge variant={'outline'} key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
