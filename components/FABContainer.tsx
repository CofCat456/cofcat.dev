'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { ArrowToTopLineIcon, NewCommentIcon } from '~/assets';

import Button from './ui/Button';

const FABContainer = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) return setShow(true);

      setShow(false);
    };

    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const scrollTopHandler = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  const scrollToCommentHandler = () => {
    document.getElementById('comment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-[calc(2rem+env(safe-area-inset-bottom))] left-[calc(100vw-3rem-1rem)] z-10 flex flex-col gap-4 transition-transform duration-300 ease-in-out"
          exit={{ opacity: 0.3, scale: 0.8 }}
          initial={{ opacity: 0.3, scale: 0.8 }}
        >
          <Button
            aria-label="Back To Top"
            className="h-9 w-9 rounded-xl p-2"
            onClick={scrollTopHandler}
            variant="secondary"
          >
            <ArrowToTopLineIcon />
          </Button>

          <Button
            aria-label="Go To Comment"
            className="h-9 w-9 rounded-xl p-2"
            onClick={scrollToCommentHandler}
            variant="secondary"
          >
            <NewCommentIcon />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FABContainer;
