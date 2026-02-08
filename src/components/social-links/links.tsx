import {
  Bento,
  Dailydev,
  DailydevDark,
  Devto,
  DevtoDark,
  GitHub,
  GithubDark,
  GitLab,
  LinkedIn,
  Twitter,
} from '@/assets/icons/allIcons';
import { type ReactNode } from 'react';
import SocialMediaLinks from '../../constants/social-media-links';

type SocialLink = {
  href: string;
  alt: string;
  LightIcon: ReactNode;
  DarkIcon?: ReactNode;
  hoverClassName?: string;
};

const SOCIAL_LINKS: Array<SocialLink> = [
  {
    href: SocialMediaLinks.TWITTER,
    alt: 'Twitter: @mrLuisFer',
    LightIcon: <Twitter />,
    hoverClassName: 'hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 dark:hover:bg-[#1DA1F2]/20',
  },
  {
    href: SocialMediaLinks.GITHUB,
    alt: 'GitHub: mrLuisFer',
    LightIcon: <GitHub />,
    DarkIcon: <GithubDark />,
    hoverClassName: 'hover:text-[#181717] dark:hover:text-white hover:bg-muted/80',
  },
  {
    href: SocialMediaLinks.LINKEDIN,
    alt: 'LinkedIn: mrLuisFer',
    LightIcon: <LinkedIn />,
    hoverClassName: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 dark:hover:bg-[#0A66C2]/20',
  },
  {
    href: SocialMediaLinks.BENTO,
    alt: 'Bento: mrLuisFer',
    LightIcon: <Bento />,
    hoverClassName: 'hover:text-primary hover:bg-primary/10 hover:border-primary/30',
  },
  {
    href: SocialMediaLinks.DEVTO,
    alt: 'Dev.to: mrLuisFer',
    LightIcon: <Devto />,
    DarkIcon: <DevtoDark />,
    hoverClassName: 'hover:text-[#0A0A0A] dark:hover:text-white hover:bg-muted/80',
  },
  {
    href: SocialMediaLinks.GITLAB,
    alt: 'GitLab: mrLuisFer',
    LightIcon: <GitLab />,
    hoverClassName: 'hover:text-[#FC6D26] hover:bg-[#FC6D26]/10 dark:hover:bg-[#FC6D26]/20',
  },
  {
    href: SocialMediaLinks.DAILYDEV,
    alt: 'Daily.dev: mrLuisFer',
    LightIcon: <Dailydev />,
    DarkIcon: <DailydevDark />,
    hoverClassName: 'hover:text-foreground hover:bg-muted/80',
  },
];

export default SOCIAL_LINKS;
