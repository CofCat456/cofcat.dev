import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import PostList, { PostForPostList } from '@/components/PagesComponents/Posts/PostList';
import { allPostsNew2Old } from '@/lib/contentLayerAdapter';
import ContainerWrapper, { Size } from '@/components/Wrapper/ContainerWrapper';

type PostForIndexPage = PostForPostList;

type Props = {
  posts: PostForIndexPage[];
};

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
  return (
    <ContainerWrapper size={Size.lg}>
      <div className="my-4 divide-y divide-gray-200 transition-colors dark:divide-gray-700">
        <div className="prose prose-lg my-8 dark:prose-dark">
          <h2>所有文章</h2>
        </div>
        <PostList posts={posts} />
      </div>
    </ContainerWrapper>
  );
};

export default Posts;
