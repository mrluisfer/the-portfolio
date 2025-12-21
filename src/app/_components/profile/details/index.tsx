import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { GrLinkUp } from 'react-icons/gr';
import { CONTENT_TEXT_COLOR } from '..';

const detailsKeys = {
  location: 'location',
  website: 'website',
  github: 'gitHub',
  email: 'email',
};

export default function Details() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2">
      <DetailItem
        title={detailsKeys.location}
        description={'Mexico'}
        href="https://www.google.com/search?q=mexico"
      />
      <DetailItem
        title={detailsKeys.website}
        description={'mrluisfer.vercel.app'}
        href="https://mrluisfer.vercel.app"
      />
      <DetailItem
        title={detailsKeys.github}
        description={'mrluisfer'}
        href="https://github.com/mrluisfer"
      />
      <DetailItem
        title={detailsKeys.email}
        description={'mrluisfeer@gmail.com'}
        href="mailto:mrluisfeer@gmail.com"
        hovered
      />
    </div>
  );
}

function DetailItem({
  title,
  description,
  href = '',
  hovered = false,
}: {
  title: string;
  description: string;
  href: string;
  hovered?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <strong className="text-sm capitalize">{title}</strong>
      <Link
        href={href}
        className={cn(
          'group flex w-fit items-center gap-1 border-b border-transparent transition-colors hover:border-neutral-700',
          CONTENT_TEXT_COLOR,
          hovered ? 'dark:text-neutral-300' : ''
        )}
        target="_blank"
        rel="noopener noreferrer"
        title={description}
        aria-label={description}
      >
        {title === detailsKeys.github && '@'}
        {title === detailsKeys.location && (
          <Avatar className="h-5 w-5">
            <AvatarImage
              src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"
              alt="Mexico Flag"
              className="bg-cover object-cover"
            />
            <AvatarFallback>MX</AvatarFallback>
          </Avatar>
        )}
        {description}
        <span
          className={`ml-1 rotate-45 transition ${
            hovered ? 'opacity-100' : 'opacity-0'
          } group-hover:opacity-100`}
        >
          <GrLinkUp />
        </span>
      </Link>
    </div>
  );
}
