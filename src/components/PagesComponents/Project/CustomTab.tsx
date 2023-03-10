import clsx from 'clsx';
import { Tab } from '@headlessui/react';

import { Category } from '@/data/projects';

interface Props {
  children: React.ReactNode;
}

const CustomTab: React.FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(Category).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                clsx(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-sky-400 shadow dark:text-sky-700'
                    : 'text-sky-900 hover:bg-white/[0.12] hover:text-white dark:text-sky-100',
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="my-4 md:my-10">{children}</Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default CustomTab;
