import Link from 'next/link';
import { type ComponentPropsWithoutRef } from 'react';

import { ExternalLinkIcon } from '~/assets';

type CustomLinkProps = ComponentPropsWithoutRef<'a'>;

const CustomLink = ({ children, href, ...rest }: CustomLinkProps) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...rest}
      className="inline-flex place-items-baseline items-baseline gap-0.5 pr-0.5 text-[0.95em] font-semibold leading-none text-sky-500 hover:underline dark:text-sky-300"
    >
      {children}
      {typeof children === 'string' && (
        <ExternalLinkIcon
          aria-hidden="true"
          className="inline-block translate-y-0.5"
          height="0.95em"
          width="0.95em"
        />
      )}
    </a>
  );
};

export default CustomLink;
