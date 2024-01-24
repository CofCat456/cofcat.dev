'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { type LinkProps } from 'next/link';
import Link from 'next/link';
import { type AnchorHTMLAttributes, useState } from 'react';

import {
  GitHubIcon,
  type IconProps,
  MailIcon,
  TwitterIcon,
  YouTubeIcon,
} from '~/assets';
import { Tooltip } from '~/components/ui/Tooltip';

type IconType = (props: IconProps) => JSX.Element;
type Platform = 'github' | 'mail' | 'twitter' | 'youtube';
type PlatformInfo = {
  icon: IconType;
  label: string;
  platform: Platform;
};
const iconMapper: { [key: string]: PlatformInfo } = {
  '((?:t.co)|(?:twitter.com))': {
    icon: TwitterIcon,
    label: 'Twitter',
    platform: 'twitter',
  },
  '((?:youtu.be)|(?:youtube.com))': {
    icon: YouTubeIcon,
    label: 'YouTube',
    platform: 'youtube',
  },
  '(?:github.com)': { icon: GitHubIcon, label: 'GitHub', platform: 'github' },
  '(?:mailto:)': { icon: MailIcon, label: '邮箱地址', platform: 'mail' },
};

function getIconForUrl(url: string): PlatformInfo | undefined {
  for (const regexStr in iconMapper) {
    const regex = new RegExp(
      `^(?:https?:\/\/)?(?:[^@/\\n]+@)?(?:www.)?` + regexStr
    );
    if (regex.test(url)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return iconMapper[regexStr];
    }
  }

  return undefined;
}

function getIconForPlatform(
  platform: Platform | undefined
): PlatformInfo | undefined {
  if (!platform) {
    return undefined;
  }

  for (const info of Object.values(iconMapper)) {
    if (info.platform === platform) {
      return info;
    }
  }

  return undefined;
}

const SocialLink = ({
  href,
  platform,
  ...props
}: { platform?: Platform } & LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const [open, setOpen] = useState(false);
  const info = getIconForPlatform(platform) ?? getIconForUrl(href.toString());

  if (!info) {
    console.warn(`No icon found for ${href.toString()}`);

    return <Link href={href} {...props} />;
  }

  return (
    <Tooltip.Provider disableHoverableContent>
      <Tooltip.Root onOpenChange={setOpen} open={open}>
        <Tooltip.Trigger asChild>
          <Link
            aria-label={info.label}
            className="group -m-1 p-1"
            href={href}
            prefetch={false}
            target="_blank"
            {...props}
          >
            <info.icon className="h-5 w-5 text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200" />
          </Link>
        </Tooltip.Trigger>
        <AnimatePresence>
          {open && (
            <Tooltip.Portal forceMount>
              <Tooltip.Content asChild>
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.96 }}
                >
                  {info.label}
                </motion.div>
              </Tooltip.Content>
            </Tooltip.Portal>
          )}
        </AnimatePresence>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default SocialLink;
