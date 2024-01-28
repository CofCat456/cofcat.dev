'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

import siteMetadata from '~/config/siteMetadata';

const Comment = () => {
  const { theme } = useTheme();
  const { giscusConfig } = siteMetadata;

  // TODO: 重新定義資料格式 位置

  return (
    <div className="mx-auto max-w-prose py-6" id="comment">
      <Giscus
        category={giscusConfig.category}
        categoryId={giscusConfig.categoryId}
        emitMetadata="0"
        inputPosition="top"
        lang="zh-TW"
        loading="lazy"
        mapping="pathname"
        reactionsEnabled="1"
        repo={giscusConfig.repo}
        repoId={giscusConfig.repoId}
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
      />
    </div>
  );
};

export default Comment;
