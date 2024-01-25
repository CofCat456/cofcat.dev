'use client';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const BottomToUpTransitionView = ({
  children,
  delay = 0,
  duration = 0.5,
}: Props) => {
  return (
    <motion.li
      animate={{
        opacity: 1,
        transition: {
          damping: 10,
          delay,
          duration,
          stiffness: 100,
          type: 'spring',
        },
        y: 0,
      }}
      exit={{
        opacity: 0.001,
        transition: {
          delay,
          duration,
        },
        y: 50,
      }}
      initial={{
        opacity: 0.001,
        y: 50,
      }}
      transition={{
        duration,
      }}
    >
      {children}
    </motion.li>
  );
};

export default BottomToUpTransitionView;
