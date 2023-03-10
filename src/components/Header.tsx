import CustomLink from './Custom/CustomLink';
import ThemeToggle from './ThemeToggleButton';

import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';

const Header: React.FC = () => {
  return (
    <header className="overflw-hidden sticky top-0 z-50 h-16 w-full border-b border-slate-900/10 bg-cc-header backdrop-blur-[10px] dark:border-slate-50/[0.06] dark:bg-cc-dark-header-bg">
      <div className="mx-auto flex h-full max-w-full items-center justify-between px-4 sm:max-w-screen-sm sm:px-0 md:max-w-screen-md lg:max-w-screen-lg">
        <CustomLink href="/" className="select-none font-mplus text-2xl font-bold outline-none">
          {siteMetadata.headerTitle}
        </CustomLink>
        <nav className="nav">
          {headerNavLinks.map((link) => (
            <CustomLink key={link.title} href={link.href} className="navItem">
              {link.title}
            </CustomLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
