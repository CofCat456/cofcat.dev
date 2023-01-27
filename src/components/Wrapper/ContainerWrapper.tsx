import clsx from 'clsx';
import { AnimatePresence, motion as m } from 'framer-motion';

import { Size } from '@/_interface';

interface Props {
  children: React.ReactNode;
  duration?: number;
  size?: Size;
}

const SizeMap = (size: Size) => {
  const widthStr = 'lg:max-w-screen';
  const map = new Map().set(Size.md, `${widthStr}-md`).set(Size.lg, `${widthStr}-lg`);

  return map.get(size) || `${widthStr}-md`;
};

const ContainerWrapper: React.FC<Props> = ({ children, duration = 0.4, size = Size.md }) => {
  return (
    <AnimatePresence initial={true} mode={'wait'}>
      <m.div
        layout
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration, ease: 'easeInOut' }}
        className={clsx(
          'mx-auto h-full w-full max-w-full sm:max-w-screen-sm md:max-w-screen-md',
          SizeMap(size),
        )}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};

export default ContainerWrapper;
