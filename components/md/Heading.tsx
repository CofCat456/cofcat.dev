import { type ComponentPropsWithRef } from 'react';

type CustomHeadingProps = ComponentPropsWithRef<
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
> & {
  Component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

function CustomHeading({
  Component,
  children,
  id,
  ...otherProps
}: CustomHeadingProps) {
  return (
    <Component
      className="group scroll-mt-24 whitespace-pre-wrap"
      id={id}
      {...otherProps}
    >
      <span className="mr-3">{children}</span>
      <a
        aria-label="Anchor"
        className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 text-lg text-sky-400 no-underline opacity-0 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition group-hover:opacity-100 dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        href={id && `#${id}`}
      >
        #
      </a>
    </Component>
  );
}

export const CustomH1 = (props: React.ComponentPropsWithRef<'h1'>) => (
  <CustomHeading Component="h1" {...props} />
);
export const CustomH2 = (props: React.ComponentPropsWithRef<'h2'>) => (
  <CustomHeading Component="h2" {...props} />
);
export const CustomH3 = (props: React.ComponentPropsWithRef<'h3'>) => (
  <CustomHeading Component="h3" {...props} />
);
export const CustomH4 = (props: React.ComponentPropsWithRef<'h4'>) => (
  <CustomHeading Component="h4" {...props} />
);
export const CustomH5 = (props: React.ComponentPropsWithRef<'h5'>) => (
  <CustomHeading Component="h5" {...props} />
);
export const CustomH6 = (props: React.ComponentPropsWithRef<'h6'>) => (
  <CustomHeading Component="h6" {...props} />
);
