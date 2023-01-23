import clsx from 'clsx';

import styles from './PostBody.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function PostBody({ children }: Props) {
  return (
    <div className={clsx('prose max-w-none transition-colors dark:prose-dark', styles.postBody)}>
      {children}
    </div>
  );
}
