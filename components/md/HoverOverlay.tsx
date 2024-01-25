'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const HoverOverlay = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const $ref = ref.current;
    if (!$ref) return;
    const $parent = $ref.parentElement;
    if (!$parent) return;
    $parent.onfocus = () => {
      setMouseEnter(true);
    };

    $parent.onblur = () => {
      setMouseEnter(false);
    };

    return () => {
      $parent.onfocus = null;
      $parent.onblur = null;
    };
  }, []);
  return (
    <>
      <div
        className="absolute inset-0 z-10"
        onMouseEnter={() => {
          setMouseEnter(true);
        }}
        onMouseLeave={() => {
          setMouseEnter(false);
        }}
        ref={ref}
      />

      <AnimatePresence>
        {mouseEnter && (
          <motion.div
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className={clsx(
              'absolute z-0 rounded-xl',
              'bg-slate-300/50 dark:bg-neutral-800',
              'bottom-[1rem] left-[-1rem] right-[-1.5rem] top-[1rem]'
            )}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            initial={{
              opacity: 0.2,
              scale: 0.95,
            }}
            layout
            layoutId="post-item-hover-overlay"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default HoverOverlay;
