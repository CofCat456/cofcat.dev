import { useTheme } from 'next-themes';
import { useState, useEffect, useRef } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { TbMoon, TbSun } from 'react-icons/tb';

const ThemeToggleButton: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const sunRef = useRef<HTMLButtonElement>(null);
  const moonRef = useRef<HTMLButtonElement>(null);
  const nodeRef = theme === 'light' ? sunRef : moonRef;

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
    <SwitchTransition>
      <CSSTransition
        key={theme}
        nodeRef={nodeRef}
        addEndListener={(done: () => void) => {
          if (nodeRef.current !== null) {
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
