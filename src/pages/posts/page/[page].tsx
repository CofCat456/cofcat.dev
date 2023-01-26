import { GetStaticPaths, GetStaticProps } from 'next';

import { PageSEO } from '@/components/SEO';
import siteMetadata from '@/data/siteMetadata';
import { allPostsNew2Old } from '@/lib/contentLayerAdapter';
import PostsLayout from '@/layouts/PostsLayout';
import { Post } from '@/components/PagesComponents/Posts/PostList';
import ContainerWrapper, { Size } from '@/components/Wrapper/ContainerWrapper';

type PathType = {
  params: {
    page: string;
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  let paths: PathType[] = [];
  const totalPages = Math.ceil(allPostsNew2Old.length / 10);
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

  const posts = allPostsNew2Old.map((post) => ({
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

type Props = {
  posts: Post[];
  pageNumber: number;
};

export default function PostListPage({ posts, pageNumber }: Props) {
  const initialDisplayPosts = posts.slice(10 * (pageNumber - 1), 10 * pageNumber);

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / 10),
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
