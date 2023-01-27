import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

import PostLayout, { RelatedPostForPostLayout } from '@/layouts/PostLayout';

import { BlogSEO } from '@/components/SEO';

import mdxComponents from '@/lib/mdxComponents';
import { allPosts, allPostsNew2Old, Post } from '@/lib/contentLayerAdapter';

import siteMetadata from '@/data/siteMetadata';

type Props = {
  post: Post;
  prevPost: RelatedPostForPostLayout;
  nextPost: RelatedPostForPostLayout;
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map((post: Post) => post.path);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const postIndex = allPostsNew2Old.findIndex((post: Post) => post.slug === params?.slug);
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
  const post: Post = {
    _id: postFull._id,
    _raw: postFull._raw,
    title: postFull.title,
    slug: postFull.slug,
    date: postFull.date,
    path: postFull.path,
    type: postFull.type,
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
    date,
    socialImage = '',
    path,
    body: { code },
  } = post;

  const MDXContent = useMDXComponent(code);

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}${path}`}
        title={`${title} - ${siteMetadata.title}`}
        description={description}
        date={date}
        socialImage={socialImage}
      />
      <PostLayout post={post} prevPost={prevPost} nextPost={nextPost}>
        <MDXContent components={mdxComponents} />
      </PostLayout>
    </>
  );
};

export default PostPage;
