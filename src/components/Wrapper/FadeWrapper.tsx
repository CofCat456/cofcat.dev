import { motion as m } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const FadeWrapper: React.FC<Props> = ({ children }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
      className="h-full w-full bg-cc-bg text-cc-text transition-colors dark:bg-cc-dark-bg dark:text-cc-dark-text"
    >
      {children}
    </m.div>
  );
};

export default FadeWrapper;
