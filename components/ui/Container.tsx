'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { type PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
  className?: string;
  duration?: number;
}>;

const Container = ({ children, className, duration = 0.4 }: ContainerProps) => {
  return (
    <AnimatePresence initial={true} mode={'wait'}>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className={clsx('mx-auto max-w-2xl lg:max-w-5xl', className)}
        exit={{ opacity: 0, y: 20 }}
        initial={{ opacity: 0, y: 20 }}
        layout
        transition={{ duration, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Container;
