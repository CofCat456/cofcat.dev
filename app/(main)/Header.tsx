'use client';

import { motion } from 'framer-motion';

import { NavigationBar } from './NavigationBar';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <>
      <motion.header
        className="pointer-events-none sticky left-0 right-0 top-0 z-50 flex h-[4.5rem] flex-col"
        layout
        layoutRoot
      >
        <div className="mx-auto h-full w-full max-w-7xl lg:px-8">
          <div className="relative h-full px-4 sm:px-8 lg:px-12">
            <div className="mx-auto h-full max-w-2xl lg:max-w-5xl">
              <div className="relative flex h-full items-center gap-4">
                <div className="flex-1" />
                {/* NavigationBar */}
                <div className="flex flex-1 justify-end md:justify-center">
                  <NavigationBar.Mobile className="pointer-events-auto relative z-50 md:hidden" />
                  <NavigationBar.Desktop className="pointer-events-auto relative z-50 hidden md:block" />
                </div>

                {/* ThemeSwitcher */}
                <motion.div
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="flex justify-end gap-3 md:flex-1"
                  initial={{ opacity: 0, scale: 0.95, y: -20 }}
                >
                  <div className="pointer-events-auto">
                    <ThemeSwitcher />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
