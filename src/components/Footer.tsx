import Icon from '@/components/Icon';

import siteMetadata from '@/data/siteMetadata';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex flex-col items-center bg-cc-bg pt-16 text-cc-text transition-colors dark:bg-cc-dark-bg dark:text-cc-dark-text">
        <div className="mb-3 flex space-x-4">
          <Icon kind="mail" href={`mailto:${siteMetadata.email}`} />
          <Icon kind="github" href={siteMetadata.github} />
          <Icon kind="medium" href={siteMetadata.medium} />
          <Icon kind="resume" href={siteMetadata.resume} />
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 transition-colors dark:text-gray-400">
          <div>{`Copyright © 2022 - ${new Date().getFullYear()} ${siteMetadata.author}`}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
