import { useState } from 'react';

import { Post } from 'contentlayer/generated';

import PostList from '@/components/PagesComponents/Posts/PostList';
import Pagination, { PaginationType } from '@/components/Pagination';

type Props = {
  posts: Post[];
  initialDisplayPosts: Post[];
  pagination: PaginationType;
};

const PostsLayout: React.FC<Props> = ({ posts, initialDisplayPosts = [], pagination }) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = searchValue
    ? posts.filter((post) => {
        const searchContent = post.title + post.description;
        return searchContent.toLowerCase().includes(searchValue.toLowerCase());
      })
    : initialDisplayPosts;

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-10 pb-6 md:space-y-5">
          <h1 className="pb-4 text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            所有文章
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="搜尋標題或內文"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="搜尋標題或內文"
              className="block w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-neutral-900 transition-colors focus:border-sky-500 focus:ring-sky-500 dark:border-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 transition-colors dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <PostList posts={filteredBlogPosts} />
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  );
};

export default PostsLayout;
