'use client';
import Container from '@/components/container';
import { NAVIGATION_NAMES } from '@/constants/navigation-names';
import AboutMe from './about-me';
import Experience from './experience';
import Header from './header';

export const CONTENT_TEXT_COLOR =
  'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors leading-[1.8]';

export default function Profile() {
  return (
    <>
      <Container className="px-[30px] pt-16 pb-16 lg:px-0" asChild>
        <div id={NAVIGATION_NAMES.PROFILE}>
          <Header />
          <Experience />
          <AboutMe />
        </div>
      </Container>
      <hr />
    </>
  );
}
