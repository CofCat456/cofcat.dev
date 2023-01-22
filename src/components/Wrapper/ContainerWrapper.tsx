import { motion as m } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const ContainerWrapper: React.FC<Props> = ({ children }) => {
  return (
    <m.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="h-full w-full bg-cc-bg text-cc-text transition-colors dark:bg-cc-dark-bg dark:text-cc-dark-text"
    >
      {children}
    </m.div>
  );
};

export default ContainerWrapper;
