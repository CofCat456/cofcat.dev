import rehypeSlug from 'rehype-slug';

import { defineDocumentType, makeSource } from './src/lib/contentLayerAdapter';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `content/posts/**/*.mdx`,
  contentType: 'mdx',
  mdx: {
    rehypePlugins: [rehypeSlug],
  },
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    socialImage: {
      type: 'string',
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (post) => `/posts/${post.slug}`,
    },
  },
}));

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `content/pages/**/*.mdx`,
  contentType: 'mdx',
  mdx: {
    rehypePlugins: [rehypeSlug],
  },
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (page) => `/pages/${page.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Page],
});
