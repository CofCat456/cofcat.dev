import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import PostsLayout from '@/layouts/PostsLayout';

import { PageSEO } from '@/components/SEO';
import ContainerWrapper from '@/components/Wrapper/ContainerWrapper';

import { allPostsNew2Old } from '@/lib/contentLayerAdapter';

import siteMetadata from '@/data/siteMetadata';
import { POSTS_PER_PAGE_ } from '@/data/constants';
import { Post, Size } from '@/_interface';

type Props = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = allPostsNew2Old.map((post) => ({
    slug: post.slug,
    date: post.date,
    title: post.title,
    description: post.description,
    path: post.path,
  })) as Post[];
  return { props: { posts } };
};

const Posts: NextPage<Props> = ({ posts }) => {
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE_);

  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE_),
  };

  return (
    <>
      <PageSEO title={`${siteMetadata.title} All Posts`} />
      <ContainerWrapper size={Size.lg}>
        <PostsLayout
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
        />
      </ContainerWrapper>
    </>
  );
};

export default Posts;
