import { useTheme } from 'next-themes';

import Sun from '@/assets/icon/Sun.svg';
import Moon from '@/assets/icon/Moon.svg';

import { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

const ThemeToggleButton: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const iconClassName = 'h-6 w-6 fill-current';

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
          <Sun key="light" className={iconClassName} />
        ) : (
          <Moon key="dark" className={iconClassName} />
        )}
      </m.button>
    </AnimatePresence>
  ) : (
    <div></div>
  );
};

export default ThemeToggleButton;
