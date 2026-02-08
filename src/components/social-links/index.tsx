'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import SocialLink from './link';
import SOCIAL_LINKS from './links';

export default function SocialLinks() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <>
      {SOCIAL_LINKS.map((link, id) => {
        const iconNode = isDark ? (link.DarkIcon ?? link.LightIcon) : link.LightIcon;
        return (
          <SocialLink key={id} href={link.href} alt={link.alt} hoverClassName={link.hoverClassName}>
            {iconNode}
          </SocialLink>
        );
      })}
    </>
  );
}
