import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useMDXComponent } from 'next-contentlayer/hooks';

import PostLayout, { PostForPostLayout, RelatedPostForPostLayout } from '@/layouts/PostLayout';
import mdxComponents from '@/lib/mdxComponents';
import { allPosts, allPostsNew2Old } from '@/lib/contentLayerAdapter';

type PostForPostPage = PostForPostLayout & {
  title: string;
  description: string;
  body: {
    code: string;
    raw: string;
  };
};

type Props = {
  post: PostForPostPage;
  prevPost: RelatedPostForPostLayout;
  nextPost: RelatedPostForPostLayout;
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map((post) => post.path);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const postIndex = allPostsNew2Old.findIndex((post) => post.slug === params?.slug);
  if (postIndex === -1) {
    return {
      notFound: true,
    };
  }
  const prevFull = allPostsNew2Old[postIndex + 1] || null;
  const prevPost: RelatedPostForPostLayout = prevFull
    ? { title: prevFull.title, path: prevFull.path }
    : null;
  const nextFull = allPostsNew2Old[postIndex - 1] || null;
  const nextPost: RelatedPostForPostLayout = nextFull
    ? { title: nextFull.title, path: nextFull.path }
    : null;
  const postFull = allPostsNew2Old[postIndex];
  const post: PostForPostPage = {
    title: postFull.title,
    date: postFull.date,
    description: postFull.description,
    body: {
      code: postFull.body.code,
      raw: postFull.body.raw,
    },
  };

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
      prevPost,
      nextPost,
    },
  };
};

const PostPage: NextPage<Props> = ({ post, prevPost, nextPost }) => {
  const {
    description,
    title,
    body: { code },
  } = post;

  const MDXContent = useMDXComponent(code);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostLayout post={post} prevPost={prevPost} nextPost={nextPost}>
        <MDXContent components={mdxComponents} />
      </PostLayout>
    </>
  );
};

export default PostPage;
