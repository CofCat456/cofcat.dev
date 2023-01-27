import { useRouter } from 'next/router';

import { useState } from 'react';
import { useEffect } from 'react';

import { AnimatePresence, motion as m } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  duration?: number;
}

const PostWrapper: React.FC<Props> = ({ children, duration = 0.4 }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const key: string = router.query.slug ? (router.query.slug as string) : 'default';
  const className =
    'mx-auto h-full w-full max-w-full transition-colors sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg';

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true));
    router.events.on('routeChangeComplete', () => setIsLoading(false));
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <m.div
          key={key}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration, ease: 'easeInOut' }}
          className={className}
        ></m.div>
      ) : (
        <m.div
          key={key}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration, ease: 'easeInOut' }}
          className={className}
        >
          {children}
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default PostWrapper;
