import { useTheme } from 'next-themes';

import { useState, useEffect } from 'react';
import { TbMoon, TbSun } from 'react-icons/tb';
import { motion as m, AnimatePresence } from 'framer-motion';

const ThemeToggleButton: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme: () => void = () => {
    const t: string = theme === 'light' ? 'dark' : 'light';
    setTheme(t);
  };

  useEffect(() => {
    if (theme === 'dark' || resolvedTheme === 'dark') {
      setTheme('dark');
    }
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <AnimatePresence initial={false} mode={'wait'}>
      <m.button
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'linear' }}
        type="button"
        className="navItem themeToggleBtn"
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <TbSun key="light" className="text-2xl" />
        ) : (
          <TbMoon key="dark" className="text-2xl" />
        )}
      </m.button>
    </AnimatePresence>
  ) : (
    <div></div>
  );
};

export default ThemeToggleButton;
