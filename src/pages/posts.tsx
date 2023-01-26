import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import { PageSEO } from '@/components/SEO';
import { Post } from '@/components/PagesComponents/Posts/PostList';
import { allPostsNew2Old } from '@/lib/contentLayerAdapter';
import ContainerWrapper, { Size } from '@/components/Wrapper/ContainerWrapper';

import siteMetadata from '@/data/siteMetadata';
import PostsLayout from '@/layouts/PostsLayout';

type PostForIndexPage = Post;

type Props = {
  posts: PostForIndexPage[];
};

const POSTS_PER_PAGE = 10;

export const getStaticProps: GetStaticProps<Props> = () => {
  const posts = allPostsNew2Old.map((post) => ({
    slug: post.slug,
    date: post.date,
    title: post.title,
    description: post.description,
    path: post.path,
  })) as PostForIndexPage[];
  return { props: { posts } };
};

const Posts: NextPage<Props> = ({ posts }) => {
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);

  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
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
