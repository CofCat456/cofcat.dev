import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
}

const Body = ({ children }: Props) => {
  return (
    <div className={clsx('prose max-w-none transition-colors dark:prose-dark')}>
      {children}
    </div>
  );
};

export default Body;
