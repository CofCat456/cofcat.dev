import { GetStaticPaths, GetStaticProps } from 'next';

import PostsLayout from '@/layouts/PostsLayout';

import { PageSEO } from '@/components/SEO';
import ContainerWrapper from '@/components/Wrapper/ContainerWrapper';
import { allPostsNew2Old } from '@/lib/contentLayerAdapter';

import siteMetadata from '@/data/siteMetadata';
import { POSTS_PER_PAGE_ } from '@/data/constants';
import { Post, Size } from '@/_interface';

type PathType = {
  params: {
    page: string;
  };
};

type Props = {
  posts: Post[];
  pageNumber: number;
};

export const getStaticPaths: GetStaticPaths = () => {
  let paths: PathType[] = [];
  const totalPages = Math.ceil(allPostsNew2Old.length / POSTS_PER_PAGE_);
  const pathsToAppend = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));
  paths = [...paths, ...pathsToAppend];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = params;
  const pageStr = typeof page === 'string' ? page : page.join('');

  const posts: Post[] = allPostsNew2Old.map((post: Post) => ({
    title: post.title,
    description: post.description,
    date: post.date,
    slug: post.slug,
    path: post.path,
  }));

  const pageNumber = parseInt(pageStr);

  return {
    props: {
      posts,
      pageNumber,
    },
  };
};

export default function PostListPage({ posts, pageNumber }: Props) {
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE_ * (pageNumber - 1),
    POSTS_PER_PAGE_ * pageNumber,
  );

  const pagination = {
    currentPage: pageNumber,
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
}
