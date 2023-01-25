import clsx from 'clsx';

import Mail from '@/assets/icon/mail.svg';
import Github from '@/assets/icon/github.svg';
import Medium from '@/assets/icon/medium.svg';

const components = {
  mail: Mail,
  github: Github,
  medium: Medium,
};

type Props = {
  kind: 'mail' | 'github' | 'medium';
  href: string;
};

const Icon = ({ kind, href }: Props) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null;

  const Icon = components[kind];

  return (
    <a className="text-sm" target="_blank" rel="noopener noreferrer" href={href}>
      <Icon
        className={clsx(
          `h-6 w-6 fill-current text-cc-text transition-colors dark:text-cc-dark-text`,
          kind === 'mail' && 'hover:text-red-500 dark:hover:text-red-400',
          kind === 'github' && 'hover:text-sky-500 dark:hover:text-sky-400',
          kind === 'medium' && 'hover:text-zinc-500 dark:hover:text-zinc-400',
          // kind === 'resume' && 'hover:text-[#13ab67] dark:hover:text-[#13ab67]',
        )}
      />
    </a>
  );
};

export default Icon;
