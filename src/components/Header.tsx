import ThemeToggle from './ThemeToggleButton';

import siteMetadata from '@/data/siteMetadata';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 h-16 w-full overflow-hidden bg-white backdrop-blur transition-colors dark:bg-cc-dark-header-bg">
      <div className="text-light-text dark:text-dark-text mx-auto flex h-full max-w-screen-lg items-center justify-between font-mplus">
        <a
          href="#"
          className="select-none text-2xl font-bold text-cc-text outline-none transition-colors dark:text-cc-dark-text"
        >
          {siteMetadata.headerTitle}
        </a>
        <nav className="nav">
          <a className="navItem">Blog</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
