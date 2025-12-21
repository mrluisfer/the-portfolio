import ExperienceTimeline from '@/components/shared/experience-timeline';
import { Button } from '@/components/ui/button';

import { FileIcon } from 'lucide-react';
import Link from 'next/link';

export default function ProjectTimeline() {
  return (
    <section className="px-6 pb-10 sm:px-10" id="experience">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-400">Experience</h2>
        <Button asChild size={'sm'}>
          <Link
            href="/luis-alvarez-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FileIcon size={14} /> Download CV
          </Link>
        </Button>
      </div>
      <div>
        <ExperienceTimeline />
      </div>
    </section>
  );
}
