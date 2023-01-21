import { TbBrandGithub } from 'react-icons/tb';
import ThemeToggle from './ThemeToggleButton';

const Header: React.FC = () => {
  return (
    <header className="dark:bg-dark-800 fixed top-0 z-50 h-16 w-full overflow-hidden bg-white backdrop-blur dark:bg-dark-header-bg">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-between font-mplus text-light-text dark:text-dark-text">
        <a href="#" className="select-none text-2xl font-bold outline-none">
          CofCat
        </a>
        <nav className="nav">
          <a className="navItem">Blog</a>
          <a className="navItem">
            <TbBrandGithub className="text-2xl" />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
