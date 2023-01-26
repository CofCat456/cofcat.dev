import { useTheme } from 'next-themes';

import Giscus from '@giscus/react';

import siteMetadata from '@/data/siteMetadata';

const Comment: React.FC = () => {
  const { theme } = useTheme();
  const { giscusConfig } = siteMetadata;

  return (
    <div id="comment" className="mx-auto max-w-prose py-6">
      <Giscus
        repo={giscusConfig.repo}
        repoId={giscusConfig.repoId}
        category={giscusConfig.category}
        categoryId={giscusConfig.categoryId}
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
        loading="lazy"
      />
    </div>
  );
};

export default Comment;
