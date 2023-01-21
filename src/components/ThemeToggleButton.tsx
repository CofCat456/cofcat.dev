import { useState, useEffect, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { TbMoon, TbSun } from 'react-icons/tb';

const ThemeToggleButton: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('light');

  const sunRef = useRef<HTMLButtonElement>(null);
  const moonRef = useRef<HTMLButtonElement>(null);
  const nodeRef = theme === 'light' ? sunRef : moonRef;

  const toggleTheme: () => void = () => {
    const t: string = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', t);
    setTheme(t);
  };

  useEffect(() => {
    const root: HTMLElement = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [theme]);

  useEffect(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme') || 'light');
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }

    setIsMounted(true);
  }, []);

  return isMounted ? (
    <SwitchTransition>
      <CSSTransition
        key={theme}
        nodeRef={nodeRef}
        addEndListener={(done: () => void) => {
          if (nodeRef.current !== null) {
            console.log(nodeRef.current);
            nodeRef.current.addEventListener('transitionend', done, false);
          }
        }}
        classNames="fade"
      >
        <button
          ref={nodeRef}
          type="button"
          className="navItem themeToggleBtn"
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <TbSun key="light" className="text-2xl" />
          ) : (
            <TbMoon key="dark" className="text-2xl" />
          )}
        </button>
      </CSSTransition>
    </SwitchTransition>
  ) : (
    <div></div>
  );
};

export default ThemeToggleButton;
