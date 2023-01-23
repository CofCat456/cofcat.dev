import clsx from 'clsx';
import { motion as m } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  duration?: number;
  size?: Size;
}

export enum Size {
  md,
  lg,
}

const SizeMap = (size: Size) => {
  const widthStr = 'max-w-screen';
  const map = new Map().set(Size.md, `${widthStr}-md`).set(Size.lg, `${widthStr}-lg`);

  return map.get(size) || 'max-w-screen-md';
};

const ContainerWrapper: React.FC<Props> = ({ children, duration = 0.4, size = Size.md }) => {
  return (
    <m.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration, ease: 'easeInOut' }}
      className={clsx(
        'mx-auto h-full w-full bg-cc-bg text-cc-text transition-colors dark:bg-cc-dark-bg dark:text-cc-dark-text',
        SizeMap(size),
      )}
    >
      {children}
    </m.div>
  );
};

export default ContainerWrapper;
